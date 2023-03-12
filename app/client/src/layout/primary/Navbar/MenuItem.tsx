import Link from 'next/link'
import { useRouter } from 'next/router'

type MenuItemProps = {
  path: string
  label: string
}

export default function MenuItem({ path, label }: MenuItemProps) {
  const router = useRouter()
  const isCurrentRoute = router.pathname === path
  const baseClasses = `transition-colors ${
    isCurrentRoute
      ? 'text-white'
      : 'text-gray-400 hover:text-white focus:text-white'
  }`

  return (
    <li>
      <Link href={path} className={baseClasses}>
        {label}
      </Link>
    </li>
  )
}
