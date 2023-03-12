import { ReactNode } from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import { GrContact } from 'react-icons/gr'

export type PageProps = {
  path: string
  label: string
  primary: boolean
  private: boolean
}

export type AdminPageProps = {
  path: string
  label: string
  icon: ReactNode
}

type SocialMediaProps = {
  label: string
  url: string
  icon: ReactNode
}

export const pagesMap: PageProps[] = [
  {
    path: '/',
    label: 'Home',
    primary: true,
    private: false,
  },
  {
    path: '/about',
    label: 'About',
    primary: true,
    private: false,
  },
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    primary: false,
    private: false,
  },
]

export const adminPagesMap: AdminPageProps[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <RxDashboard size={24} />,
  },
  {
    path: '/dashboard/contact',
    label: 'Contact',
    icon: <GrContact size={24} className="stroke-white" />,
  },
]

export const socialMediaMap = [
  {
    label: 'Facebook',
    url: 'https://facebook.com',
    icon: <BsFacebook size="2rem" />,
  },
  {
    label: 'Youtube',
    url: 'https://youtube.com',
    icon: <BsYoutube size="2rem" />,
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <BsLinkedin size="2rem" />,
  },
  {
    label: 'GitHub',
    url: 'https://github.com',
    icon: <BsGithub size="2rem" />,
  },
] as SocialMediaProps[]
