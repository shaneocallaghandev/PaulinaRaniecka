import { useEffect } from "react";
import { site } from "./content";

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — Facilitator & Moderator`;
  }, [title]);
};
