import { ReactNode } from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs'

type SocialMediaProps = {
  label: string
  url: string
  icon: ReactNode
}

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
