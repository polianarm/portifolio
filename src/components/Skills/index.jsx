import styles from "./Skills.module.css";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { LiaJava } from "react-icons/lia";
import { FaCss3Alt, FaHtml5} from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

export default function Skills() {


  return (
    <section id="skills" className={styles.sectionSkills}>
      <h2>Skills</h2>
      <div className={styles.skills}>
        <FaHtml5 size={50} className={styles.links}/> 
        <FaCss3Alt size={50} className={styles.links}/>
        <SiJavascript size={50} className={styles.links}/>
        <GrReactjs size={50} className={styles.links}/> 
        <LiaJava size={50} className={styles.links}/> 
        <GrMysql size={50} className={styles.links}/> 
      </div>
    </section>
  );
}
