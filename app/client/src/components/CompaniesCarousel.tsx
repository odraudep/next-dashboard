import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import styles from '@/styles/CompaniesCarousel.module.sass'

const companies = [
  {
    label: 'Airbnb',
    imagePath: '/img/companies_logo/airbnb-logo.png',
  },
  {
    label: 'Apple',
    imagePath: '/img/companies_logo/apple-logo.png',
  },
  {
    label: 'Google',
    imagePath: '/img/companies_logo/google-logo.png',
  },
  {
    label: 'HBO',
    imagePath: '/img/companies_logo/hbo-logo.png',
  },
  {
    label: 'LG',
    imagePath: '/img/companies_logo/lg-logo.png',
  },
  {
    label: 'logitech',
    imagePath: '/img/companies_logo/logitech-logo.png',
  },
  {
    label: 'Microsoft',
    imagePath: '/img/companies_logo/microsoft-logo.png',
  },
  {
    label: 'Netflix',
    imagePath: '/img/companies_logo/netflix-logo.png',
  },
  {
    label: 'Sony',
    imagePath: '/img/companies_logo/sony-logo.png',
  },
  {
    label: 'Nvidia',
    imagePath: '/img/companies_logo/nvidia-logo.png',
  },
]

export default function CompaniesCarousel() {
  return (
    <Swiper
      loop={true}
      freeMode={true}
      spaceBetween={20}
      grabCursor={true}
      slidesPerView={1}
      autoplay={{
        delay: 1,
        disableOnInteraction: true,
      }}
      speed={1500}
      modules={[Autoplay]}
      className={styles.slider}
      breakpoints={{
        1366: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4,
          speed: 2000,
        },
        320: {
          slidesPerView: 2,
          speed: 2500,
        },
      }}
    >
      {companies.map((company) => (
        <SwiperSlide
          key={company.label}
          className="flex justify-center items-center h-auto p-4 rounded bg-white"
        >
          <Image
            src={company.imagePath}
            alt={`Logo - ${company.label}`}
            width={200}
            height={100}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
