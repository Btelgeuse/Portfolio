import { useRef, useEffect } from "react";

export function useHorizontalScroll() {

  const elRef = useRef();

  useEffect(() => {

    const el = elRef.current;
    console.log("Attached ref to:", el);

    if (el) {
      const onWheel = e => {
        console.log("Scrolling", e.deltaY);

        if (e.deltaY == 0) {
          return
        };

        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY*4,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel, { passive: false });

      return () => el.removeEventListener("wheel", onWheel);
    }

  }, []);
  return elRef;
}