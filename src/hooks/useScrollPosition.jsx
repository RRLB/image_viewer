import { useEffect, useState } from "react";

export function useScollPosition() {
  const [scrollPositionEnd, setScrollPositionEnd] = useState(false);

  useEffect(() => {
    const listeniner = window.addEventListener("scroll", handleScroll);
    //want to be clean and clean up listener when composant is removed
    return () => {
      window.removeEventListener("scroll", listeniner);
    };
  }, []);

  function handleScroll() {
    // window.innerHeight => height screen
    // document.documentElement.scrollTop = distance from the top we are
    // document.documentElement.offsetHeight = size of the page as a wole including scroll
    //ERGO How luch visible height + Scroll Ditance >= Total Height = we are at the bottom
    setScrollPositionEnd(
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    );
  }

  return { scrollPositionEnd };
}
