import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "layout/RootLayout";
import ReactQueryConfig from "drivers/react-query/ReactQueryConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactQueryConfig>
      <RootLayout>
        <App />
      </RootLayout>
    </ReactQueryConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
