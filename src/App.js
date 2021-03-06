import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π": "Smiling Face with Smiling Eyes",
  "π€©": "Star-Struck",
  "π": "Slightly Smiling Face",
  "π": "Smiling Face with Hallo",
  "π₯΅": "Hot Face",
  "π₯°": "Smiling Face with Hearts",
  "π": "sad",
  "π": "Kissing Face",
  "π": "Face with Tears of Joy",
  "β€οΈ": "love",
  "π": "Grinning Face with Big Eyes",
  "π³": "disbelief",
  "π": "Beaming Face with Smiling Eyes",
  "π²": "Astonished Face",
  "π": "annoyance"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "Emoji meaning present in our databse will show here.."
  );

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // setEmoji(userInput);
    var meaning = emojiDictionary[userInput];
    // key inside object
    // if(userInput in emojiDictionary)
    if (meaning === undefined) {
      meaning = "Oops! Something went wrong. Try a diiferent Emoji.";
    }
    // console.log(meaning)
    setMeaning(meaning);
  }

  //i will catch you if you will copy my code.ππ
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
      <h1>β€οΈEmoji Interpreterβ€οΈ</h1>

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
    </div>
  );
}
