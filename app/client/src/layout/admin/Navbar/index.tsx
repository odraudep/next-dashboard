import Link from 'next/link'
import { FiHome, FiSettings, FiLogIn } from 'react-icons/fi'
import { adminPagesMap } from '@/data/static'
import MenuCategory from './MenuCategory'

export default function Navbar() {
  return (
    <header className="h-screen relative px-4 py-4 bg-gray-900 overflow-auto shadow-xl z-10 md:min-w-[18rem]">
      <nav className="flex flex-col h-full">
        <span className="block mb-4 text-4xl">Logo</span>

        <ul className="flex flex-col gap-2 mb-6">
          {adminPagesMap.categories.map((category) => (
            <MenuCategory key={category} category={category} />
          ))}
        </ul>

        <ul className="flex gap-4 mt-auto">
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
              href="/user/signout"
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
