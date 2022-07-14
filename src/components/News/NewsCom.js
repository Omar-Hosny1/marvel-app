import React from "react";
import "./NewsCom.css";
function NewsCom() {
  return (
    <div className="news-container">
      <h1 className="marvel-news">#MARVEL NEWS</h1>
      <div className="news">
        <div className="box">
          <img src="https://image.tmdb.org/t/p/w500/fqw8nJLPRgKRyFSDC0xBsC06NGC.jpg" />
          <div className="box-news-info">
            <h1>The Northman</h1>
            <p>
              Prince Amleth is on the verge of becoming a man when his father is
              brutally murdered by his uncle, who kidnaps the boy's mother. Two
              decades...
            </p>
          </div>
        </div>
        <div className="box">
          <img src="https://image.tmdb.org/t/p/w500/gG9fTyDL03fiKnOpf2tr01sncnt.jpg" />
          <div className="box-news-info">
            <h1>Morbius</h1>
            <p>
              Dangerously ill with a rare blood disorder, and determined to save
              others suffering his same fate, Dr. Michael Morbius attempts a
              desperate ...
            </p>
          </div>
        </div>
        <div className="box">
          <img src="https://image.tmdb.org/t/p/w500/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg" />
          <div className="box-news-info">
            <h1>Memory</h1>
            <p>
              Alex, an assassin-for-hire, finds that he's become a target after
              he refuses to complete a job for a dangerous criminal
              organization. With t...
            </p>
          </div>
        </div>
        <div className="box">
          <img src="https://image.tmdb.org/t/p/w500/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg" />
          <div className="box-news-info">
            <h1>Spider-Man: No Way Home</h1>
            <p>
              Peter Parker is unmasked and no longer able to separate his normal
              life from the high-stakes of being a super-hero. When he asks for
              help fr...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCom;
