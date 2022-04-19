import { hero } from "../constants/data"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div id="home" className="hero-container">
            <div className="hero-wrapper">
                {hero.map((item) => (
                <div key={item.id} className="hero-slide">
                    <div className="hero-infoContainer">
                        <h1 className="hero-title">{item.title}</h1>
                    </div>
                    <div className="hero-imgContainer">
                        <img src={item.img} alt="boba-rainbow" />
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Hero 