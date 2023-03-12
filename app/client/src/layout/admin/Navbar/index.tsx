import Link from 'next/link'
import { FiHome, FiSettings, FiLogIn } from 'react-icons/fi'
import { adminPagesMap } from '@/data/static'
import MenuItem from './MenuItem'

export default function Navbar() {
  return (
    <header className="md:min-w-[18rem] relative px-4 py-4 bg-gray-900 shadow-xl z-10">
      <nav>
        <span className="block mb-4 text-4xl">Logo</span>

        <ul className="flex flex-col gap-2">
          {adminPagesMap.map((page) => (
            <MenuItem
              key={page.label}
              label={page.label}
              path={page.path}
              icon={page.icon}
            />
          ))}
        </ul>

        <ul className="flex gap-4 absolute bottom-2 right-4">
          <li>
            <Link
              href="/"
              className="transition-colors text-gray-500 hover:text-white focus:text-white"
            >
              <FiHome size={24} />
            </Link>
          </li>

          <li>
            <Link
              href="/user/settings"
              className="transition-colors text-gray-500 hover:text-white focus:text-white"
            >
              <FiSettings size={24} />
            </Link>
          </li>

          <li>
            <Link
              href="/signout"
              className="transition-colors text-gray-500 hover:text-white focus:text-white"
            >
              <FiLogIn size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
