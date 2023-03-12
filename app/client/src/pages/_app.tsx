import Layout from '@/layout'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/data/store'
import 'swiper/css'
import '@/styles/globals.sass'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
