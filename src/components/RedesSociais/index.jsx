import LinkedinIcon from "../icons/LinkedinIcon";
import InstaIcon from "../icons/InstaIcon";
import GitHubIcon from "../icons/GitHubIcon";
import SectionTitle from "../SectionTitle";
import EmailIcon from "./../icons/EmailIcon";
import styles from "./styles.module.scss";
import YoutubeIcon from "./../icons/YoutubeIcon";
import Button from "../Button";

export default function RedesSociais() {
  return (
    <div className={styles.container}>
      <SectionTitle text="Redes Sociais" />
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/jenifer-alberti/" target="blank">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/jeniferalberti" target="blank">
          <GitHubIcon />
        </a>
        <a href="https://www.youtube.com/@In-Orbit" target="blank">
          <YoutubeIcon />
        </a>
      </div>
      <Button href="mailto:jenialberti@gmail.com">
        Fale comigo <EmailIcon />
      </Button>
    </div>
  );
}
