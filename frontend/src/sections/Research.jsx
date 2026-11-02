import Reveal from "../components/Reveal";
import { research } from "../content";
import "../styles/sections/research.css";

const Research = () => (
  <section className="section" id="research">
    <div className="container">
      <div className="research__intro">
        <Reveal>
          <p className="eyebrow">Research · Vrije Universiteit Amsterdam</p>
          <h2 className="h2">{research.title}</h2>
        </Reveal>
        <Reveal className="prose" delay={120}>
          <p className="prose__lead">{research.intro}</p>
          {research.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>
      </div>

      <div className="themes">
        {research.themes.map((theme, index) => (
          <Reveal className="themes__item" key={theme.title} delay={index * 100}>
            <h3>{theme.title}</h3>
            <p>{theme.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="container--narrow publications-wrap">
        <p className="eyebrow">Publications</p>
        <ul className="publications">
          {research.publications.map((item) => (
            <Reveal as="li" key={item.title}>
              <span className="publications__year">{item.year}</span>
              <div>
                <h3>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p>{item.venue}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <a className="link-arrow" href={research.portalUrl} target="_blank" rel="noopener noreferrer">
          VU Research Portal
        </a>
      </div>
    </div>
  </section>
);

export default Research;
