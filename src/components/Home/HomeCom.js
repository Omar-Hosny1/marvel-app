import React from "react";
import "./HomeCom.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "./Images/Home-Image.jpg";
const HomeCom = () => {
  return (
    <div className="home-com">
      <div className="backdrop-info">
        <h1>SOUL</h1>
        <span>Releasing 10 April</span>
        <a className="trailer" href="https://youtu.be/xOsLIiBStEs">
          <AiOutlinePlayCircle /> Watch The Trailer
        </a>
      </div>
    </div>
  );
};

export default HomeCom;
