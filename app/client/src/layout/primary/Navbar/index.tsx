import Link from 'next/link'
import { pagesMap } from '@/data/static'
import MenuItem from './MenuItem'
import Button from '@/components/Button'
import { useAppSelector } from '@/hook'
import Dropdown from '@/components/Dropdown'

export default function Navbar() {
  const user = useAppSelector((state) => state.user)
  const isLogged = user.isLogged
  const userData = user.data

  return (
    <header className="fixed top-0 right-0 left-0 bg-gray-900/95 shadow z-10">
      <nav className="container flex items-center">
        <Link href="/">
          <span className="block font-bold text-2xl">Logo</span>
        </Link>

        <ul className="flex items-center gap-4 ml-auto">
          <li>
            <ul className="flex items-center gap-2">
              {pagesMap
                .filter((page) => page.primary && !page.private)
                .map((page) => (
                  <MenuItem
                    key={page.path}
                    path={page.path}
                    label={page.label}
                  />
                ))}
            </ul>
          </li>

          <li className="ml-4">
            {!isLogged ? (
              <ul className="flex gap-2">
                <li>
                  <Button to="/user/login">Sign In</Button>
                </li>

                <li>
                  <Button variant="secondary" to="/user/signup">
                    Sign Up
                  </Button>
                </li>
              </ul>
            ) : (
              <div className="flex items-center gap-4">
                {userData.isAdmin ? (
                  <Button to="/dashboard">Go to admin dashboard</Button>
                ) : null}

                <Dropdown label={`Hi, ${userData.firstName}`} />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
