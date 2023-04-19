import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

  let navigate = useNavigate();

  const goRegister = (e) => {
    e.preventDefault();
    navigate("/register");
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
          <FooterBtnArea>
            <BtnSubmit>로그인</BtnSubmit>
            <BtnCancel onClick={(e) => goRegister(e)}>회원가입</BtnCancel>
          </FooterBtnArea>
        </form>
      </SectionInner>
    </SectionWrap>
  );
}

export default Login;
