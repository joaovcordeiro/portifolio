import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Certifications from "@/components/Certification"
import TransitionEffect from "@/components/TransitionEffect"
import picture from "../../public/images/profile/perfil.jpg"
import Image from 'next/image'

export default function Sobre() {


    return (
        <>
            <Head>
                <title>João Araujo | Sobre</title>
                <meta name="descrição" content="Descrição pessoal" />
                <meta name="description" content="Sobre" />
                <meta property="og:title" content="João Araujo | Sobre" />
                <meta
                    property="og:description"
                    content="Pagina de descrição pessoal"
                />
                <meta
                    property="og:image"
                    content="https://www.jvaraujo.com.br/pagina_sobre.png"
                />
            </Head>
            <TransitionEffect />

            <main className="flex w-full flex-col items-center justify-center dark:text-colors-light">
                <Layout className="pt-16 sm:p-8">
                

                    <AnimatedText text="Um Pouco Sobre Mim." className="mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl !text-6xl" />
                    <div className='flex justify-center items-center'>
                        <Image 
                            src={picture} 
                            alt="Wolf picture" 
                            className='w-48 h-48 md:w-48 md:h-48 rounded-full object-cover md:mb-6' 
                            priority 
                            sizes='(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw' 
                        />
                        </div>
                    <div className="grid w-full gap-16">
                        <div className=" flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-colors-dark/75 dark:text-colors-light/75">Biografia</h2>
                            <p className="font-bold">Olá, sou João, apaixonado por transformar dados em soluções que fazem a diferença.</p>
                            <p className="font-medium my-4">Atualmente, estou focado em desenvolver minhas habilidades em engenharia de dados, com especial interesse na construção de pipelines eficientes e no processamento de grandes volumes de dados. Acredito no poder dos dados para impulsionar decisões estratégicas e busco sempre explorar novas tecnologias e metodologias para melhorar esse processo.</p>

                            <p className="font-medium my-4">Com uma combinação de curiosidade e dedicação, procuro aprender constantemente e aplicar as melhores práticas na organização e análise de dados. O objetivo é sempre garantir que as informações certas estejam disponíveis no momento certo, para apoiar o sucesso de qualquer projeto.</p>
                            <p className="font-medium ">Se você procura alguém comprometido, com uma visão focada em soluções e que está sempre buscando crescer, vamos conversar! </p>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Certifications />
                    <Education />

                </Layout>
            </main>
        </>
    )
}