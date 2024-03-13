import styles from './MyProjects.module.css';
import projects from '../../data/projects.json'

export default function MyProjects() {
  return (
    <section id="projects" className={styles.sectionMyProjects}>  
      
      <div className={styles.cardContainer}>

      <h2 className={styles.titleSection}>Meus projetos</h2>

            <div className={styles.cardProjects}>
            {projects.map(item => ( 
              <div key={item.id} className={styles.infoProjects}> 

                <img className={styles.imagem} src={item.image} alt={item.name} /> 
              
                 <h2> {item.name} </h2>
                 <p> {item.description}</p> 
                
                <div className={styles.buttonsCard}>
                  <a href={item.urlSite} target="_blank" rel="noopener noreferrer"> Ver Projeto</a>
                  <a href={item.urlGitHub} target="_blank" rel="noopener noreferrer"> Repositório </a>
                </div> 
              
              </div>
            ))} 
          </div>

        </div>
    </section>
  );
}

