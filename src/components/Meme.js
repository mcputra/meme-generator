import React from "react";
import "../style.css";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    italic: false,
    underline: false,
    textColor: "white",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <div>
          <p>Text style</p>
          <input
            id="italic"
            type="checkbox"
            name="italic"
            onChange={handleChange}
            checked={meme.italic}
          />
          <label htmlFor="italic">
            <i>Italic</i>
          </label>
          <br />
          <input
            id="underline"
            type="checkbox"
            name="underline"
            onChange={handleChange}
            checked={meme.underline}
          />
          <label htmlFor="underline">
            <u>Underline</u>
          </label>
        </div>
        <div>
          <p>Text color</p>
          <table>
            <tr>
              <td>
                <input
                  type="radio"
                  id="white"
                  name="textColor"
                  value="white"
                  onChange={handleChange}
                  checked={meme.textColor === "white"}
                />
                <label for="white">White</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="red"
                  name="textColor"
                  value="red"
                  onChange={handleChange}
                  checked={meme.textColor === "red"}
                />
                <label for="red">Red</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="green"
                  name="textColor"
                  value="green"
                  onChange={handleChange}
                  checked={meme.textColor === "green"}
                />
                <label for="green">Green</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="blue"
                  name="textColor"
                  value="blue"
                  onChange={handleChange}
                  checked={meme.textColor === "blue"}
                />
                <label for="blue">Blue</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  id="black"
                  name="textColor"
                  value="black"
                  onChange={handleChange}
                  checked={meme.textColor === "black"}
                />
                <label for="black">Black</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="cyan"
                  name="textColor"
                  value="cyan"
                  onChange={handleChange}
                  checked={meme.textColor === "cyan"}
                />
                <label for="cyan">Cyan</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="magenta"
                  name="textColor"
                  value="magenta"
                  onChange={handleChange}
                  checked={meme.textColor === "magenta"}
                />
                <label for="magenta">Magenta</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="yellow"
                  name="textColor"
                  value="yellow"
                  onChange={handleChange}
                  checked={meme.textColor === "yellow"}
                />
                <label for="yellow">Yellow</label>
              </td>
            </tr>
          </table>
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2
          className={`meme--text top ${meme.italic ? "italic" : ""} ${
            meme.underline ? "underline" : ""
          } ${meme.textColor}`}
        >
          {meme.topText}
        </h2>
        <h2
          className={`meme--text bottom ${meme.italic ? "italic" : ""} ${
            meme.underline ? "underline" : ""
          } ${meme.textColor}`}
        >
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
