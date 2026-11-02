import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks";

const NotFound = () => {
  usePageTitle("Page not found");

  return (
    <>
      <PageHero eyebrow="404" title={<>This page has <em>drifted away</em></>} lead="The page you are looking for doesn't exist or has moved." />
      <div className="container" style={{ paddingBottom: "var(--section)" }}>
        <Link className="btn" to="/">Back to home</Link>
      </div>
    </>
  );
};

export default NotFound;
