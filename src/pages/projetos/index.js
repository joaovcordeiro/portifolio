import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import TransitionEffect from "@/components/TransitionEffect"
import { request } from '@/lib/datocms'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import CategoryFilter from "@/components/CategoryFilter"
import Pagination from "@/components/Pagination"
import { Pinwheel } from '@uiball/loaders'
import { projectsQuery, categoryQuery, countQuery, limit } from "@/querys/projectsQuerys"
import Project from "@/components/Project"
import { AnimatePresence } from "framer-motion";



export default function Projetos({ data, categories, count }) {
    const router = useRouter()
    const [filter, setFilter] = useState("All")
    const [projetos, setProjetos] = useState(data.allProjetos.slice(0, limit))
    const [page, setPage] = useState(1)

    useEffect(() => {

        if (filter === "All") {
            setProjetos([])
        }

    }, [page])



    if (router.isFallback) {
        return <div><Pinwheel size={100} /></div>
    }


    return (
        <>
            <Head>
                <title>João Araujo | Projetos</title>
                <meta name="descrição" content="Projetos Pessoais" />
            </Head>
            <TransitionEffect />

            <Layout className="pt-16 sm:p-6 flex flex-col items-center">
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:bg-colors-dark dark:text-colors-light">
                <AnimatedText 
                    text="Desenvolvendo Sistemas que Transformam Dados em Decisões" 
                    className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-5xl xs:!text-4xl !text-6xl" 
                />
                {/* Grid de Projetos com 3 Colunas Responsivas */}
                <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full justify-items-center">
                    <AnimatePresence onExitComplete={() => setProjetos(data.allProjetos.slice((page - 1) * limit, page * limit))}>
                        {projetos.map((projeto, index) => (
                            <Project key={index} projeto={projeto} />
                        ))}
                    </AnimatePresence>
                </div>
            </main>
            <Pagination count={count._allProjetosMeta.count} setPage={setPage} page={page} />
        </Layout>
        </>
    )
}

export async function getStaticProps() {

    const data = await request({
        query: projectsQuery,
        variables: { limit: 100, skip: 0 }
    })

    const categories = await request({
        query: categoryQuery,
    })

    const count = await request({
        query: countQuery,
    })

    return {
        props: { data, categories, count },
        revalidate: 60
    }
}

