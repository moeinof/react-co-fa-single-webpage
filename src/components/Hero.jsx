import { hero } from "../data";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-banner">
        <h1>{hero.heading}</h1>
        <p>{hero.body}</p>
        <a href={hero.link.href} className="btn scroll-link">
          {hero.link.label}
        </a>
      </div>
    </div>
  );
};

export default Hero;
