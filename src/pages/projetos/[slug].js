import { request } from '@/lib/datocms'
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';


export default function Projeto({ projeto }) {
    return (
        <>
            <Head>
                <title>{`João Araujo | ${projeto.nome}`}</title>
                <meta name="descrição" content="Projetos Pessoais" />
            </Head>
            <TransitionEffect />

            <Layout>
                <div>
                    <Image src={projeto.imagem.url} className='w-full h-full object-cover' alt={projeto.nome} width={projeto.imagem.width} height={projeto.imagem.height} />
                    <h1>{projeto.nome}</h1>
                    <p>{formatDate(projeto.data)}</p>
                    <Link href={projeto.link} target='_blank'>Ver Projeto</Link>
                    <Link href={projeto.github} target='_blank'>Github</Link>

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
        props: { projeto: data.projeto }
    }
}