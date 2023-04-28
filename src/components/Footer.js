import Layout from "./Layout";
import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";


export default function Footer() {
    return (
        <footer className="w-full border-t-[1px] border-solid border-colors-light font-medium text-sm bg-colors-dark text-colors-light md:text-xs sm:text-[10px]">
            <Layout className="py-8 sm:py-4 flex items-center justify-between !bg-colors-dark lg:py-6">
                <div className="flex gap-2 md:flex-col md:flex-col-reverse">
                    <span >{new Date().getFullYear()} &copy; Todos os Direitos Reservados</span>
                    <span className={`h-[20px] w-[1px] inline-block  bg-colors-light/75 md:hidden`} />
                    <span>Desenvolvido por<Link className="underline underline-offset-2" href="https://www.linkedin.com/in/joaoaraujocordeiro/" target={"_blank"}> João Araujo</Link></span>
                </div>
                <div className="flex  ">
                    <motion.a href="https://github.com/joaovcordeiro" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><GithubIcon /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/joaoaraujocordeiro/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>

                </div>

            </Layout>
        </footer>
    )
}