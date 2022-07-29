import ioniq5 from "../../assets/ioniq5-front.jpg"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div className="hero">
            <img src={ioniq5} className="hero-img" alt="ioniq5 car"/>
            <h1 className="hero-title">IONIQ 5 Lookup</h1>
        </div>
    )
}

export default Hero 