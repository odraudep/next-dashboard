import classNames from 'classnames'
import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  to?: string
}

export default function Button({
  type = 'button',
  className,
  to,
  children,
  variant = 'primary',
  ...restProps
}: Props) {
  let variantClass:
    | 'btn--primary'
    | 'btn--secondary'
    | 'btn--danger'
    | 'btn--success'

  switch (variant) {
    case 'primary':
      variantClass = 'btn--primary'
      break
    case 'secondary':
      variantClass = 'btn--secondary'
      break
    case 'danger':
      variantClass = 'btn--danger'
      break
    case 'success':
      variantClass = 'btn--success'
      break
  }

  const baseClasses = classNames(`btn ${variantClass}`, className)

  return (
    <>
      {to ? (
        <Link href={to} className={baseClasses}>
          {children}
        </Link>
      ) : (
        <button type={type} className={baseClasses} {...restProps}>
          {children}
        </button>
      )}
    </>
  )
}
