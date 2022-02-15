import "./App.css";
import Container from "./components/Container";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="all">
      <Sidebar />
      <div className="App">
        <Container />
      </div>
    </div>
  );
}

export default App;
