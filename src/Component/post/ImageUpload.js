import React, { useEffect, useState } from "react";
import axios from "axios";

import { UploadFormGroup } from "../../styles/FormCss";

function ImageUpload({ setImage }) {
  const [fileName, setFileName] = useState("");

  const fileUploadHandler = (e) => {
    setFileName(e.target.files[0].name);
    // formData를 만들어서 key는 file, value는 받아온 파일로 해서 추가한다.
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    // axios 통신을 이용해 위에서 만든 formData를 보낸다.
    axios.post("/api/post/image/upload", formData).then((response) => {
      setImage(response.data.filePath);
    });
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
          fileUploadHandler(e);
        }}
      />
    </UploadFormGroup>
  );
}

export default ImageUpload;
