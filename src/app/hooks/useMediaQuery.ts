import { useEffect, useState } from "react";

export const useIsSmall = () => useMediaQuery("(min-width: 480px)");
export const useIsMedium = () => useMediaQuery("(min-width: 768px)");
export const useIsLarge = () => useMediaQuery("(min-width: 1024px)");
export const useIsXLarge = () => useMediaQuery("(min-width: 1280px)");
export const useIsXXLarge = () => useMediaQuery("(min-width: 1536px)");

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
}
