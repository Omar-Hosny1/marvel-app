import React from "react";
import HomeCom from "../components/Home/HomeCom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-main-container">
      <HomeCom />
    </div>
  );
};

export default React.memo(Home);
