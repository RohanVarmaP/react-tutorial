import React from 'react'

const Keyboard = (props) => {
    const alphabetElement = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index) => <button
        key={index}
        onClick={() => props.onLetterClick(letter)}
    >
        {letter.toUpperCase()}
    </button>)
    return (
        <section className='keyboard-section'>
            {alphabetElement}
        </section>
    )
}

export default Keyboard
