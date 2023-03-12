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

        <ul className="flex gap-8">
          <li className="p-2 rounded shadow-lg">
            <h2>Users device</h2>
            <Chart
              settings={{
                width: 380,
                type: 'donut',
                series: [74, 225],
                options: {
                  colors: ['#009914', '#b99213'],
                  chart: {
                    width: 380,
                    foreColor: '#fff',
                  },
                  labels: ['Mobile', 'Desktop'],
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
          </li>

          <li className="p-2 rounded shadow-lg">
            <h2>Users country</h2>
            <Chart
              settings={{
                width: 380,
                type: 'donut',
                series: [169, 110, 20],
                options: {
                  colors: ['#610099', '#13b9a3', '#bb2d2d'],
                  chart: {
                    width: 380,
                    foreColor: '#fff',
                  },
                  labels: ['Brazil', 'USA', 'Germany'],
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
          </li>
        </ul>

        <div className="min-h-[200vh]"></div>
      </div>
    </>
  )
}
