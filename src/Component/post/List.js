import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  SectionTitle,
  SectionWrap,
  SectionInner,
} from "../../styles/LayoutCss";
import { PostList, PostListHeader, EmptyArea } from "../../styles/ListCss";
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
        {postList.length !== 0 ? (
          <PostList>
            {postList.map((post) => {
              return <ListItem post={post} key={post.postNum} />;
            })}
          </PostList>
        ) : (
          <EmptyArea>내용이 없습니다.</EmptyArea>
        )}
      </SectionInner>
    </SectionWrap>
  );
}

export default List;
