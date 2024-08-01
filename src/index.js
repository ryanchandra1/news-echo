import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Desktop from "./pages";

function App() {
  return <Desktop />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
