import { pagesMap, socialMediaMap } from '@/data/static'
import Link from 'next/link'
import { IoLogoFlickr } from 'react-icons/io'

export default function Footer() {
  const actualYear = new Date().getFullYear()
  const releaseYear = 2023

  return (
    <footer className="bg-gray-900">
      <div className="container text-center">
        <p>
          Copyright &copy; {releaseYear}{' '}
          {actualYear > releaseYear ? `- ${actualYear}` : null}
        </p>
      </div>
    </footer>
  )
}
