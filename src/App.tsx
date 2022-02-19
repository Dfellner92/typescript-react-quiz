import "./App.css";
import { useState, useEffect } from "react";
import { QuestionAndAnswers } from "./hooks/useFetchData";
import useFetchData from "./hooks/useFetchData";
import Container from "./components/Container";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [index, setIndex] = useState<number>(0);
  const [jsonString, setJsonString] = useState<string>("react");
  const { data, done } = useFetchData(`../../${jsonString}.json`);
  const [newData, setNewData] = useState<QuestionAndAnswers[] | null>(null);
  useEffect(() => {
    if (newData === null) {
      setNewData(data);
    }
  }, [newData, data]);

  function handleDataChange(value: string): void {
    setIndex(0);
    setJsonString(value);
  }

  console.log(data);
  return (
    <div className="all">
      <Sidebar handleDataChange={handleDataChange} />
      <div className="App">
        <Container
          newData={data}
          done={done}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default App;
