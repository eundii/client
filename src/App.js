import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import List from "./Component/post/List";
import Upload from "./Component/post/Upload";
import { BodyWrap } from "./styles/LayoutCss";
import Detail from "./Component/post/Detail";
import Edit from "./Component/post/Edit";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/post/:postNum" element={<Detail />} />
          <Route path="/edit/:postNum" element={<Edit />} />
        </Routes>
      </BodyWrap>
    </div>
  );
}

export default App;
