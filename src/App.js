import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import List from "./Component/List";
import Upload from "./Component/Upload";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
