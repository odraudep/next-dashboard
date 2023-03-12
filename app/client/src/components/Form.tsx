import React from 'react'
import Button from './Button'

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
  submitLabel?: string
}

export default function Form({
  onSubmit,
  children,
  submitLabel = 'Submit',
}: FormProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {children}

      <Button type="submit" className="mt-4">
        {submitLabel}
      </Button>
    </form>
  )
}
