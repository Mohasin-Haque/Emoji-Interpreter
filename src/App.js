import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😇": "Smiling Face with Hallo",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😂": "Face with Tears of Joy",
  "😅": "Grinning Face with Sweat",
  "😆": "Grinning Squinting Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "🙃": "Upside-Down Face",
  "😲": "Astonished Face",
  "🧐": "Face with Monocle"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    // key inside object
    // if(inputEmoji in dictionary)
    // if (meaning === undefined) {
    //   meaning = "Oops! Something went wrong.";
    // }
    // console.log(meaning)
    setMeaning(meaning);
  }

  //i will catch you if you will copy my code.😂😂
  // var [userInput, setUserInput] = useState("");

  // function inputChangehandler(event) {
  //   //console.log(event.target);
  //   console.log(event.target.value);
  //   setUserInput(event.target.value);
  // }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>❤️Emoji Interpreter❤️</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>click the following emojies to know there meaning.</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}

      <div id="footer">
        <p> Made with ❤️ by Mohasin. </p>
      </div>
    </div>
  );
}
