import styles from "./Header.module.css";

export default function Header() {



  return (
    <header className={styles.Header}>
      <h2>Poliana Ribeiro</h2>
      <nav className={styles.nav}>
        <a href="#">HOME</a>
        <a href="#aboutMe">Sobre mim</a>
        <a href="#skills">Skils</a>
        <a href="#projects">Projetos</a>
      </nav>
    </header>
  );
}
