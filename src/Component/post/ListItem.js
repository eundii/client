import React from "react";

import { PostListItem } from "../../styles/ListCss";

function ListItem({ post }) {
  const { title, content } = post;
  return (
    <PostListItem>
      <div className="item-left">작성자 영역</div>
      <div className="item-right">
        <p className="item-title">{title}</p>
        <p className="item-content">{content}</p>
      </div>
    </PostListItem>
  );
}

export default ListItem;
