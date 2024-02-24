import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.textContent}>
        <h1>Oi, eu sou a Jenifer! 👋</h1>
        <h2>Estudante de Análise e Desenvolvimento de Sistemas.</h2>
      </div>
      <img src="assets/me.jpg" alt="Jenifer Alberti" />
    </header>
  );
}
