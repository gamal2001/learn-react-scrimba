import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from 'nanoid'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  function rollDice(){
    setDice(allNewDice())
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Object.values({
          value: Math.ceil(Math.random() * 6), 
            isHeld: false,
        }))
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
