import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'react-hot-toast'
import { DefaultSeo } from 'next-seo'

const monstserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo
        title="João Araujo"
        description="Pagina inicial"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://jvaraujo.com.br',
          site_name: 'João Araujo',
          images: [
            {
              url: 'https://jvaraujo.com.br/images/profile/wolf.png',
              width: 800,
              height: 600,
              alt: 'Wolf picture',
            },
          ],
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={`${monstserrat.variable} font-mont bg-colors-light dark:bg-colors-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
          <Analytics />
          <Toaster position='bottom-right' />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
