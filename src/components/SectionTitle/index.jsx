import styles from "./styles.module.scss";

export default function SectionTitle(props){
    return(
        <h3 className={styles.title}>{props.text}</h3>
    );
}