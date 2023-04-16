import React from "react";
import { SectionTitle, SectionWrap, SectionInner } from "../styles/LayoutCss";
import { FormGroup } from "../styles/FormCss";
import { BtnSubmit, FooterBtnArea } from "../styles/BtnCss";

function Upload() {
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
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="uploadContent">내용</label>
            <textarea
              id="uploadContent"
              className="form-textarea"
              placeholder="글 내용을 입력해주세요."
              rows="10"
            ></textarea>
          </FormGroup>
          <FooterBtnArea>
            <BtnSubmit>제출하기</BtnSubmit>
          </FooterBtnArea>
        </form>
      </SectionInner>
    </SectionWrap>
  );
}

export default Upload;
