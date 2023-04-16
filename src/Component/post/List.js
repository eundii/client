import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";
import { PostList, PostListHeader } from "../../styles/ListCss";
import ListItem from "./ListItem";

function List() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>글 목록</SectionTitle>
      <SectionInner>
        <PostListHeader>
          <p className="total-count">total ({postList.length})</p>
          <div className="filter-area">필터영역</div>
        </PostListHeader>
        <PostList>
          {postList.map((post, idx) => {
            return <ListItem post={post} />;
          })}
        </PostList>
      </SectionInner>
    </SectionWrap>
  );
}

export default List;
