import styles from "./styles.module.scss";

export default function Skill(props){
    return(
        <div className={styles.experienceLanguage}>
            <img
                src={props.image}
                alt={props.name}
                width={40}
                height={40}
            />
      </div>
    )
}