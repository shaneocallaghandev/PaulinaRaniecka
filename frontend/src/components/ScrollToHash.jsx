import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the #section in the URL on load (e.g. /#contact), otherwise to the top
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
