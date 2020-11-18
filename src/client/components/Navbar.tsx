import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-info shadow justify-content-between" style={{backgroundColor: "#7952b3"}}>
            <div className="container">
                <Link to="/" className="navbar-brand text-white"> -- Christopher's Blog -- </Link>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link text-white mx-4" to="/"> -- Home -- <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/blogs/add">-- New Blog Entry --</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

interface INavbarProps { }

export default Navbar