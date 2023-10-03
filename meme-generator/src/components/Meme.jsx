import { useState } from "react";
import memesData from "../memesData.jsx";
export default function Meme() {
  // const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg')
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => {
      return { ...prevMeme, randomImage: url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
