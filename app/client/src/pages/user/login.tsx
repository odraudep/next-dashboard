import React from 'react'
import Form from '@/components/Form'
import FormControl from '@/components/FormControl'
import Head from 'next/head'
import { pageTitle } from '@/utils/pageData'

export default function Login() {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('login')
  }

  return (
    <>
      <Head>
        <title>{pageTitle('Login')}</title>
      </Head>

      <div className="pt-navbar">
        <div className="container">
          <h1>Login</h1>

          <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <FormControl label="E-mail" onChange={() => {}} />
            <FormControl label="Password" type="password" onChange={() => {}} />
          </Form>
        </div>
      </div>
    </>
  )
}
