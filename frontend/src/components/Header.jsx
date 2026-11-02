import { useEffect, useState } from "react";
import { site, navigation } from "../content";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item of the section currently in view
  useEffect(() => {
    const sections = navigation.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Smooth-scroll within the page; off the home page the link navigates to /#id
  const goTo = (event, id) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    document.body.style.overflow = "";
    target.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}>
      <div className="container site-header__inner">
        <a href="/#home" className="wordmark" onClick={(event) => goTo(event, "home")}>
          <span className="wordmark__name">{site.name}</span>
          <span className="wordmark__tagline">{site.tagline}</span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  className={active === item.id ? "active" : ""}
                  onClick={(event) => goTo(event, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
