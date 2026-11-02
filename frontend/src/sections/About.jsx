import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { about, images, site } from "../content";
import "../styles/sections/about.css";

const About = () => (
  <>
    <section className="section" id="about">
      <div className="container split">
        <Reveal>
          <Photo src={images.about} alt={`${site.name} at work`} label="Portrait" shape="arch" ratio="4 / 5" />
        </Reveal>
        <Reveal className="prose" delay={120}>
          <p className="eyebrow">About</p>
          <h2 className="h2">{about.title}</h2>
          {about.bio.map((paragraph, index) => (
            <p key={paragraph.slice(0, 24)} className={index === 0 ? "prose__lead" : ""}>{paragraph}</p>
          ))}
          <ul className="tags">
            {about.expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    <section className="section section--paper">
      <div className="container container--narrow">
        <div className="section-head">
          <p className="eyebrow">Background</p>
          <h2>Education <em>&amp; experience</em></h2>
        </div>
        <ol className="timeline">
          {about.background.map((entry, index) => (
            <Reveal as="li" className="timeline__item" key={`${entry.title}-${index}`} delay={index * 80}>
              <span className="timeline__period">{entry.period}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.place}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default About;
