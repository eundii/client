import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";
import { FormGroup } from "../../styles/FormCss";
import { BtnSubmit, FooterBtnArea } from "../../styles/BtnCss";
import ImageUpload from "./ImageUpload";

function Upload() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login");
    }
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      return alert("모든 항목을 작성해주세요.");
    }

    let body = {
      title,
      content,
      image,
      uid: user.uid,
    };

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SectionWrap>
      <SectionTitle>글 작성하기</SectionTitle>
      <SectionInner>
        <form>
          <FormGroup>
            <label htmlFor="uploadTitle">제목</label>
            <input
              id="uploadTitle"
              type="text"
              className="form-input"
              placeholder="글 제목을 입력해주세요."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="uploadContent">내용</label>
            <textarea
              id="uploadContent"
              className="form-textarea"
              placeholder="글 내용을 입력해주세요."
              rows="10"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="uploadImg">이미지 첨부</label>
            <ImageUpload setImage={setImage} />
          </FormGroup>
          <FooterBtnArea>
            <BtnSubmit onClick={(e) => onSubmit(e)}>제출하기</BtnSubmit>
          </FooterBtnArea>
        </form>
      </SectionInner>
    </SectionWrap>
  );
}

export default Upload;
