import { useState } from "react";
import memesData from "../memesData";
export default function Meme() {
  const [memeImage, setMemeImage] = useState('')
  function getMemeImage(e) {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[randomNumber].url;
    setMemeImage(memesArray[randomNumber].url);
    e.preventDefault()
  }
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} cla/>
    </main>
  );
}
