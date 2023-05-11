import Link from "next/link"
import Image from "next/image"
import formatDate from "@/utils/formatDate"
import { motion, AnimatePresence } from "framer-motion"

export default function Project({ projeto }) {

    return (
        <motion.div className="m-4 p-0 col-span-6 md:col-span-12 cursor-pointer " key={projeto.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 }, }}
            whileTap={{ scale: 0.95, transition: { duration: 0.3 }, }}
        >
            <Link href={`/projetos/${projeto.slug}`} >
                <article  >
                    <motion.div className="h-full border-none rounded-sm overflow-hidden bg-white hover:bg-gray-200 ">
                        <Image src={projeto.imagem.url} width={projeto.imagem.width} height={projeto.imagem.height} className="lg:h-72 md:h-48 w-full object-cover object-center" alt={projeto.nome} />
                        <div className="flex flex-wrap gap-4 p-2">
                            {projeto.categoria.map((categoria, index) => {
                                return (
                                    <div key={categoria.nome} className="bg-colors-dark rounded-full md:px-1 md:py-[0.15rem] px-2 py-1 shadow-md text-colors-light hover:text-colors-dark hover:bg-colors-light/80  transition-colors duration-300">
                                        <p className="text-xs md:text-[0.5rem] text-center font-bold  ">#{categoria.nome}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="p-6 ">
                            <h2 className="text-xs font-normal text-colors-primary/60 mb-1 hover:text-gray-700">{formatDate(projeto.data)}</h2>
                            <h1 className="text-xl dark:text-colors-dark/80 mb-3 sm:text-sm">{projeto.nome}</h1>
                        </div>
                        <div>
                            {projeto.descriO.value.document.children.map((child, index) => {
                                return (
                                    <p key={index} className="text-sm text-colors-dark/80 px-6 pb-6 ">{child.children[0].value}</p>
                                )
                            })}
                        </div>
                    </motion.div>
                </article>
            </Link>
        </motion.div >

    )
}