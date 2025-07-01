import React from 'react'
import reactLogo from './assets/react.svg';



export default function Header() {
    return (
        <header className='header'>
            <nav>
                <img className="nav-img" src={reactLogo} alt="React Logo" />
                <span className='nav-name'>ReactFacts</span>
            </nav>
        </header>
    )
}
