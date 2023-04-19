import styled from "@emotion/styled";

const FooterBtnArea = styled.div`
  margin-top: 5rem;
  display: flex;
  button {
    flex: 1;
    justify-content: center;
    + button {
      margin-left: 2rem;
    }
  }
`;
const BtnSubmit = styled.button`
  display: inline-flex;
  border-radius: 3rem;
  padding: 1.5rem 2rem;
  color: white;
  font-size: 2rem;
  background: #3494e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ec6ead,
    #3494e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ec6ead,
    #3494e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  &:disabled {
    background: #ddd;
    cursor: default;
  }
`;

const BtnCancel = styled.button`
  display: inline-flex;
  border-radius: 3rem;
  padding: 1.5rem 2rem;
  color: white;
  font-size: 2rem;
  background-color: #aaa;
  &:disabled {
    background: #ddd;
    cursor: default;
  }
`;

const InfoBtnArea = styled.div`
  display: flex;
  align-items: center;
`;

const BtnIcon = styled.button`
  margin-left: 1.2rem;
  font-size: 2rem;
  color: #555;
  &:first-of-type {
    margin-left: 0;
  }
  &:hover,
  &:focus {
    color: black;
  }
`;

export { FooterBtnArea, BtnSubmit, BtnCancel, InfoBtnArea, BtnIcon };
