import styles from "./styles.module.scss";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";

export default function Informacoes(){
    return(
        <div className={styles.informacoes}>
            <SectionTitle text="Idiomas"/>
            <div className={styles.idiomas}>
                <span>🇺🇸 EN - Intermediário</span>
                <span>🇧🇷 PT-BR - Nativo</span>
            </div>
            <SectionTitle text="Educação"/>
            <div className={styles.educacao}>
                <span>🎓</span>
                <span>Bacharelado em Ciência da Computação - Universidade Estácio de Sá</span>
            </div>
            <SectionTitle text="Principais Competências"/>
            <div className={styles.skills}>
                <Skill image="/aws.png" name="AWS"/>
                <Skill image="/terraform.png" name="Terraform"/>
                <Skill image="ansible.png" name="Ansible"/>
                <Skill image="/kubernetes.png" name="Kubernetes"/>
                <Skill image="/docker.png" name="Docker"/>
                <Skill image="/csharp.png" name="CSharp"/>
                <Skill image="/golang.png" name="Go Lang"/>
                <Skill image="/php.png" name="PHP"/>
            </div>
        </div>
    )
}