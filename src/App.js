import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice";
import firebase from "./firebase";

import Header from "./Component/Header";
import List from "./Component/post/List";
import Upload from "./Component/post/Upload";
import Detail from "./Component/post/Detail";
import Edit from "./Component/post/Edit";
import Login from "./Component/user/Login";
import Register from "./Component/user/Register";

import { BodyWrap } from "./styles/LayoutCss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // firebase에서 사용자의 상태변화 추적
    firebase.auth().onAuthStateChanged((userInfo) => {
      // userInfo :
      // 사용자가 로그아웃 했거나 로그인하지 않았을 경우 null
      // 로그인 했으면 해당 사용자의 정보
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/post/:postNum" element={<Detail />} />
          <Route path="/edit/:postNum" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BodyWrap>
    </div>
  );
}

export default App;
