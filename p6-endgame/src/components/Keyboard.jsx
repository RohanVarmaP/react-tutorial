import React from 'react'

const Keyboard = () => {
    const alphabetElement = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index) => <span
        key={index}>
        {letter.toUpperCase()}
    </span>)
    return (
        <section className='keyboard-section'>
            {alphabetElement}
        </section>
    )
}

export default Keyboard
