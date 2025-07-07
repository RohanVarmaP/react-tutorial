import React from 'react'

const Word = (props) => {
    const letterElements = props.currentWord.split('').map((letter) => <span>{letter.toUpperCase()}</span>)
    return (
        <section className='word-section'>
            {letterElements}
        </section>
    )
}

export default Word
