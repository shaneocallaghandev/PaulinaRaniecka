import Reveal from "./Reveal";

const PageHero = ({ eyebrow, title, lead }) => (
  <section className="page-hero">
    <div className="container">
      <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h1" delay={100}>{title}</Reveal>
      {lead && <Reveal as="p" className="lead" delay={200}>{lead}</Reveal>}
    </div>
  </section>
);

export default PageHero;
