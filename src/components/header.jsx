import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="hed">
                    <div className="hed-left">
                        <p>logo</p>
                    </div>
                    <div className="hed-rigth">
                        <Link to='/Home'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/Breeds'>Breeds</Link>
                        <Link to='Input'>Input</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header