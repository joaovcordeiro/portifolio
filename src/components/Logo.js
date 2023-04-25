import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Logo() {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink
                href="/"
                className="w-16 h-16 bg-colors-dark text-colors-light flex items-center justify-center border border-solid  border-transparent rounded-full text-xl font-bold dark:border-colors-light"
                whileHover={{
                    backgroundColor: ["#121212", "#003785", "#1465bb", "#2196f3", "#81c9fa", "#b9ffff", "#121212"],
                    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                JA
            </MotionLink>
        </div>
    );
}
