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
    setDice(GetRandom())
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
      <section className='die-section'>
        {diceElement}
      </section>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
