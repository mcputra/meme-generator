import React from "react";
import "../style.css";

export default function Header() {
  return (
    <header className="header">
      <img src="/images/troll-face.png" className="header--image" />
      <h1 className="header--title">Meme Generator</h1>
      <h2 className="header--project">
        <a href="https://github.com/mcputra/meme-generator">
          Meme Generator by M Chandra P
        </a>
        <br />
        <a href="https://scrimba.com/learn/learnreact">
          Original version by Bob Ziroll on Scrimba
        </a>
      </h2>
    </header>
  );
}
