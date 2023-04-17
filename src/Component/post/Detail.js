import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";
import { DetailHeader, DetailBody, DetailInfo } from "../../styles/DetailCss";
import { InfoBtnArea, BtnIcon } from "../../styles/BtnCss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function Detail() {
  let params = useParams();
  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

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

  const onEdit = () => {
    navigate(`/edit/${postInfo.postNum}`);
  };

  const onDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch((error) => {
          alert("게시글 삭제에 실패하였습니다.");
        });
    }
  };
  return (
    <SectionWrap>
      {flag ? (
        <>
          <SectionTitle>글 상세보기</SectionTitle>
          <SectionInner>
            <DetailHeader>
              <p className="detail-title">{postInfo.title}</p>
              <DetailInfo>
                <div className="info">사용자 | 날짜</div>
                <InfoBtnArea>
                  <BtnIcon
                    onClick={() => {
                      onEdit();
                    }}
                  >
                    <AiFillEdit />
                    <span className="sr-only">수정</span>
                  </BtnIcon>
                  <BtnIcon
                    onClick={() => {
                      onDelete();
                    }}
                  >
                    <AiFillDelete />
                    <span className="sr-only">삭제</span>
                  </BtnIcon>
                </InfoBtnArea>
              </DetailInfo>
            </DetailHeader>
            <DetailBody>
              <p>{postInfo.content}</p>
            </DetailBody>
          </SectionInner>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </SectionWrap>
  );
}

export default Detail;
