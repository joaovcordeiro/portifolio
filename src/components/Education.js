import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]
    ">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}

        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
            <span className="capitalize font-medium text-colors-dark/75 dark:text-colors-light/75 xs:text-sm">
                {time} | {place}
            </span>
            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
}


export default function Education
    () {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return <div className='flex-col my-24 w-full flex items-center '>
        <h2 className="mb-16 text-4xl font-bold uppercase text-colors-dark/75 text-center dark:text-colors-light/75
            md:text-6xl xs:text-4xl md:mb-16
        ">Educação</h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] m:w-full">
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[3px] h-full bg-colors-dark origin-top pt-4 dark:bg-colors-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                " />
            <ul className="w-full flex flex-col items-start justify-between ml-4 ">
                <Details type="Bacharelado Em Engenharia Elétrica" time="2019 - 2024" place="Instituto Federal De São Paulo" info="Desenvolvimento de sistemas elétricos, automação de sistemas industriais, entre outros."
                />

                <Details type="BootCamp De Desenvolvimento Web" time="jan 2022 - out 2022" place="Driven Education" info="Focado em desenvolvimento web com React, Node, Next, Typescript, GraphQL, MongoDB, MySQL, Docker, AWS, entre outros."
                />




            </ul>
        </div>

    </div>
}