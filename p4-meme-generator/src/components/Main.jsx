import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageURL: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('http://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes)
            })
    }, [])

    function handleChange(event) {
        console.log(allMemes)
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setMeme(prev => ({ ...prev, [name]: value }))
    }

    function getImage() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const newMeme = allMemes[randomNum].url
        console.log(newMeme)
        setMeme(prev => ({ ...prev, imageURL: newMeme }))
    }

    return (
        <main className="main">
            <div className="form">
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
                <button onClick={getImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL} alt="generated Meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main >
    )
}