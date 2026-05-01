import IconK from "../../assets/icons/iconK-footer.svg";
import IconHouse from "../../assets/icons/iconHouse-footer.svg";
import IconDoor from "../../assets/icons/iconDoor-footer.svg";
import IconS from "../../assets/icons/iconS-footer.svg";
import IconA from "../../assets/icons/iconA-footer.svg";
import "./Footer.scss"

function Footer () {
    return (
    <footer className="footer"> 
        <div className="footer-logo">
            <img src={IconK} alt="Logo Kasa" />
            <img src={IconHouse} alt="Logo Kasa" />
            <img src={IconDoor} className="logo-door" alt="Logo Kasa" />
            <img src={IconS} alt="Logo Kasa" />
            <img src={IconA} alt="Logo Kasa" />
        </div>
        <p>© 2020 Kasa. All rights reserved </p>
    </footer>    
    )
}
export default Footer