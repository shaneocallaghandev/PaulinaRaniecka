import Reveal from "../components/Reveal";
import Wave from "../components/Wave";
import { images, statement } from "../content";
import "../styles/sections/statement.css";

const Statement = () => (
  <section className="statement" style={{ backgroundImage: `url(${images.statement})` }}>
    <div className="container container--narrow">
      <Wave />
      <Reveal as="blockquote" className="statement__text">{statement}</Reveal>
    </div>
  </section>
);

export default Statement;
