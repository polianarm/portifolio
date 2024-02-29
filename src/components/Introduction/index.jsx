import styles from './Introduction.module.css';
import { BiLogoGmail } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";

export default function Introduction() {

return (

<section className={styles.section}>

<img src="https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Poliana Ribeiro - perfil"/>

<h2>Olá, mundo! Meu nome é Poliana!</h2>

<a href="https://github.com/polianarm" target="_blank" rel="noopener noreferrer"> <VscGithub size={28}/> </a>
<a href="https://www.linkedin.com/in/polianar/" target="_blank" rel="noopener noreferrer"> <ImLinkedin2 size={28}/> </a>
<a href="mailto:polianaaa.ribeiro@gmail.com" target="_blank" rel="noopener noreferrer"> <BiLogoGmail size={28}/> </a>
</section>


)


    
}


