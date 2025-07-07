import logo from './logo.svg';
import './App.css';
import Die from './components/Die';

function App() {

  function Getrandom() {
    const randomList = [];
    for (let i = 0; i < 10; i++) {
      const randomValue = Math.floor(Math.random() * 6) + 1
      randomList.push(randomValue)
    }
    console.log(randomList)
    return randomList
  }

  return (
    <main>
      <section className='die-section'>
        {
          Getrandom(randomList).map((val) => {
            <Die value={val} />
          })
        }
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </section>
    </main>
  );
}

export default App;
