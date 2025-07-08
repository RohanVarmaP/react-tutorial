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
  console.log('currentWord', currentWord);
  console.log('letterGuessed', letterGuessed);

  function handleLetterClick(letter) {
    setLetterGuessed(prev => (letter && !prev.includes(letter)) ? [...prev, letter] : prev);
  }

  return (
    <>
      <Header />
      <Status />
      <Language />
      <Word currentWord={currentWord} />
      <Keyboard onLetterClick={handleLetterClick} letterGuessed={letterGuessed} currentWord={currentWord} />
      <button>New Game</button>
    </>
  );
}

export default App;
