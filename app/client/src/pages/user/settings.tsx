import React from 'react'
import Head from 'next/head'
import { pageTitle } from '@/utils/pageData'

export default function Settings() {
  return (
    <>
      <Head>
        <title>{pageTitle('Login')}</title>
      </Head>

      <div className="pt-navbar">
        <div className="container">
          <h1>Settings</h1>
        </div>
      </div>
    </>
  )
}
