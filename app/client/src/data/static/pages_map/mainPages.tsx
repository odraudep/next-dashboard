export type PageProps = {
  path: string
  label: string
  primary: boolean
  private: boolean
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
