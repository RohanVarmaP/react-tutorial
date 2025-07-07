import React from 'react';
import './App.css';
import Header from './components/Header';
import Status from './components/Status';
import Language from './components/Language';
import Word from './components/Word';
import Keyboard from './components/Keyboard';

function App() {

  const [currentWord, setCurrentWord] = React.useState('react')


  return (
    <>
      <Header />
      <Status />
      <Language />
      <Word currentWord={currentWord} />
      <Keyboard />
      <button>New Game</button>
    </>
  );
}

export default App;
