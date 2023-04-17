import React from "react";
import { Link } from "react-router-dom";

import { PostListItem } from "../../styles/ListCss";

function ListItem({ post }) {
  const { title, content, postNum } = post;
  return (
    <PostListItem>
      <Link to={`/post/${postNum}`}>
        <div className="item-left">작성자 영역</div>
        <div className="item-right">
          <p className="item-title">{title}</p>
          <p className="item-content">{content}</p>
        </div>
      </Link>
    </PostListItem>
  );
}

export default ListItem;
