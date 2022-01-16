import { useState, useEffect } from "react";
import axios from "axios";

export interface RootObject {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
}

function useFetchData(url: string) {
  const [data, setData] = useState<RootObject | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setDone(true);
      });
  }, [url]);

  return { data, done };
}

export default useFetchData;
