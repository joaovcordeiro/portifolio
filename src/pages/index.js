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


export default function Home() {
  return (
    <>
      <Head>
        <title>João Araujo</title>
        <meta name="description" content="Paginal inicial" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-colors-dark dark:text-colors-light w-full min-h-screen'>
        <Layout className='pt-0 md:p-16 sm:p-8 sm:pt-0'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full pl-4 '>
              <Image src={picture} alt="Wolf picture" className='w-full h-auto md:mb-6 md:inline-block ' priority sizes='(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw ' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Tornando Inspirações Em Realidade Com Código." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>Como um desenvolvedor full-stack, Sou dedicado a transformar ideias em aplicações. Explore meus ultimos projetos, apresentando meus conhecimentos em programação. </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/CVcar.pdf" target={"_blank"}
                  className='flex items-center bg-colors-dark text-colors-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-colors-light hover:text-colors-dark 
                  border-2 border-solid border-transparent hover:border-colors-dark
                  dark:bg-colors-light dark:text-colors-dark hover:dark:bg-colors-dark hover:dark:text-colors-light
                  hover:dark:border-colors-light md:p-2 md:px-4 md:text-base
                  '
                  download={true}
                >Curriculo <LinkArrow className="w-6 ml-1" />
                </Link>
                {/* <Link href="mailto:jjvictorac@gmail.com" target={"_blank"} className='ml-4 text-lg font-medium capitalize text-colors-dark underline dark:text-colors-light md:text-base'>Contato</Link> */}
              </div>
            </div>
            <Image src={bulbPicture} alt='LightBulb picture' className='w-1/6 absolute right-0 bottom-0 md:bottom-4' />
          </div>
          {/* <BulbIcon className="dark:fill-colors-light absolute right-8 bottom-4 inline-block lg:w-32 md:hidden" title='Designed by rawpixel.com / Freepik' alt="Light Bulb" /> */}
        </Layout>
        <HireMe />
      </main >

    </>
  )
}
