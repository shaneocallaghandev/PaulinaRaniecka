import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { images, practice } from "../content";
import "../styles/sections/practice.css";

const Practice = () => (
  <section className="section section--mist">
    <div className="container">
      <div className="practice__intro">
        <div className="section-head">
          <p className="eyebrow">Approach</p>
          <h2>{practice.title}</h2>
        </div>
        <ol className="questions">
          {practice.questions.map((question, index) => (
            <Reveal as="li" key={question} delay={index * 100}>{question}</Reveal>
          ))}
        </ol>
      </div>

      <ol className="steps">
        {practice.steps.map((step, index) => (
          <Reveal as="li" className="steps__item" key={step.title} delay={index * 120}>
            <span className="steps__index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </ol>

      <div className="gallery">
        {images.gallery.map((image, index) => (
          <Reveal key={image.src} delay={index * 100}>
            <Photo src={image.src} alt={image.alt} label="In session" ratio="3 / 4" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Practice;
