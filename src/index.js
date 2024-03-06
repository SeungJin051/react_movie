import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //     StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 테그로,
  // 해당 테그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행
  <App />
);
