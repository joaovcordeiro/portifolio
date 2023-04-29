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

const FramerImage = motion(Image)

const Project = (projeto) => {
    const router = useRouter()

    function handleProjectClick(slug) {
        router.push(`/projetos/${slug}`)
    }
    return (
        <article className="p-4 !col-span-6">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image src={projeto.imagem.url} width={500} height={500} className="w-full" />
                <p>{projeto.nome}</p>
                <p>{formatDate(projeto.data)}</p>
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

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:bg-colors-dark dark:text-colors-light" >
                <Layout className="pt-16">
                    <AnimatedText text="Criatividade e Ciencia Aplicados ao Desenvolvimento de Software!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl !text-6xl" />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
                        {data.allProjetos.map((projeto, index) => {
                            return (
                                <Project key={index}  {...projeto} />
                            )
                        })}
                    </div>

                </Layout>
            </main>
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
        }
        slug
      }
    }`

    const data = await request({
        query: contentQuery,
        variables: { limit: 10 }
    })

    return {
        props: { data }
    }
}

