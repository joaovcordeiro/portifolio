import { CircularText, WhatsappIcon } from "./Icons";
import Link from "next/link";

export default function HireMe({ number }) {
    return (<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-10 
        md:right-8 md:left-auto md:top-[-60px] md:absolute md:bottom-auto sm:right-0
    " >
        <div className="w-48 h-auto flex items-center justify-center md:w-24">
            <CircularText className={"fill-colors-dark animate-spin-slow dark:fill-colors-light"} />

            <Link href={`https://wa.me/+55${number}`} aria-label="Botão de acesso para conversa por whatsapp." target="_blank" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 
            -translate-y-1/2 bg-colors-dark  shadow-md border border-solid border-colors-dark w-20 h-20 rounded-full
            font-semibold hover:bg-colors-light text-sm dark:bg-colors-light dark:border-colors-light dark:hover:bg-colors-dark
            md:w-12 md:h-12 md:text-[10px]
            "> <WhatsappIcon className="fill-colors-light hover:fill-colors-dark dark:fill-colors-dark hover:dark:fill-colors-light " /></Link>
        </div>
    </div>)
}