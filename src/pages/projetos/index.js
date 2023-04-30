import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"
import { request } from '@/lib/datocms'
import { useRouter } from "next/router"
import formatDate from "@/utils/formatDate"


const Project = (projeto) => {
    const router = useRouter()

    function handleProjectClick(slug) {
        router.push(`/projetos/${slug}`)
    }
    return (
        <article className="m-4 p-0 col-span-6 md:col-span-12 cursor-pointer" onClick={() => handleProjectClick(projeto.slug)}>
            <div className="h-full border-none rounded-sm overflow-hidden bg-white hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
                <Image src={projeto.imagem.url} width={projeto.imagem.width} height={projeto.imagem.height} className="lg:h-72 md:h-48 w-full object-cover object-center" />
                <div className="p-6 ">
                    <h2 className="text-xs font-normal text-colors-primary/60 mb-1 hover:text-gray-700">{formatDate(projeto.data)}</h2>
                    <h1 className="text-xl dark:text-colors-dark/80 mb-3 sm:text-sm">{projeto.nome}</h1>
                </div>
            </div>
        </article>
    )
}

export default function Projetos({ data }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>João Araujo | Projetos</title>
                <meta name="descrição" content="Projetos Pessoais" />
            </Head>
            <TransitionEffect />

            <Layout className="pt-16 sm:p-6">
                <main className="w-full mb-16 flex flex-col items-center justify-center dark:bg-colors-dark dark:text-colors-light" >
                    <AnimatedText text="Criatividade e Ciencia Aplicados ao Desenvolvimento de Software!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-4xl !text-6xl" />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
                        {data.allProjetos.map((projeto, index) => {
                            return (
                                <Project key={index}  {...projeto} />
                            )
                        })}
                    </div>

                </main>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const contentQuery = `query {
        allProjetos {
            nome
        data
    
        imagem {
                url
                width
                height
        }
        slug
      }
    }`

    const data = await request({
        query: contentQuery,
        variables: { limit: 10 }
    })

    return {
        props: { data },
        revalidate: 60
    }
}

