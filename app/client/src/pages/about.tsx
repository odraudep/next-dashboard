import { pageTitle } from '@/utils/pageData'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>{pageTitle('Home')}</title>
      </Head>

      <div className="container">
        <div className="pt-navbar">
          <h1>About</h1>
        </div>
      </div>
    </>
  )
}
