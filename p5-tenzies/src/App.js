import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(GetRandom())

  function GetRandom() {
    const randomList = [];
    for (let i = 0; i < 10; i++) {
      const randomValue = Math.floor(Math.random() * 6) + 1
      randomList.push({
        value: randomValue,
        isHeld: true,
        id: nanoid()
      })
    }
    console.log(randomList)
    return randomList
  }

  const diceElement = dice.map((val) => <Die key={val.id} {...val} />)

  function rollDice() {
    setDice(GetRandom())
  }

  return (
    <main>
      <section className='die-section'>
        {diceElement}
      </section>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
