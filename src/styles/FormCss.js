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
    padding: 0.8rem 1.2rem;
    font-size: 1.8rem;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    &::placeholder {
      color: #ddd;
    }
  }
`;

const UploadFormGroup = styled.div`
  display: flex;
  .file-name {
    &:read-only {
      color: #000;
    }
  }
  .file-btn {
    margin-bottom: 0;
    padding: 0.8rem 2rem;
    font-size: 1.8rem;
    color: #fff;
    background-color: #aaa;
    cursor: pointer;
    margin-left: 1rem;
    white-space: nowrap;
    border-radius: 0.4rem;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export { FormGroup, UploadFormGroup };
