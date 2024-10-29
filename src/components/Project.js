import Link from "next/link";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import { motion } from "framer-motion";

export default function Project({ projeto }) {
    return (
        <motion.div
            className="m-4 p-0  cursor-pointer w-full max-w-md"
            key={projeto.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.3 } }}
        >
            <Link href={`/projetos/${projeto.slug}`}>
                <article className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                        <Image
                            src={projeto.imagem.url}
                            layout="fill"
                            objectFit="cover"
                            alt={projeto.nome}
                            quality={85}
                            placeholder="blur"
                            blurDataURL="/path-to-low-resolution-image.jpg"
                        />
                    </div>
                    <div className="p-4">
                        <h1 className="text-md font-semibold text-gray-800 mb-1">{projeto.nome}</h1>
                        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                            {projeto.descriO.value.document.children[0].children.map((child, index) => (
                                <span key={index}>{child.value}</span>
                            ))}
                        </p>
                        
                        {/* Tags de Categorias */}
                        <div className="flex flex-wrap gap-1 mt-3 mb-4">
                            {projeto.categoria.map((categoria, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                                >
                                    #{categoria.nome}
                                </span>
                            ))}
                        </div>

                        {/* Autor e Data */}
                        <div className="flex items-center mt-2 text-gray-500 text-xs">
                            {/* <Image
                                src={projeto.autor.foto} // Imagem do autor
                                width={24}
                                height={24}
                                className="rounded-full mr-2"
                                alt={projeto.autor.nome}
                            />
                            <span>{projeto.autor.nome}</span>
                            <span className="mx-1">•</span> */}
                            <span>{formatDate(projeto.data)}</span>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
