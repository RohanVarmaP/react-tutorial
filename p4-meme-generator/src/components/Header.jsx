import logo from "../logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img
                src={logo}
                alt="logo"
            />
            <h1>Meme Generator</h1>
        </header>
    )
}