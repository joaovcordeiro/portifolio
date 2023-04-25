import React from 'react'
import { motion } from "framer-motion";


export default function SkillItem({ title, icon }) {
    const cloneIcon = React.cloneElement(icon, { className: 'h-20 w-20 md:w-7 md:h-7 cursor-pointer ' })

    return <motion.div
        className="flex flex-col gap-1 justify-center items-center text-colors-dark dark:text-colors-light dark:hover:text-blue-400 hover:text-blue-700
            
        " title={title} whileHover={{ y: -4, scale: 1.1 }} >
        {cloneIcon}
        < p className='mb-4 text-base font-bold uppercase md:text-sm ' > {title}</p >
    </motion.div >
}