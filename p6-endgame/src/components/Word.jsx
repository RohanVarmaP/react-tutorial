import React from 'react'

const Word = (props) => {
    const letterElements = props.currentWord.split('').map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>)
    return (
        <section className='word-section'>
            {letterElements}
        </section>
    )
}

export default Word
