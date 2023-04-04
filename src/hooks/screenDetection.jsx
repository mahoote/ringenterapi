import { useEffect, useState } from "react";

export function useGetScreenDistance(ref) {
  /*
   * Get the distance between an element and the ends of the screen.
   * */

  const [topStart, setTopStart] = useState();
  const [topEnd, setTopEnd] = useState();

  const [bottomEnd, setBottomEnd] = useState();

  const onScroll = () => {
    const el = ref.current;

    if (el !== null) {
      setTopStart(el.getBoundingClientRect().top);
      setTopEnd(window.innerHeight - el.getBoundingClientRect().top);

      setBottomEnd(window.innerHeight - el.getBoundingClientRect().bottom);
    }
  };

  // First time.
  useEffect(() => {
    onScroll();
  }, []);

  // After scrolling.
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);

  return { topStart, topEnd, bottomEnd };
}

export function useResize(resizeHandler) {
  useEffect(() => {
    resizeHandler();
  }, [resizeHandler]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);
}
