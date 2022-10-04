import './nav.css'
import { Link } from "react-router-dom";
const nav = () => {
    return (
        <nav className="hide-for-mobile">
            <ul className="nav-links flex">
                <li className="nav-link">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-link nav-icon">
                    Movie
                    <span className="icon"></span>
                    <ul className="lavel-one">
                        <li className="nav-link">Hollywood</li>
                        <li className="nav-link">Tollywood</li>
                        <li className="nav-link">Bollywood</li>
                    </ul>
                </li>
                <li className="nav-link">
                    <Link to="netflix/">
                        Netflix
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="animation/">
                        Animation
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default nav;