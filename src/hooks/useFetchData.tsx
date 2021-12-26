import { useState, useEffect } from "react";

export interface RootObject {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
}

function useFetchData(url: string) {
  const [data, setData] = useState(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setDone(true);
      });
  }, [url]);

  return { data, done };
}

export default useFetchData;
