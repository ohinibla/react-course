import React from "react";

export default function Form() {
  const [allMemeImages, setAllMemeImages] = React.useState({});
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "images/star-filled.png",
  });

  React.useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data);
    }
    getData();
  }, []);

  function getMemeImage() {
    const memeData = allMemeImages.data.memes;
    const randomMeme =
      memeData[Math.floor(Math.random() * memeData.length)].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: randomMeme };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className="container form" action="#">
      <div className="form--input">
        <input
          type="text"
          name="topText"
          placeholder="top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="submit" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="image--container">
        <div className="image--text">
          <p className="topText">{meme.topText}</p>
          <p className="bottomText">{meme.bottomText}</p>
        </div>
        <img className="form--image" src={meme.randomImage} />
      </div>
    </div>
  );
}
