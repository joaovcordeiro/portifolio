
import {SiPowerbi ,  SiPython, SiJavascript, SiDocker, SiDbt, SiGooglecloud, SiPostgresql, SiApachespark, SiAirbyte, SiTerraform, SiDatabricks} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

import SkillItem from './SkillsItem';


const skills = [
{ icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiPython />, name: "Python" }, {icon: <TbSql />, name: "SQL"}, {icon: <SiDbt />, name: "DBT"},
{ icon: <SiDocker />, name: "Docker" }, { icon: <SiApachespark />, name: "Spark" }, { icon: <SiAirbyte />, name: "Airbyte" }, { icon: <SiTerraform />, name: "Terraform" }, { icon: <SiDatabricks />, name: "DataBricks" },
 { icon: <SiPowerbi />, name: "PowerBI" }, { icon: <FaAws />, name: "AWS" }, { icon: <SiGooglecloud />, name: "GCP" }, { icon: <SiPostgresql />, name: "Postgres" }];

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