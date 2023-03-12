import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { pageTitle } from '@/utils/pageData'

export default function PageNotFound() {
  const [count, setCount] = useState(3)
  const router = useRouter()

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      if (count === 0) return router.push('/')

      setCount((prevValue) => prevValue - 1)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [count])

  return (
    <>
      <Head>
        <title>{pageTitle('Page not found')}</title>
      </Head>

      <div className="flex-1 container grid place-items-center">
        <div className="text-center">
          <h1>404 error</h1>
          <h2>Page not found.</h2>

          <p>Redirecting to home in {count} seconds...</p>
        </div>
      </div>
    </>
  )
}
