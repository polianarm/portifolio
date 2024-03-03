import styles from './Introduction.module.css';
import { SiGmail } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";

export default function Introduction() {
    return (
      <section className={styles.sectionIntroduction}>
        <div className={styles.perfil}>
          <img className={styles.perfilImg} src="https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Poliana Ribeiro - perfil" />
        </div>
  
        <div className={styles.hello}>
          <h2>Olá, mundo! Meu nome é Poliana!</h2>
          <h3>Me interesso por muitas coisas</h3>
  
          <div className={styles.links}>
            <a href="https://github.com/polianarm" target="_blank" rel="noopener noreferrer"> <VscGithub size={28} className={styles.links}/> </a>
            <a href="https://www.linkedin.com/in/polianar/" target="_blank" rel="noopener noreferrer"> <ImLinkedin2 size={28} className={styles.links}/> </a>
            <a href="mailto:polianaaa.ribeiro@gmail.com" target="_blank" rel="noopener noreferrer"> <SiGmail size={28} className={styles.links}/> </a>
          </div>
        </div>
      </section>
    );
  }