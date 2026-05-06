import { NavLink } from "react-router-dom"
import "./Error.scss"

function Error () {
    return (

        <section className="error-content">
            <h2 className="error-title">404</h2>
            <p className="error-quote">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error-link">Retourner sur la page d'acceuil</NavLink>
        </section>

)}
export default Error