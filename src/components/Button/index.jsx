import styles from "./styles.module.scss";

export default function Button(props){
    return(
        <a className={styles.btn} href={props.href} target="blank">{props.children}</a>
    )
}