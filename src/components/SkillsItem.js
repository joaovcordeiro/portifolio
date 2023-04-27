import React from 'react'
import { motion } from "framer-motion";


export default function SkillItem({ title, icon }) {
    const cloneIcon = React.cloneElement(icon, { className: 'h-20 w-20 sm:w-2/3  cursor-pointer ' })

    return <motion.div
        className="flex sm:w-1/3 flex-col gap-1 sm:gap-0 justify-center items-center text-colors-dark dark:text-colors-light dark:hover:text-blue-400 hover:text-blue-700
            
        " title={title} whileHover={{ y: -4, scale: 1.1 }} >
        {cloneIcon}
        < p className='mb-4 text-base font-bold uppercase md:text-sm ' > {title}</p >
    </motion.div >
}