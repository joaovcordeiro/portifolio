import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

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
                    <AnimatedText text="Um Pouco Sobre Mim." className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl !text-6xl" />
                    <div className="grid w-full gap-16">
                        <div className=" flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-colors-dark/75 dark:text-colors-light/75">Biografia</h2>
                            <p className="font-medium">Olá, Meu nome é João, sou um desenvolvedor full-stack e cientista de dados em busca de uma oportunidade de ingressar no mercado.</p>
                            <p className="font-medium my-4">Atualmente estou cursando engenharia elétrica e estudando desenvolvimento web há mais de um ano. Estou sempre em busca de meios para me aprimorar como profissional para oferecer as melhores soluções para os desafios que enfrento.</p>

                            <p className="font-medium ">Sou um curioso apaixonado por tecnologia e acredito que a inovação é a chave para um futuro melhor. Se você está procurando por um profissional comprometido e que está sempre buscando aprender mais, por favor, entre em contato. Estou animado para explorar novas oportunidades e desafios e contribuir para o sucesso de sua empresa.</p>
                        </div>
                    </div>
                    <Skills />
                    <Education />

                </Layout>
            </main>
        </>
    )
}