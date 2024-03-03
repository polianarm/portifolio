import CardProjects from '../CardProjects'
import styles from './SectionProjects.module.css'


export default function SectionProjects() {


    return (
        <section id="projects" className={styles.SectionProjects}>
         
    
          <div >
            <h2 className={styles.titleSection}>Meus projetos</h2>
            
           <CardProjects />
           
          </div>
        </section>

    )

}


