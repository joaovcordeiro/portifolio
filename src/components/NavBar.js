import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useEffect, useRef, useState } from "react";

const CustomLink = ({
    href, title, className = ""
}) => {
    const router = useRouter();
    return <Link href={href} className={`${className} relative group`}>
        {title}

        <span className={`h-[1px] inline-block  bg-colors-dark 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 dark:bg-colors-light
            ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
    </Link>
}

const CustomMobileLink = ({
    href, title, className = "", toogle
}) => {
    const router = useRouter();

    function handleClick() {
        toogle();
        router.push(href)
    }

    return <button href={href} className={`${className} relative group text-colors-light dark:text-colors-dark my-2`} onClick={handleClick}>
        {title}

        <span className={`h-[1px] inline-block  bg-colors-light 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 dark:bg-colors-dark
            ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
    </button>
}

export default function NavBar() {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.className.includes("menu-button")) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuRef])

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
            dark:text-colors-light relative z-10 lg:px-16 md:px-12 sm:px-8
            "
        >
            <button className="flex-col justify-center items-center hidden lg:flex menu-button sm:" aria-label="Botão de menu flutuante" onClick={handleClick}>
                <span className={`bg-colors-dark dark:bg-colors-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm menu-button  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-colors-dark dark:bg-colors-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 menu-button ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-colors-dark dark:bg-colors-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm menu-button  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/sobre" title="Sobre" className="mx-4" />
                    <CustomLink href="/projetos" title="Projetos" className="mx-4" />
                    <CustomLink href="/contato" title="Contato" className="mx-4" />

                </nav>

                <nav className="flex items-center justify-center ">
                    <motion.a href="https://github.com/joaovcordeiro" aria-label="Link para o Github pessoal." target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><GithubIcon /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/joaoaraujocordeiro/" aria-label="Link para o Linkedin pessoal." target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === "light" ? "bg-colors-dark text-colors-light" : "bg-colors-light text-colors-dark"}

                    `}
                    >
                        {
                            mode === "dark" ? <SunIcon className="fill-colors-dark" /> : <MoonIcon className="fill-colors-light" />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?

                    <motion.div ref={menuRef}
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                bg-colors-dark/90 dark:bg-colors-light/75 rounded-lg backdrop-blur-md py-32
            ">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href="/" title="Home" className="" toogle={handleClick} />
                            <CustomMobileLink href="/sobre" title="Sobre" className="" toogle={handleClick} />
                            <CustomMobileLink href="/projetos" title="Projetos" className="" toogle={handleClick} />
                            <CustomMobileLink href="/contato" title="Contato" className="" toogle={handleClick} />

                        </nav>

                        <nav className="flex items-center justify-center mt-2">
                            <motion.a href="https://github.com/joaovcordeiro" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 bg-colors-light rounded-full dark:bg-colors-dark "><GithubIcon /></motion.a>
                            <motion.a href="https://www.linkedin.com/in/joaoaraujocordeiro/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 "><LinkedInIcon /></motion.a>
                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-colors-dark text-colors-light" : "bg-colors-light text-colors-dark"}
   
                    `}
                            >
                                {
                                    mode === "dark" ? <SunIcon className="fill-colors-dark" /> : <MoonIcon className="fill-colors-light" />
                                }
                            </button>
                        </nav>
                    </motion.div>

                    : null
            }


            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header >
    )

}