import './mobile.css'
import { Link } from "react-router-dom";

export const Mobile = () => {
    return (
        <>
            <Link to="/search">
                <button className="search-icon show-for-small-screen">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </Link>
        </>
    )
}