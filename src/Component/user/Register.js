import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import firebase from "../../firebase";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";
import { FormGroup } from "../../styles/FormCss";
import { BtnSubmit, FooterBtnArea } from "../../styles/BtnCss";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwconfirm] = useState("");
  const [flag, setFlag] = useState(false);

  const registerFunc = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!(name && email && pw && pwConfirm)) {
      return alert("모든 값을 입력해주세요.");
    }
    if (pw !== pwConfirm) {
      return alert("비밀번호와 비밀번호 확인 값이 틀립니다.다시 입력해주세요.");
    }

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw);

    await createdUser.user.updateProfile({
      displayName: name,
    });

    // 받아온 사용자 정보
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };
    axios.post("/api/user/register", body).then((response) => {
      setFlag(false);
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("회원가입이 실패하였습니다.");
      }
    });
  };

  return (
    <SectionWrap>
      <SectionTitle>회원가입</SectionTitle>
      <SectionInner>
        <form>
          <FormGroup>
            <label htmlFor="RegisterName">이름</label>
            <input
              id="RegisterName"
              type="text"
              value={name}
              className="form-input"
              placeholder="이름을 입력해주세요."
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="RegisterEmail">이메일</label>
            <input
              id="RegisterEmail"
              type="text"
              value={email}
              className="form-input"
              placeholder="이메일을 입력해주세요."
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="RegisterPw">비밀번호</label>
            <input
              id="RegisterPw"
              type="password"
              value={pw}
              className="form-input"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPw(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="RegisterPwConfirm">비밀번호확인</label>
            <input
              id="RegisterPasswordConfirm"
              type="password"
              value={pwConfirm}
              className="form-input"
              placeholder="비밀번호를 다시 입력해주세요."
              onChange={(e) => setPwconfirm(e.target.value)}
            />
          </FormGroup>
          <FooterBtnArea>
            <BtnSubmit onClick={(e) => registerFunc(e)} disabled={flag}>
              회원가입
            </BtnSubmit>
          </FooterBtnArea>
        </form>
      </SectionInner>
    </SectionWrap>
  );
}

export default Register;
