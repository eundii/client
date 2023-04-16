import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import List from "./Component/post/List";
import Upload from "./Component/post/Upload";
import { BodyWrap } from "./styles/LayoutCss";
import { useState } from "react";

function App() {
  const [contentList, setContentList] = useState([]);
  return (
    <div className="App">
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<List />} />
          <Route
            path="/upload"
            element={
              <Upload
                contentList={contentList}
                setContentList={setContentList}
              />
            }
          />
        </Routes>
      </BodyWrap>
    </div>
  );
}

export default App;
