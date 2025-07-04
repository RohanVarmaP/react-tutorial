import { useState } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageURL: 'http://i.imgflip.com/1bij.jpg'
    })

    function handleChange(event) {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setMeme(prev => ({ ...prev, [name]: value }))
        console.log(meme)
    }
    return (
        <main className="main">
            <form className="form">
                <label>Top Text
                    <input
                        type="text"
                        value={meme.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        value={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.imageURL} alt="generated Meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main >
    )
}