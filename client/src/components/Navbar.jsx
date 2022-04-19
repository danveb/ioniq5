import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { navLinks } from "../constants/data"; 
import "./Navbar.scss"; 

const Navbar = () => {
    return (
        <div className="nav__container">
            <div className="nav__wrapper">
                <div className="nav__left">
                    <Link to="/">
                        IONIQ 5
                    </Link>
                </div>
                <div className="nav__right">
                    <ul>
                    {navLinks.map((item) => (
                        <li key={item.id} className="nav__menuItem">
                            <Link to={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar