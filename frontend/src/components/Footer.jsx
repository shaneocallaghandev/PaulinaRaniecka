import { site, navigation } from "../content";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__roles">{site.roles}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>{site.location}</span>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
};

export default Footer;
