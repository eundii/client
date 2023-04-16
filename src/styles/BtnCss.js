import styled from "@emotion/styled";

const FooterBtnArea = styled.div`
  margin-top: 5rem;
  button {
    display: block;
    width: 100%;
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
`;

export { FooterBtnArea, BtnSubmit };
