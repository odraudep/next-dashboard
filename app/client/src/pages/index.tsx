import Head from 'next/head'
import { BsMouse } from 'react-icons/bs'
import { GiHummingbird } from 'react-icons/gi'
import Image from 'next/image'
import { pageTitle } from '@/utils/pageData'
import Button from '@/components/Button'
import CompaniesCarousel from '@/components/CompaniesCarousel'
import HomeContact from '@/components/HomeContact'
import { useAppSelector } from '@/hook'
import styles from '@/styles/Home.module.sass'

export default function Home() {
  const user = useAppSelector((state) => state.user)
  const userData = user.data
  const userIsAuthenticated = user.isLogged
  const firstScrollNext = () => {
    scrollTo({
      top: innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Head>
        <title>{pageTitle('Home')}</title>
      </Head>

      <section className="min-h-screen grid place-items-center pt-navbar relative bg-blue-800">
        <div className="container text-center">
          <h1>Dashboard Next App</h1>
          <h2>A dashboard application made with NextJS</h2>
          {userIsAuthenticated ? (
            <>
              {userData.isAdmin ? (
                <Button variant="secondary" className="mt-8" to="/dashboard">
                  Go to the dashboard
                </Button>
              ) : null}
            </>
          ) : (
            <Button variant="secondary" className="mt-8" to="/login">
              Subscribe now
            </Button>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            type="button"
            className="animate-bounce"
            onClick={firstScrollNext}
          >
            <BsMouse size="3rem" />
          </button>
        </div>
      </section>

      <div>
        <section className="pt-navbar">
          <div className="container grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/img/fortnite-figure.svg"
                alt="Fornite"
                width={800}
                height={800}
                className="max-w-md w-full mx-auto md:w-[800px] md:max-w-full"
              />
            </div>

            <div>
              <h2>Want to have fun playing Fortnite?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                nulla inventore ipsam recusandae. Vel reiciendis porro veritatis
                rerum maxime! Aspernatur!
              </p>
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>

              <h2>Lorem, ipsum dolor.</h2>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div className="flex justify-center gap-8 mt-8">
                <GiHummingbird size="4rem" className="animate-pulse" />

                <GiHummingbird
                  size="4rem"
                  className="animate-pulse -scale-x-100"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.companies}>
          <div className="pb-12">
            <div className="container">
              <h1>Companies</h1>
              <h2>See the companies that support this project:</h2>
            </div>

            <CompaniesCarousel />

            <div className="flex justify-center mt-8 text-xl text-center">
              <p className="px-4 py-1 rounded border border-yellow-600">
                Remember, all the examples on this project are fully fictional
                😉👍
              </p>
            </div>
          </div>
        </section>

        <hr className="my-4" />

        <section>
          <div className="container grid md:grid-cols-2 gap-8">
            <div>
              <h2>Contact</h2>

              <HomeContact />
            </div>

            <div className="flex -order-1 md:-order-none">
              <Image
                src="/img/contact-figure.svg"
                alt="Contact Figure"
                width={750}
                height={750}
                className="max-w-sm mr-auto ml-auto my-auto md:max-w-full md:mr-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
