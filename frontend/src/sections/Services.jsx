import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { services } from "../content";
import "../styles/sections/services.css";

const Services = ({ onInquire }) => (
  <section className="section" id="services">
    <div className="container">
      <div className="section-head">
        <p className="eyebrow">Services</p>
        <h2>How she <em>can help</em></h2>
      </div>

      <div className="services">
        {services.map((service, index) => (
          <Reveal as="article" className="service-card" key={service.title} delay={index * 120}>
            <Photo src={service.image} alt={service.title} label={service.title} ratio="4 / 3" />
            <div className="service-card__body">
              <span className="service-card__number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a className="link-arrow" href="#contact" onClick={() => onInquire(service.title)}>
                Inquire about this service
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
