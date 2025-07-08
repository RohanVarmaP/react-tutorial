import React from 'react'
import { getFarewellText } from '../utils/FarewellText'
import { languages } from '../data/languages'

const Status = (props) => {
    const getStatus = () => {
        if (props.isgameLost || props.isgameWon) {
            if (props.isgameWon) {
                return (
                    <>
                        <h2>You Won!</h2>
                        <p>Well done! 🎉</p>
                    </>
                )
            } else {
                return (
                    <>
                        <h2>Game Over</h2>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            }
        } else {
            return (<></>)
        }
    }
    return (
        <section className='status-section' style={props.isgameLost ? { backgroundColor: '#BA2A2A' } : props.isgameWon ? { backgroundColor: '#10A95B' } : { backgroundColor: 'none' }
        }>
            {getStatus()}
        </section >
    )
}

export default Status
