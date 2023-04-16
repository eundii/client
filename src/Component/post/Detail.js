import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";

function Detail() {
  let params = useParams();
  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);

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

  return (
    <SectionWrap>
      {flag ? (
        <>
          <SectionTitle>글 상세보기</SectionTitle>
          <SectionInner>
            <p>{postInfo.title}</p>
            <p>{postInfo.content}</p>
          </SectionInner>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </SectionWrap>
  );
}

export default Detail;
