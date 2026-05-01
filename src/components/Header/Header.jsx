import IconK from "../../assets/icons/iconK-header.svg";
import IconHouse from "../../assets/icons/iconHouse-header.svg";
import IconDoor from "../../assets/icons/iconDoor-header.svg";
import IconS from "../../assets/icons/iconS-header.svg";
import IconA from "../../assets/icons/iconA-header.svg";
import { NavLink } from "react-router-dom";
import "./Header.scss"


function Header () {
    return (
    <header className="header"> 
        <div className="header-logo">
            <h1 hidden>Kasa</h1>
            <img src={IconK} alt="Logo Kasa" />
            <img src={IconHouse} alt="Logo Kasa" />
            <img src={IconDoor} className="logo-door" alt="Logo Kasa" />
            <img src={IconS} alt="Logo Kasa" />
            <img src={IconA} alt="Logo Kasa" />
        </div>
        <nav className="header-nav">
            <NavLink
                to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Accueil
            </NavLink>
            <NavLink 
                to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                A propos
            </NavLink>
        </nav>
    </header>
    );
}

export default Header