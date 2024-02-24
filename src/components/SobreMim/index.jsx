import SectionTitle from "../SectionTitle";
import Skill from "../Skill";
import styles from "./styles.module.scss";

export default function SobreMim() {
  return (
    <div className={styles.sobreMim}>
      <SectionTitle text="Sobre mim" />
      <p>
        Iniciei a minha carreira em TI em 2021 como consultora freelancer para
        eventos, passando posteriormente a consultora de TI especializada em
        Microsoft Power Platform. Tenho experiência na construção de dashboards
        usando Power BI, Power Apps e Power Automate. Recentemente, estive
        envolvida em um projeto de marketing de mídia social e controle de
        tráfego, usando DevOps para gerenciamento de fluxo de trabalho e
        rastreamento de problemas. Experiência em analise e desenvolvimento de
        queries usando fontes de dados como SQL Server e BW (SAP) integrando com
        Power BI e usando metodologia ágil para gestão de demandas. Experiência
        em atendimento e suporte ao cliente direto, desenvolvendo a fluência em
        outros idiomas (inglês, espanhol, francês e italiano). Por 4 anos fora
        do Brasil, entre Espanha e França, desenvolvi habilidades importantes
        como comunicação, resiliência, liderança e autogestão.
      </p>
    </div>
  );
}
