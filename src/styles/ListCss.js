import styled from "@emotion/styled";
import App from "./../App";

const PostListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem 0;
  .total-count {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const PostList = styled.ul`
  border-top: 2px solid black;
`;

const PostListItem = styled.li`
  > a {
    display: flex;
    padding: 2rem 3rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
  .item-left {
    padding-right: 2rem;
  }
  .item-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .item-content {
    margin-top: 1.4rem;
    font-size: 1.6rem;
    color: #333;
  }
`;

const EmptyArea = styled.div`
  padding: 10rem 0;
  text-align: center;
  font-size: 2rem;
`;

export { PostList, PostListHeader, PostListItem, EmptyArea };
