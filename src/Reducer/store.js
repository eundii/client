import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  // 리덕스 툴킷는 비직렬화 하는 데이터를 보내는걸 싫어해서 에러 출력됨
  // 에러 해결법은 아니라 임시로 에러 출력을 무시하기 위해 작성
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
