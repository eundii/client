import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import List from "./Component/List";
import Upload from "./Component/Upload";
import { BodyWrap } from "./styles/LayoutCss";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BodyWrap>
    </div>
  );
}

export default App;
