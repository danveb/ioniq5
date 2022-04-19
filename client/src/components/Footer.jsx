import { FaGithub } from "react-icons/fa"; 
import "./Footer.scss"; 

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__left">
                <h1>Built and designed by @danveb</h1>
            </div>
            <div className="footer__right">
                <a href="https://www.github.com/danveb" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Footer 