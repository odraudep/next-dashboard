import { useAppSelector } from '@/hook'
import React, { useState } from 'react'
import Button from './Button'
import Form from './Form'
import FormControl from './FormControl'

export default function HomeContact() {
  const user = useAppSelector((state) => state.user.data)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.table({ firstName, lastName, email, message })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        label="First Name"
        defaultValue={firstName}
        onChange={setFirstName}
      />
      <FormControl
        label="Last Name"
        defaultValue={lastName}
        onChange={setLastName}
      />
      <FormControl
        label="Email"
        defaultValue={email}
        type="email"
        onChange={setEmail}
      />
      <FormControl label="Message" type="textarea" onChange={setMessage} />
      <label className="flex gap-2">
        <input type="checkbox" required />
        <span>
          I agree with the{' '}
          <a
            href="/privacy-policy"
            target="_blank"
            className="underline text-cyan-500"
          >
            Privacy Policy
          </a>
        </span>
      </label>
    </Form>
  )
}
