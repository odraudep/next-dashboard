import Head from 'next/head'
import { pageTitle } from '@/utils/pageData'

export default function Contact() {
  return (
    <>
      <Head>
        <title>{pageTitle('Contact')}</title>
      </Head>

      <div className="container">
        <h1>Contact</h1>

        <div className="min-h-[200vh]"></div>
      </div>
    </>
  )
}
