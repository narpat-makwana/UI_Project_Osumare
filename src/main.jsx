import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import background from "../src/images/background.png";
import Services from "./components/Services.jsx";
import Comp2 from "./components/Comp2.jsx";
import Comp3 from "./components/Comp3.jsx";
import Comp4 from "./components/Comp4.jsx";
import Comp5 from "./components/Comp5.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className=""
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "950px",
        width: "full",
        alignContent: "flex-end",
        opacity: "60",
      }}
    >
      <Header />
      <Body />
      <Services/>
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
    </div>
  </React.StrictMode>
);
