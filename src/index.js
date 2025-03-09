import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      defaultRating={3}
      messages={["Terrible", "Bad", "OK", "Good", "Great", "Amazing"]}
    />
    <StarRating maxRating={7} />
    <StarRating maxRating={15} />
    <StarRating maxRating={20} />
    <StarRating maxRating={2} />
  </React.StrictMode>
);
