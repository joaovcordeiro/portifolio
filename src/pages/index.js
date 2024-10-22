import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import picture from "../../public/images/profile/wolf.png"
import bulbPicture from "../../public/images/profile/bulb.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import { request } from '@/lib/datocms'



export default function Home({ data, NEXT_WHAT_NUMBER }) {
  return (
    <>
      <Head>
        <title>João Araujo</title>
        <meta name="description" content="Paginal inicial" />
        <meta property="og:title" content="João Araujo" />
        <meta
          property="og:description"
          content="Pagina Inicial"
        />
        <meta
          property="og:image"
          content="https://www.jvaraujo.com.br/pagina_inicial.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/profile/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/profile/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/profile/favicon-16x16.png" />
        <link rel="manifest" href="/images/profile/site.webmanifest" />
        <link rel="mask-icon" href="/images/profile/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-colors-dark dark:text-colors-light w-full min-h-screen'>
        <Layout className='pt-0 md:p-16 sm:p-8 sm:pt-0'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full pl-4 '>
              <Image src={picture} alt="Wolf picture" className='w-full h-auto md:mb-6 md:inline-block ' priority sizes='(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw ' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
              <AnimatedText text="Construindo Pontes Entre Dados e Negócios." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>Engenheiro de Dados focado em criar pipelines eficientes que impulsionam insights de negócios e otimizam resultados. </p>
              <div className='flex items-center self-start mt-2 lg:self-center gap-4'>
              <Link href="/projetos" 
                  className='flex items-center bg-colors-dark text-colors-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-colors-light hover:text-colors-dark 
                  border-2 border-solid border-transparent hover:border-colors-dark
                  dark:bg-colors-light dark:text-colors-dark hover:dark:bg-colors-dark hover:dark:text-colors-light
                  hover:dark:border-colors-light md:p-2 md:px-4 md:text-base
                  '
                >Ver Projetos 
                </Link>
                <Link href={data.curriculo.documento.url} target={"_blank"}
                  className='flex items-center bg-colors-dark text-colors-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-colors-light hover:text-colors-dark 
                  border-2 border-solid border-transparent hover:border-colors-dark
                  dark:bg-colors-light dark:text-colors-dark hover:dark:bg-colors-dark hover:dark:text-colors-light
                  hover:dark:border-colors-light md:p-2 md:px-4 md:text-base
                  '
                  download={true}
                >Curriculo <LinkArrow className="w-6 ml-1" />
                </Link>
                
              </div>
            </div>
            <Image src={bulbPicture} alt='LightBulb picture' className='w-1/6 absolute right-0 bottom-0 md:bottom-4' />
          </div>
        </Layout>
        {/* <HireMe number={NEXT_WHAT_NUMBER} /> */}
      </main >

    </>
  )
}

export async function getStaticProps() {
  const { NEXT_WHAT_NUMBER } = process.env

  const contentQuery = `query {
    curriculo {
      id
      documento {
        url
      }
    }
  }`

  const data = await request({
    query: contentQuery,
    variables: { limit: 10 }
  })

  return {
    props: {
      data,
      NEXT_WHAT_NUMBER
    }
  }
}
