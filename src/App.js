import React, { useState } from "react";
import "./styles.css";

let emojiDatabase = {
  "😀": "Happy",
  "😎": "Dude",
  "🤩": "Amazing",
  "😘": "Lovely",
  "🥶": "Freezing",
  "😇": "Blessed",
  "❤️": "Love",
  "🏊‍♂️": "Swimming",
  "⚽️": "Soccer",
  "🎂": "Cake",
  "🍎": "Apple"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  let emojiData = Object.keys(emojiDatabase);
  function inputHandler(e) {
    let input = e.target.value;
    let translation = emojiDatabase[input];
    if (translation === undefined) {
      translation = "we do not have meaning of this in our Database";
    }
    setMeaning(translation);
  }
  function emojiClick(e) {
    let translation = emojiDatabase[e];
    setMeaning(translation);
  }

  return (
    <div
      className="App"
      style={{ width: "80%", margin: "auto", backgroundColor: "#fcf876" }}
    >
      <h1>Emoji Translator</h1>
      <input
        style={{ width: "70%", height: "10vh", fontSize: "1.5rem" }}
        onChange={inputHandler}
      />
      <h3 style={{ fontStyle: "italic" }}>{meaning}</h3>
      <h2>Emojis we know</h2>
      <ul>
        {emojiData.map((item) => {
          return (
            <span
              style={{
                padding: "1rem 0.5rem",
                fontSize: "1.5rem",
                lineHeight: "2",
                cursor: "pointer"
              }}
              key={item}
              onClick={() => emojiClick(item)}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
