import { useAppSelector } from '@/hook'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { AiOutlineUser, AiFillCaretDown } from 'react-icons/ai'
import { IoMdArrowDropup } from 'react-icons/io'

type MenuItemProps = { label: string; path: string }

type DropdownProps = {
  className?: string
  icon?: React.ReactNode
  label?: string
  menuItems?: MenuItemProps[]
}

export default function Dropdown({
  className,
  icon,
  label,
  menuItems = [
    {
      label: 'Settings',
      path: '/user/settings',
    },
    {
      label: 'Sign Out',
      path: '/user/signout',
    },
  ],
}: DropdownProps) {
  const dropdownMenu = useRef<HTMLDivElement>(null)
  const user = useAppSelector((state) => state.user.data)

  const closeDropdownMenu = () => {
    dropdownMenu.current?.classList.add('hidden')
  }

  const closeAllDropdowns = () => {
    const dropdownsMenu = document.querySelectorAll('.c-dropdown__menu')
    dropdownsMenu.forEach((dropdownMenu) => {
      dropdownMenu.classList.add('hidden')
    })
  }

  const toggleDropdownMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()

    const isHidden = dropdownMenu.current?.classList.contains('hidden')

    closeAllDropdowns()

    if (isHidden) {
      dropdownMenu.current?.classList.remove('hidden')
    } else {
      dropdownMenu.current?.classList.add('hidden')
    }
  }

  const handleBodyClick = () => {
    closeDropdownMenu()
  }

  useEffect(() => {
    addEventListener('click', handleBodyClick)

    return () => removeEventListener('click', handleBodyClick)
  }, [])

  return (
    <div
      className={classNames('c-dropdown flex items-center relative', className)}
    >
      <button
        type="button"
        className="flex items-center gap-3"
        onClick={toggleDropdownMenu}
      >
        {icon ? (
          <>{icon}</>
        ) : (
          <div className="rounded-full overflow-hidden bg-gray-500 w-7 h-7 relative">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt="Avatar"
                fill
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <AiOutlineUser size={28} />
            )}
          </div>
        )}

        {label ? (
          <div className="flex items-center gap-1 text-gray-400">
            <span>{label}</span>

            <AiFillCaretDown size={12} />
          </div>
        ) : null}
      </button>

      <div
        ref={dropdownMenu}
        className="c-dropdown__menu hidden absolute top-full mt-3 w-max"
      >
        <ul
          role="menu"
          className="overflow-hidden rounded bg-gray-700 shadow relative z-10"
        >
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                className="block px-3 py-1 hover:bg-gray-500 focus:bg-gray-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <IoMdArrowDropup
          className="absolute top-0 -translate-y-4 text-gray-700"
          size={28}
        />
      </div>
    </div>
  )
}
