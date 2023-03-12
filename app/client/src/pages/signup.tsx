import React from 'react'
import FormControl from '@/components/FormControl'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Head from 'next/head'
import { pageTitle } from '@/utils/pageData'

export default function Signup() {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('sign up')
  }

  return (
    <>
      <Head>
        <title>{pageTitle('Sign up')}</title>
      </Head>

      <div className="pt-navbar">
        <div className="container">
          <h1>Sign up</h1>

          <Form onSubmit={handleSubmit}>
            <FormControl label="First Name" onChange={() => {}} />
            <FormControl label="Last Name" onChange={() => {}} />
            <FormControl label="Email" onChange={() => {}} />
            <FormControl label="Password" onChange={() => {}} />
          </Form>
        </div>
      </div>
    </>
  )
}
