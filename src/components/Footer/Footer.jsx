import IconK from "../../assets/icons/IconK-footer.svg";
import IconHouse from "../../assets/icons/IconHouse-footer.svg";
import IconS from "../../assets/icons/IconS-footer.svg";
import IconA from "../../assets/icons/IconA-footer.svg";
import "./Footer.scss"

function Footer () {
    return (
    <footer className="footer"> 
        <div className="footer-logo">
            <img src={IconK} alt="Logo Kasa" />
            <img src={IconHouse} alt="Logo Kasa" />
            <img src={IconS} alt="Logo Kasa" />
            <img src={IconA} alt="Logo Kasa" />
        </div>
        <p>© 2020 Kasa. All rights reserved </p>
    </footer>    
    )
}
export default Footer