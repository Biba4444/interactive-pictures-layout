import { useEffect, useState } from "react";

export const useInfinityScroll = () => {
  const [actualPaginationPage, setActualPaginationPage] = useState(1);

  const debounce = (func: (args: any) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (...args: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(args);
      }, delay);
    };
  };

  const handleScroll = debounce(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 200;
    if (bottom) {
      setActualPaginationPage(prevPage => prevPage + 1);
    }
  }, 800);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return {
    actualPaginationPage,
    setActualPaginationPage,
  };
};
