import styles from "./Skills.module.css";
import { GrReactjs } from "react-icons/gr";

export default function Skills() {


  return (
    <section id="skills" className={styles.sectionSkillss}>
      <h2>Skillss</h2>

      <p>Algumas coisas que sei fazer</p>

      <GrReactjs size={28} className={styles.links}/> 
    </section>
  );
}
