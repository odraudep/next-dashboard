import { pagesMap, socialMediaMap } from '@/data/static'
import Link from 'next/link'
import { IoLogoFlickr } from 'react-icons/io'

export default function Footer() {
  const actualYear = new Date().getFullYear()
  const releaseYear = 2023

  return (
    <footer className="flex flex-col gap-4 pt-8 bg-gray-900">
      <div className="container grid grid-cols-5">
        <div className="col-start-2">
          <span className="block mb-2">
            <IoLogoFlickr size="4rem" className="text-purple-700" />
          </span>

          <span>
            <span className="text-rose-500">Dashboard</span>{' '}
            <span className="text-orange-400">Next</span>{' '}
            <span className="text-pink-400">App</span>
          </span>
        </div>

        <div>
          <h4>Site Map</h4>

          <ul>
            {pagesMap
              .filter((page) => !page.private)
              .map((page) => (
                <li key={`footer-menu${page.label}`}>
                  <Link
                    href={page.path}
                    className="text-gray-400 transition-colors hover:underline hover:text-white focus:underline focus:text-white"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4>Social Media</h4>

          <ul className="flex items-end gap-4">
            {socialMediaMap.map((socialMedia) => (
              <li key={`footer-menu-${socialMedia.label}`}>
                <a
                  href={socialMedia.url}
                  target="_blank"
                  title={socialMedia.label}
                  className="text-gray-400 transition-colors hover:text-white focus:text-white"
                >
                  {socialMedia.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-white/20" />

      <div className="container text-center">
        <p>
          Copyright &copy; {releaseYear}{' '}
          {actualYear > releaseYear ? `- ${actualYear}` : null}
        </p>
      </div>
    </footer>
  )
}
