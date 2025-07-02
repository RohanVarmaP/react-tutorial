import React from 'react'

const Entry = (props) => {
    console.log('hello')
    console.log(props)
    return (
        <article className='journal-entry'>
            <div className='image-container'>
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div>
                <img className='Marker-png' src="/src/assets/Marker.png" alt="Markar icon" />
                <span className='span-country'>Japan</span>
                <a href={props.link}>View on Google Maps</a>
                <h2>{props.location}</h2>
                <p>{props.date}</p>
                <p>{props.desc}</p>
            </div>
        </article >
    )
}

export default Entry
