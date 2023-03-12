import { ReactNode } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { GrContact } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'
import { GrArticle } from 'react-icons/gr'
import { BiDevices } from 'react-icons/bi'

export type AdminPageProps = {
  categories: string[]
  pages: { path: string; label: string; icon: ReactNode; category: string }[]
}

export const adminPagesMap: AdminPageProps = {
  categories: ['', 'Management', 'Support'],
  pages: [
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: <RxDashboard size={24} />,
      category: '',
    },
    {
      path: '/dashboard/users',
      label: 'Users',
      icon: <FiUsers size={24} />,
      category: 'Management',
    },
    {
      path: '/dashboard/contact',
      label: 'Contact',
      icon: <GrContact size={24} className="stroke-white" />,
      category: 'Support',
    },
    {
      path: '/dashboard/articles',
      label: 'Articles',
      icon: <GrArticle size={24} className="stroke-white" />,
      category: 'Support',
    },
    {
      path: '/dashboard/device',
      label: 'Device',
      icon: <BiDevices size={24} className="stroke-white" />,
      category: 'Support',
    },
  ],
}
