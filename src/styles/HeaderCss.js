import styled from "@emotion/styled";

const HeaderWrap = styled.header`
  background-color: #eee;
  border-bottom: 1px solid #ddd;
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
`;

const HeaderNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 2rem;
    }
  }
`;

const HeaderSubMenu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 1rem;
    }
  }
`;

export { HeaderWrap, HeaderNav, HeaderSubMenu, HeaderInner };
