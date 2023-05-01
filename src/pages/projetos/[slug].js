import { request } from '@/lib/datocms'
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';


export default function Projeto({ projeto }) {
    console.log();
    return (
        <>
            <Head>
                <title>{`João Araujo | ${projeto.nome}`}</title>
                <meta name="descrição" content="Projetos Pessoais" />
            </Head>
            <TransitionEffect />

            <Layout className='pt-16 sm:p-8'>
                <div className=" mx-auto my-8 ">
                    <Link href={projeto.link} target='_blank' className='w-auto h-auto cursor-pointer'>
                        <Image
                            src={projeto.imagem.url}
                            alt={projeto.nome}
                            width={projeto.imagem.width}
                            height={projeto.imagem.height}
                            className="rounded-lg"
                        />
                    </Link>
                    <div className="w-full mt-4 flex justify-between">
                        <div>
                            <p className="mt-2 text-colors-primary/75">{formatDate(projeto.data)}</p>
                            <h1 className="text-2xl font-bold dark:text-colors-light">{projeto.nome}</h1>
                        </div>
                        <div className="flex space-x-4 mt-2 align-middle md:flex-col md:gap-2 ">
                            <Link href={projeto.link} target="_blank" className="sm:text-sm sm:px-2 sm:h-1/3 sm:py-0 py-2 px-4 h-2/3 bg-colors-primary text-white rounded hover:bg-blue-600 transition duration-200">
                                Ver Projeto
                            </Link>
                            <motion.div whileHover={{ scale: 1.1, y: -2 }} className='md:w-[2rem] w-[3rem]'>
                                <Link href={projeto.github} target="_blank"  >
                                    <GithubIcon className=" text-gray-700 w-full dark:text-colors-light  transition duration-200" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        {projeto.texto.value.document.children.map((child, index) => (
                            <p key={index} className="mt-4 text-lg text-colors-dark dark:text-colors-light/80">{child.children[0].value}</p>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const contentQuery = `
      query {
        allProjetos {
          slug
        }
      }
    `;

    const data = await request({ query: contentQuery });

    const paths = data.allProjetos.map(projeto => ({
        params: { slug: projeto.slug }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const contentQuery = `
      query($slug: String!) {
        projeto(filter: {slug: {eq: $slug}}) {
          nome
          data
          imagem {
            url
            width
            height
          }
          slug
          link
          github
          texto {
            value
          }
        }
      }
    `;

    const data = await request({
        query: contentQuery,
        variables: { slug: params.slug }
    });

    return {
        props: { projeto: data.projeto },
        revalidate: 60
    }
}