import React from 'react'
import { languages } from '../data/languages'

const Language = () => {
    function getLanguages(languages) {
        const languageElement = languages.map((val) => {
            const styles = {
                backgroundColor: val.backgroundColor,
                color: val.color
            }
            return <span
                className='chip lost'
                key={val.name}
                style={styles}>
                {val.name}
            </span>
        })
        return languageElement
    }
    return (
        <section className='languge-section'>
            {getLanguages(languages)}
        </section>
    )
}

export default Language
