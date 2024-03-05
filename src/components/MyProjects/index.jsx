import styles from './MyProjects.module.css';
import projects from '../../data/projects.json'

export default function MyProjects() {


return (
<section id="projects" className={styles.sectionMyProjects}>  
    
    <h2 className={styles.titleSection}>Meus projetos</h2>
  
  <div className={styles.cardContainer}>
      
      <div className={styles.card}>
        <h2>Nome do Projeto</h2>
      <div className={styles.cardElements}>
           {/* {projects.map(item => (

            


           ))}  */}

            <img className={styles.imagem} src="https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
          <div className={styles.cardInfo}>
            <p>
              Projeto: <span>link</span>
            </p>
            <p>
              Repositório: <span>link</span>
            </p>
            <p>
              Descrição: <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, a?</span>
            </p>
          </div> 
        </div>
      </div>
    </div>
  );

</section>



)

    
}


