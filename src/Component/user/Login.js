import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import firebase from "../../firebase.js";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";
import { FormGroup } from "../../styles/FormCss";
import { BtnSubmit, BtnCancel, FooterBtnArea } from "../../styles/BtnCss";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  const goRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const LoginFunc = async (e) => {
    e.preventDefault();
    if (!(email && pw)) {
      return alert("모든 값을 입력해주세요.");
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, pw);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일 입니다.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorMsg("로그인이 실패하였습니다.");
      }
    }
  };

  return (
    <SectionWrap>
      <SectionTitle>로그인</SectionTitle>
      <SectionInner>
        <form>
          <FormGroup>
            <label htmlFor="loginEmail">이메일</label>
            <input
              id="loginEmail"
              type="text"
              value={email}
              className="form-input"
              placeholder="이메일 입력해주세요."
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="loginPw">비밀번호</label>
            <input
              id="loginPw"
              type="password"
              value={pw}
              className="form-input"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPw(e.target.value)}
            />
          </FormGroup>
          {errorMsg !== "" && <p>{errorMsg}</p>}
          <FooterBtnArea>
            <BtnSubmit onClick={(e) => LoginFunc(e)}>로그인</BtnSubmit>
            <BtnCancel onClick={(e) => goRegister(e)}>회원가입</BtnCancel>
          </FooterBtnArea>
        </form>
      </SectionInner>
    </SectionWrap>
  );
}

export default Login;
