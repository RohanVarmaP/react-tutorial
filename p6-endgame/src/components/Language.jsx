import React from 'react'
import { languages } from '../data/languages'

const Language = () => {
    function getLanguages(languages) {
        languages.map((val) => (<span>val.name</span>))
    }
    return (
        <section className='languge-section'>
            {getLanguages(languages)}
        </section>
    )
}

export default Language
