import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { hero, images, site } from "../content";
import "../styles/sections/hero.css";

const Hero = () => (
  <section className="hero" id="home">
    <div className="container hero__grid">
      <div className="hero__text">
        <Reveal as="p" className="eyebrow">{site.roles}</Reveal>
        <Reveal as="h1" className="hero__title" delay={100}>
          {hero.title[0]}
          <br />
          <em>{hero.title[1]}</em>
        </Reveal>
        <Reveal as="p" className="lead" delay={200}>{hero.lead}</Reveal>
        <Reveal className="hero__actions" delay={300}>
          <a className="btn" href="#services">Explore services</a>
          <a className="link-arrow" href="#contact">Get in touch</a>
        </Reveal>
      </div>

      <Reveal className="hero__media" delay={150}>
        <Photo
          src={images.portrait}
          alt={`Portrait of ${site.name}`}
          label="Portrait"
          shape="arch"
          ratio="3 / 4"
          eager
          className="hero__portrait"
        />
        <Photo src={images.heroDetail} alt="Sun breaking through clouds" label="Water" ratio="1 / 1" eager className="hero__detail" />
        <p className="hero__caption">
          {site.name}
          <span>PhD researcher · Vrije Universiteit Amsterdam</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default Hero;
