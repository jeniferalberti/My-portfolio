import styles from "./styles.module.scss";

export default function Footer(){
    return(
        <footer className={styles.container}>
            <a href="pages/copyright.html" target="blank">©2024 | Pedro Magno | Todos os direitos reservados</a>
        </footer>
    )
}