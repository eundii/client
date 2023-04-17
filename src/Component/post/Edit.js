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

function Edit() {
  let params = useParams();
  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      return alert("모든 항목을 작성해주세요.");
    }

    let body = {
      title,
      content,
      postNum: params.postNum,
    };

    axios
      .post("/api/post/edit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 수정이 완료되었습니다.");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("글 수정에 실패하였습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
          setFlag(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const { title, content } = postInfo;
    setTitle(title);
    setContent(content);
  }, [postInfo]);

  return (
    <SectionWrap>
      <SectionTitle>글 수정하기</SectionTitle>
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
          <FooterBtnArea>
            <BtnSubmit onClick={(e) => onSubmit(e)}>수정하기</BtnSubmit>
            <BtnCancel
              onClick={(e) => {
                onCancel(e);
              }}
            >
              취소하기
            </BtnCancel>
          </FooterBtnArea>
        </form>
      </SectionInner>
    </SectionWrap>
  );
}

export default Edit;
