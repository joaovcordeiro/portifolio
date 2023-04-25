
import { TbBrandNextjs } from "react-icons/tb";
import { SiJest, SiPostgresql, SiNginx, SiMongodb, SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiDocker, SiTailwindcss } from "react-icons/si";

import SkillItem from './SkillsItem';


const skills = [{ icon: <SiReact />, name: "React" }, { icon: <SiHtml5 />, name: "HTML" }, { icon: <SiCss3 />, name: "CSS" }, { icon: <SiTailwindcss />, name: "Tailwind" },
{ icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiPython />, name: "Python" }, { icon: <TbBrandNextjs />, name: "NextJS" }, { icon: <SiNodedotjs />, name: "NodeJS" },
{ icon: <SiDocker />, name: "Docker" }, { icon: <SiJest />, name: "Jest" }, { icon: <SiPostgresql />, name: "Postgres" }, { icon: <SiMongodb />, name: "MongoDB" },
{ icon: <SiNginx />, name: "Nginx" }];

export default function Skills
    () {
    return <div className='flex-col mt-16 w-full flex items-center'>
        <h2 className="mb-16 text-4xl font-bold uppercase text-colors-dark/75 text-center dark:text-colors-light/75">Habilidades</h2>

        <div className=" w-4/5 flex items-center justify-center flex-wrap gap-8">
            {skills.map((skill, index) => {
                return <SkillItem key={index} title={skill.name} icon={skill.icon} />
            })}

        </div>
    </div>
}