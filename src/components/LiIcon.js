import { motion, useScroll } from "framer-motion";

export default function LiIcon({ reference }) {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className="absolute left-0 stroke-colors-dark dark:stroke-colors-light ">
            <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] " width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-colors-primary dark:stroke-colors-primaryDark stroke-1 fill-none"></circle>
                <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-colors-light dark:fill-colors-dark" style={{
                    pathLength: scrollYProgress,
                }}></motion.circle>
                <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-colors-primary dark:fill-colors-primaryDark"></circle>


            </svg>
        </figure>
    )
}