import dynamic from 'next/dynamic'
import Head from 'next/head'
import { pageTitle } from '@/utils/pageData'

const Chart = dynamic(() => import('@/components/Chart'), { ssr: false })

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>{pageTitle('Admin')}</title>
      </Head>

      <div className="container">
        <h1>Overview</h1>

        <div className="flex gap-8 text-white">
          <Chart
            settings={{
              width: 380,
              type: 'donut',
              series: [44, 55, 13, 43, 22],
              options: {
                chart: {
                  width: 380,
                  foreColor: '#fff',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200,
                      },
                      legend: {
                        position: 'bottom',
                      },
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div className="min-h-[200vh]"></div>
      </div>
    </>
  )
}
