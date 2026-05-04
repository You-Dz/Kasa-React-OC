import Collapse from "./Collapse"
import BannerAbout from "../../assets/images/img-about-source.webp"
import "./About.scss"

function About () {
    return ( 
        <section className="about-content">
            <div className="about-banner">
                <img src={BannerAbout} alt="Paysage de montagne enneigée et de forêt" className="about-banner-img"/>
            </div>

            <div className="about-collapse">
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux
                        logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire
                        ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque
                        intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."/>
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logements
                        correspnd aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                        également des ateliers sur la sécurité domestiques pour nos hôtes."/>   
            </div>
        </section>
    )
}
export default About 
                    