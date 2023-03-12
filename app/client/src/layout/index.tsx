import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import PrimaryNavbar from './primary/Navbar'
import PrimaryFooter from './primary/Footer'
import AdminNavbar from './admin/Navbar'
import AdminFooter from './admin/Footer'
import AdminAside from './admin/Aside'
import { useAppSelector } from '@/hook'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const router = useRouter()
  const userIsAuthenticated = useAppSelector((state) => state.user.isLogged)

  if (router.pathname.includes('/dashboard')) {
    if (!userIsAuthenticated) return null

    return (
      <div
        className={classNames(
          'flex bg-blue-900 text-white admin-route',
          roboto.className
        )}
      >
        <AdminNavbar />

        <div className="flex-1">
          <main>{children}</main>

          <AdminFooter />
        </div>

        <AdminAside />
      </div>
    )
  }

  return (
    <div className={classNames('bg-gray-800 text-white', roboto.className)}>
      <PrimaryNavbar />

      <main>{children}</main>

      <PrimaryFooter />
    </div>
  )
}
