import React, { useState } from "react";
import { UploadFormGroup } from "../../styles/FormCss";

function ImageUpload() {
  const [fileName, setFileName] = useState("");

  const fileNameHandler = (e) => {
    setFileName(e.target.value);
  };
  return (
    <UploadFormGroup>
      <input
        id="uploadImg"
        className="form-input file-name"
        type="text"
        value={fileName}
        placeholder="이미지만 첨부 가능합니다."
        readOnly
      />
      <label htmlFor="fileUpload" className="file-btn">
        파일찾기
      </label>
      <input
        type="file"
        id="fileUpload"
        accept="image/*"
        onChange={(e) => {
          fileNameHandler(e);
        }}
      />
    </UploadFormGroup>
  );
}

export default ImageUpload;
