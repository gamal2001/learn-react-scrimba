import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
export default function App() {
  const [dice, setDice] = useState(allNewDice())
  function rollDice(){
    setDice(allNewDice())
  }
  function allNewDice(){
    let newDice = []
    for(let i = 0; i < 10; i++){
      let randomNumber = Math.floor(Math.random() * 7)
      newDice.push(randomNumber)
    }
    return newDice
  }
const diceElements = dice.map(( die, index) => {
  return <Die key={index} value = {die}/>
})
  return (
    <main>
      <div className="dies-container">
        {diceElements}
      </div>
      <button className="roll--dice" onClick={rollDice}>Roll</button>
    </main>
  );
}
