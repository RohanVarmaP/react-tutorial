import React from 'react';
import './App.css';
import Header from './components/Header';
import Status from './components/Status';
import Language from './components/Language';
import Word from './components/Word';
import Keyboard from './components/Keyboard';

function App() {

  const [currentWord, setCurrentWord] = React.useState('react')
  const [letterGuessed, setLetterGuessed] = React.useState([])
  // console.log('currentWord', currentWord);
  // console.log('letterGuessed', letterGuessed);

  const wrongGuessCount = letterGuessed.filter((value) => !currentWord.includes(value)).length
  // console.log(wrongGuessCount)

  const isgameWon = currentWord.split('').every((letter) => letterGuessed.includes(letter))
  // console.log('isgameWon', isgameWon)
  const isgameLost = wrongGuessCount >= 9
  // console.log('isgameLost', isgameLost)

  function handleLetterClick(letter) {
    setLetterGuessed(prev => (letter && !prev.includes(letter)) ? [...prev, letter] : prev);
  }

  return (
    <>
      <Header />
      <Status isgameLost={isgameLost} isgameWon={isgameWon} wrongGuessCount={wrongGuessCount} />
      <Language wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} letterGuessed={letterGuessed} />
      <Keyboard onLetterClick={handleLetterClick} letterGuessed={letterGuessed} currentWord={currentWord} />
      <button>New Game</button>
    </>
  );
}

export default App;
