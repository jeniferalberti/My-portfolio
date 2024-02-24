import styles from "./styles.module.scss";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";

export default function Informacoes() {
  return (
    <div className={styles.informacoes}>
      <SectionTitle text="Idiomas" />
      <div className={styles.idiomas}>
        <span>🇫🇷 FR - Avançado</span>
        <span>🇪🇸 ES - Avançado</span>
        <span>🇮🇹 IT - Intermediário</span>
        <span>🇺🇸 EN - Avançado</span>
        <span>🇧🇷 PT-BR - Nativo</span>
      </div>
      <SectionTitle text="Educação" />
      <div className={styles.educacao}>
        <span>🎓</span>
        <span>
          Análise e Desenvolvimento de Sistemas - Universidade Estácio de Sá
        </span>
      </div>
      <SectionTitle text="Principais Competências" />
      <div className={styles.skills}>
        <Skill image="assets/html.png" name="HTML" />
        <Skill image="assets/css.png" name="CSS" />
        <Skill image="assets/js.png" name="JS" />
        <Skill image="assets/py.png" name="PYTHON" />
        <Skill image="assets/sql.png" name="SQL" />
        <Skill image="assets/pbi.png" name="POWER BI" />
        <Skill image="assets/powerapps.png" name="POWER APPS" />
        <Skill image="assets/powerautomate.png" name="POWER AUTOMATE" />
      </div>
    </div>
  );
}
