import { limit } from "@/querys/projectsQuerys"
import { motion } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { useState } from "react"

export default function Pagination({ count, setPage, page }) {
    const pageCount = Math.ceil(count / limit)
    const [index, setIndex] = useState(1)
    const buttons = Array.from({ length: pageCount }, (_, i) => i + 1)

    const buttonVariants = {
        // Variante para os botões não selecionados
        unselected: {
            scale: 1,
            backgroundColor: "#ffffff",
            color: "#000000",
        },
        // Variante para os botões selecionados
        selected: {
            scale: 1.2,
            backgroundColor: "#0000ff",
            color: "#ffffff",
        },
    };

    return (<>{(pageCount > 1) && (<div className="flex items-center gap-2 pt-8">
        <motion.button
            onClick={() => { setPage(index - 1); setIndex(index - 1) }}
            disabled={page === buttons[0]}
            whileHover={{ scale: 1.2 }}
            variants={buttonVariants}

        >
            <FaChevronLeft size={30} color={page === buttons[0] ? "#f5f5f5" : "#000"} />

        </motion.button>
        {
            buttons.map((item) => {
                return (
                    <motion.button
                        key={item}
                        className={`w-8 h-8 rounded-full border  dark:border-gray-300 mx-1 hover:bg-colors-dark hover:text-colors-light dark:hover:bg-colors-light dark:hover:text-colors-dark dark:text-colors-light  ${page === index + 1 ? 'bg-colors-primary text-white' : ''}`}
                        onClick={() => { setPage(item); setIndex(item) }}
                        animate={page === item ? "selected" : "unselected"}
                        whileHover={{ scale: 1.2 }}
                        variants={buttonVariants}
                    >{item}</motion.button>

                )
            })
        }
        <motion.button
            onClick={() => { setPage(index + 1); setIndex(index + 1) }}
            disabled={page === buttons[buttons.length - 1]}
            whileHover={{ scale: 1.2 }}
            variants={buttonVariants}>
            <FaChevronRight size={30} color={page === buttons[buttons.length - 1] ? "#f5f5f5" : "#000"} />
        </motion.button>
    </div>)}</>)
}