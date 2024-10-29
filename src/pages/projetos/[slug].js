import { request } from '@/lib/datocms'
import { StructuredText, renderNodeRule } from 'react-datocms'
import { isHeading, isParagraph, isList, isCode, isBlock } from 'datocms-structured-text-utils'
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';

const slugify = (text) => {
    if (typeof text !== 'string') return '';
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

export default function Projeto({ projeto }) {
    const [toc, setToc] = useState([]);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const headings = [];
        projeto.conteudo.value.document.children.forEach(node => {
            if (node.type === 'heading' && node.children[0] && typeof node.children[0].value === 'string') {
                const id = slugify(node.children[0].value);
                headings.push({ id, level: node.level, text: node.children[0].value });
            }
        });
        setToc(headings);
    }, [projeto.conteudo]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        toc.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => {
            toc.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if (element) observer.unobserve(element);
            });
        };
    }, [toc]);

    const renderHeading = (node, children) => {
        const id = slugify(children[0].props.children[0]);
        return React.createElement(`h${node.level}`, { id, className: `text-${node.level === 1 ? '3xl' : '2xl'} font-semibold my-4` }, children);
    };

    const handleScrollToSection = (id) => (event) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    };

    // Função para definir a indentação com base no nível do cabeçalho
    const getIndentationClass = (level) => {
        switch (level) {
            case 2:
                return 'pl-2'; // h2
            case 3:
                return 'pl-4'; // h3
            case 4:
                return 'pl-6'; // h4
            default:
                return ''; // h1
        }
    };

    return (
        <>
            <Head>
                <title>{`João Araujo | ${projeto.nome}`}</title>
                <meta name="description" content="Projetos Pessoais" />
            </Head>
            <TransitionEffect />

            <Layout className="pt-16 sm:p-0 sm:pt-6 flex justify-center">
                <div className="max-w-5xl w-full mx-auto flex gap-8 ">
                    
                    {/* Conteúdo Principal */}
                    <div className="w-3/4 sm:w-full">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        {projeto.link ? (
                            <Link href={projeto.link} target="_blank" rel="noopener noreferrer" className="block w-full h-auto cursor-pointer">
                                <Image
                                    src={projeto.imagem.url}
                                    alt={projeto.nome}
                                    width={projeto.imagem.width}
                                    height={projeto.imagem.height}
                                    className="rounded-lg object-cover"
                                />
                            </Link>
                        ) : (
                            <Image
                                src={projeto.imagem.url}
                                alt={projeto.nome}
                                width={projeto.imagem.width}
                                height={projeto.imagem.height}
                                className="rounded-lg object-cover"
                            />
                        )}

                            <div className="w-full mt-6 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">{formatDate(projeto.data)}</p>
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">{projeto.nome}</h1>
                                </div>
                            </div>

                            <div className="flex gap-2 py-4 flex-wrap">
                                {projeto.categoria.map((categoria, index) => (
                                    <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                                        #{categoria.nome}
                                    </span>
                                ))}
                            </div>

                            <div className="projeto-content text-gray-700 dark:text-gray-300">
                                <StructuredText
                                    data={projeto.conteudo}
                                    renderBlock={({ record }) => record.__typename === 'MediRecord' && (
                                        <Image
                                            src={record.media.url}
                                            alt={record.media.alt || 'Imagem do Projeto'}
                                            width={600}
                                            height={400}
                                            className="my-4 rounded-lg"
                                        />
                                    )}
                                    customRules={[
                                        renderNodeRule(isHeading, ({ node, children }) => renderHeading(node, children)),
                                        renderNodeRule(isParagraph, ({ children }) => <p className="my-2">{children}</p>),
                                        renderNodeRule(isList, ({ node, children }) => (
                                            node.style === 'bulleted'
                                                ? <ul className="list-disc ml-5 my-2">{children}</ul>
                                                : <ol className="list-decimal ml-5 my-2">{children}</ol>
                                        )),
                                        renderNodeRule(isCode, ({ node }) => (
                                            <pre className="bg-gray-800 text-white p-4 rounded-md my-4">
                                                <code>{node.code}</code>
                                            </pre>
                                        )),
                                        renderNodeRule(isBlock, ({ node }) => renderBlock({ record: node }))
                                    ]}
                                    renderInlineRecord={({ record }) => record.__typename === 'ArticleRecord' && (
                                        <strong>{record.title}</strong>
                                    )}
                                    renderLinkToRecord={({ record, children }) => record.__typename === 'ItemRecord' && (
                                        <Link href={`/items/${record.slug}`}>{children}</Link>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tabela de Conteúdos - à direita com hierarquia de indentação */}
                    {toc.length > 0 && (
                        <div className="block lg:hidden w-1/4 sticky top-20 self-start bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-semibold mb-4">Tabela de Conteúdos</h2>
                            <ul className="space-y-2">
                                {toc.map((heading, index) => (
                                    <li 
                                        key={index} 
                                        className={getIndentationClass(heading.level)} // Usa a classe de indentação baseada no nível
                                    >
                                        <a
                                            href={`#${heading.id}`}
                                            onClick={handleScrollToSection(heading.id)}
                                            className={`hover:underline ${
                                                activeId === heading.id 
                                                    ? 'text-sm font-semibold text-blue-600' // Estilo ativo
                                                    : 'text-sm text-gray-600 dark:text-gray-400'
                                            }`}
                                        >
                                            {heading.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </Layout>
        </>
    );
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
        fallback: "blocking"
    };
}

export async function getStaticProps({ params }) {
    const contentQuery = `
      query ProjetoQuery($slug: String!) {
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
            conteudo {
              value
              blocks {
                id
                __typename
                ... on MediRecord {  
                  media {
                    url
                    alt
                  }
                }
              }
            }
            categoria {
              nome
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
    };
}
