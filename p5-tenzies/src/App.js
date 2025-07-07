import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(GetRandom())

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  function GetRandom() {
    const randomList = [];
    for (let i = 0; i < 10; i++) {
      const randomValue = Math.floor(Math.random() * 6) + 1
      randomList.push({
        value: randomValue,
        isHeld: false,
        id: nanoid()
      })
    }
    console.log(randomList)
    return randomList
  }

  const diceElement = dice.map((val) => <Die
    key={val.id}
    {...val}
    hold={() => hold(val.id)} />)

  function rollDice() {
    setDice(old => (old.map(val => (val.isHeld === true ? val : { ...val, value: Math.floor(Math.random() * 6) + 1 }
    ))
    ))
  }

  function hold(key) {
    setDice(old => {
      return old.map(val => {
        return val.id === key ? { ...val, isHeld: !val.isHeld } : val
      })
    })
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='die-section'>
        {diceElement}
      </section>
      <button className='roll-dice' onClick={rollDice}>{gameWon ? 'New Game' : 'Roll Dice'}</button>
    </main>
  );
}

export default App;