import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    // Dividindo o texto da 'info' em tópicos usando o ponto como delimitador
    const infoItems = info.split('.').filter(item => item.trim() !== ""); // Remove strings vazias

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{type}&nbsp;</h3>
                <span className="capitalize font-medium text-colors-dark/75 dark:text-colors-light/75 xs:text-sm">
                    {time} | {place}
                </span>

                {/* Renderizando os itens da lista */}
                <ul className="font-medium w-full md:text-sm list-disc list-inside">
                    {infoItems.map((item, index) => (
                        <li className="mt-4" key={index}>
                            {item.trim()}.
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};


export default function Experience
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
        ">Experiência</h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] m:w-full ">
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-1 w-[3px] h-full bg-colors-dark origin-top pt-4 dark:bg-colors-light
                    md:w-[2px] md:left-[30px] xs:left-[19px] 
                " />
            <ul className="w-full flex flex-col items-start justify-between ml-4 ">
                <Details type="Engenheiro de Dados" time="Mai 2024 - Out 2024" place="Semantix" info="Realização de manutenção e otimização de scripts de automação para extração e processamento de dados a
                    partir de SFTPs de clientes, garantindo a transferência segura e eficiente para o ambiente Hadoop.
                    Design de arquitetura de sistemas ETL para processamento de arquivos em ambientes Hadoop, utilizando
                    Python, clusters Hadoop e Apache Hive, garantindo processamento eficiente e escalável de grandes volumes de
                    dados."
                />

                <Details type="Treinee" time="jul 2023 - abr 2024" place="Semantix" info="Desenvolvimento de data lake para a equipe de vendas, reduzindo em 50% o tempo gasto para a criação de
                    relatorios e atualização de dashboards.
                    Entrega de reviews mensais detalhadas de projeto para os stakeholders e alta gestão garantindo alinhamento
                    estratégico e transparência nas diretrizes.
                    Realização de pesquisas e modelagem de personas com base em entrevistas com clientes, utilizando dados
                    qualitativos para melhorar a personalização de soluções e direcionar iniciativas de análise de dados"
                />




            </ul>
        </div>

    </div>
}
