import logoSite from './img/logoSite.png';
import "./Logo.css";

export default function Logo() {
    return (
        <div className="LogoSite">
            <img src={logoSite}></img>
        </div>        
    );
};