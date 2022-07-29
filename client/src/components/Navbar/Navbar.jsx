import { Link } from "react-router-dom"; 
import "./Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navbar-left">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/" className="logo">IONIQ 5</Link>
            </div>
        </div>
    )
}

export default Navbar