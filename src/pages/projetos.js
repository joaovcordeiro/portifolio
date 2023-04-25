import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border-solid
         border-colors-dark bg-colors-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-colors-dark dark:border-colors-light 
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
         ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
             bg-colors-dark rounded-br-3xl dark:bg-colors-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes='(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw' />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-colors-primary font-medium text-xl dark:text-colors-primaryDark xs:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-colors-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-colors-dark dark:text-colors-light">{summary}</p>
                <div className="mt-2 flex items-center ">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-colors-dark text-colors-light p-2 px-6 text-lg font-semibold dark:bg-colors-light dark:text-colors-dark
                        sm:px-4 sm:text-base
                    ">Visitar Projeto</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-colors-dark dark:bg-colors-dark
         bg-colors-light p-6 relative dark:border-colors-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-colors-dark rounded-br-3xl dark:bg-colors-light" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg ">
                <Image src={img} alt={title} className="w-full h-auto " sizes='(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw' />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-colors-primary font-medium text-xl dark:text-colors-primaryDark">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline">Visitar</Link>
                    <Link href={github} target="_blank" className="w-8"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

export default function Projetos() {
    return (
        <>
            <Head>
                <title>João Araujo | Projetos</title>
                <meta name="descrição" content="Projetos Pessoais" />
            </Head>
            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:bg-colors-dark dark:text-colors-light" >
                <Layout className="pt-16">
                    <AnimatedText text="Desenvolvendo soluções inovadoras com ciência e criatividade!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

                    <div className="grid grid-colls-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                                local currency."
                                link="/"
                                github="/"
                                type="Projeto em Destaque"


                            />
                        </div>
                        {/* 
                        <div className="col-span-6">
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Projeto "


                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Projeto "


                            />
                        </div> */}
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                                local currency."
                                link="/"
                                github="/"
                                type="Projeto em Destaque"


                            />
                        </div>
                        {/* <div className="col-span-6">
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Projeto "


                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Projeto "


                            />
                        </div> */}

                    </div>
                </Layout>
            </main>
        </>
    )
}