import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash like #form, #top, etc.
    if (location.hash) {
      const id = location.hash.replace("#", "");
      
      // small timeout so React has rendered the section
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // fallback: just go to top
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      }, 0);
    } else {
      // no hash → normal behavior: go to top
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  return null;
};
