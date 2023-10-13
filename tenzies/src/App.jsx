import "./App.css";
import Die from "./components/Die";
export default function App() {
  function allNewDice(){
    let newDice = []
    for(let i = 0; i < 10; i++){
      let randomNumber = Math.floor(Math.random() * 7)
      newDice.push(randomNumber)
    }
    return newDice
  }
console.log(allNewDice())
  return (
    <main>
      <div className="dies-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="10" />
      </div>
    </main>
  );
}
