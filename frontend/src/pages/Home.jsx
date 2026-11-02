import { useState } from "react";
import Hero from "../sections/Hero";
import Statement from "../sections/Statement";
import About from "../sections/About";
import Services from "../sections/Services";
import Practice from "../sections/Practice";
import Research from "../sections/Research";
import Contact from "../sections/Contact";
import { usePageTitle } from "../hooks";

const Home = () => {
  usePageTitle();
  const [topic, setTopic] = useState("");

  return (
    <>
      <Hero />
      <Statement />
      <About />
      <Services onInquire={setTopic} />
      <Practice />
      <Research />
      <Contact topic={topic} />
    </>
  );
};

export default Home;
