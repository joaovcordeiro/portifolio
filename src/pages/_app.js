import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const monstserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <main className={`${monstserrat.variable} font-mont bg-colors-light dark:bg-colors-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
