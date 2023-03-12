import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type MenuItemProps = {
  path: string
  label: string
  icon: ReactNode
}

export default function MenuItem({ path, label, icon }: MenuItemProps) {
  const router = useRouter()
  const isCurrentRoute = router.pathname === path
  const baseClasses = `transition-colors flex items-center gap-2 px-4 py-2 rounded-xl ${
    isCurrentRoute
      ? 'text-white bg-blue-800/50'
      : 'text-gray-400 hover:bg-gray-500/75 focus:bg-gray-500/75 hover:text-white focus:text-white'
  }`

  return (
    <li>
      <Link href={path} className={baseClasses}>
        {icon}
        {label}
      </Link>
    </li>
  )
}
