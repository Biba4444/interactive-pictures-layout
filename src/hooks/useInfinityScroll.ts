import { useEffect, useState } from "react";

export const useInfinityScroll = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
    if (!hasMore) return;
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 200;
    if (bottom) {
      setPaginationPage(prevPage => prevPage + 1);
    }
  }, 800);

  useEffect(() => {
    if (!hasMore) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, hasMore]);

  return {
    paginationPage,
    setPaginationPage,
    setHasMore,
  };
};
