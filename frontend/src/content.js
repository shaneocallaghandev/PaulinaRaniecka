// All site copy lives here so it can be edited without touching the components.
// Facts come from Paulina's public VU profile; items marked TODO still need her input.

export const site = {
  name: "Paulina Raniecka",
  roles: "Facilitator · Moderator · Researcher",
  tagline: "Water governance & climate",
  email: "hello@example.com", // TODO: real email address
  linkedin: "https://www.linkedin.com/in/paulina-raniecka/",
  location: "Amsterdam, the Netherlands",
};

// Single-page navigation: each id matches a section on the home page
export const navigation = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

// Place the files in /public/images — see public/images/README.md
export const images = {
  portrait: "/images/portrait.jpg",
  heroDetail: "/images/sky.jpg",
  statement: "/images/water.jpg",
  about: "/images/portrait-2.jpg",
  gallery: [
    { src: "/images/session-1.jpg", alt: "Participants in a facilitated session" },
    { src: "/images/session-2.jpg", alt: "Group conversation in a circle" },
    { src: "/images/session-3.jpg", alt: "Moderating a panel" },
    { src: "/images/session-4.jpg", alt: "Harvesting ideas on paper" },
  ],
};

export const hero = {
  title: ["Conversations", "that matter"],
  lead:
    "Paulina Raniecka designs and hosts conversations that help people think together — from multi-stakeholder dialogues to conference panels — grounded in research on how we govern water in a changing climate.",
};

export const statement =
  "Good conversations, like rivers, need both structure and freedom. The work is to hold the banks steady, so that ideas can move.";

export const about = {
  title: "Where people, policy and water meet",
  bio: [
    "Paulina Raniecka is a facilitator and moderator working at the meeting point of people, policy and the environment. She designs and guides conversations that help diverse groups listen to one another, navigate complexity and move forward together.",
    "She is a PhD candidate in the Environmental Policy Analysis department of the Institute for Environmental Studies (IVM) at Vrije Universiteit Amsterdam. Her research sits at the intersection of water governance, environmental justice and conflict studies, within the wider field of climate and sustainability.",
    "Her background spans environment and resource management, sustainability and development studies, and international research collaboration — including her role as Affiliated Researcher in NEWAVE: Next Water Governance, a Marie Skłodowska-Curie Innovative Training Network funded under Horizon 2020.",
  ],
  expertise: [
    "Facilitation",
    "Moderation",
    "Water governance",
    "Climate & sustainability",
    "Environmental justice",
    "Water politics & conflict",
  ],
  // TODO: add facilitation / moderation experience and the ASI role if current
  background: [
    {
      period: "Present",
      title: "PhD candidate, Environmental Policy Analysis",
      place: "Institute for Environmental Studies (IVM), Vrije Universiteit Amsterdam",
    },
    {
      period: "Before PhD",
      title: "Affiliated Researcher",
      place: "NEWAVE: Next Water Governance — Horizon 2020 Marie Skłodowska-Curie ITN",
    },
    {
      period: "2021",
      title: "MSc Environment and Resource Management",
      place: "Vrije Universiteit Amsterdam — specialisation Global Water Challenges",
    },
    {
      period: "2020",
      title: "BA Liberal Arts and Sciences",
      place: "University College Maastricht — specialisation Sustainability and Development Studies",
    },
  ],
};

export const services = [
  {
    title: "Facilitation",
    image: "/images/facilitation.jpg",
    summary:
      "Workshops, strategy sessions and stakeholder dialogues designed so that every voice counts and decisions actually land.",
    details: ["Multi-stakeholder dialogues", "Co-creation & strategy workshops", "Online & hybrid formats"],
  },
  {
    title: "Moderation",
    image: "/images/moderation.jpg",
    summary:
      "Panels, conferences and public debates moderated with warmth, precision and a fine sense of timing.",
    details: ["Conferences & symposia", "Panel discussions", "Public debates & interviews on stage"],
  },
  {
    title: "Research & advisory",
    image: "/images/research.jpg",
    summary:
      "A research-informed perspective on participation, collaboration and justice for organisations working on water and climate.",
    details: ["Designing participatory processes", "Stakeholder mapping", "Talks & guest lectures"],
  },
];

export const practice = {
  title: "Questions that guide the practice",
  // TODO: Paulina to refine in her own words
  questions: [
    "Who needs to be in the room — and who is missing?",
    "What is the question that truly matters here?",
    "How can we hold space for disagreement without losing each other?",
    "What do we want to harvest, and who will carry it forward?",
  ],
  steps: [
    { title: "Listen", text: "Every process starts with understanding the people, the stakes and what a good outcome looks like." },
    { title: "Design", text: "A tailored format that balances structure and openness — with room for the unexpected." },
    { title: "Host", text: "On the day, the space is kept safe, focused and alive, so participants can do their best thinking." },
    { title: "Harvest", text: "Outcomes are captured clearly, so the conversation continues after the room empties." },
  ],
};

export const research = {
  title: "Understanding the global water crisis",
  intro:
    "Her doctoral research examines how different people understand the global water crisis — an umbrella term for a wide range of human–water problems.",
  body: [
    "Using a multi-scalar, multi-perspective approach, the research builds a taxonomy of problems, proposed solutions and the experiences of key actors in the field, with the aim of offering a comprehensive way forward for policymakers, civil society and academia.",
  ],
  themes: [
    { title: "Water governance", text: "How decisions about water are made, shared and contested." },
    { title: "Climate & sustainability", text: "Governing water under uncertainty and a changing climate." },
    { title: "Environmental justice", text: "Who benefits, who bears the burden, and who has a voice." },
    { title: "Politics & conflict", text: "The tensions — and cooperation — that water brings about." },
  ],
  publications: [
    {
      year: "2026",
      title: "On the Global Water Crisis: A Taxonomy of Human–Water Challenges",
      venue: "Cambridge University Press — Elements of Sustainability. With N. Galli, C. Govoni, M. C. Rulli, S. Villamayor-Tomas & J. Dell'Angelo",
      url: "", // TODO: link to the open-access book
    },
    {
      year: "2026",
      title: "Currents of Water Commons Research: A Review",
      venue: "Water Alternatives 19(2), 228–252. With S. Villamayor-Tomas & J. Dell'Angelo",
      url: "", // TODO: link to the article
    },
  ],
  portalUrl: "https://research.vu.nl/en/persons/paulina-raniecka/",
};

export const contact = {
  title: "Let's talk",
  text: "Planning a workshop, conference or stakeholder process — or interested in collaborating on water and climate? Share a few words about what you have in mind.",
  topics: [...services.map((service) => service.title), "Something else"],
};
