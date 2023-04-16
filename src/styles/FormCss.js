import styled from "@emotion/styled";

const FormGroup = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
  }
  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.5rem 1.2rem;
    font-size: 1.8rem;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    &::placeholder {
      color: #ddd;
    }
  }
`;

export { FormGroup };
