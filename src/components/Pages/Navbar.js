import React from 'react'
import  {Link} from 'react-router-dom'

function Navbar() {
    return (
        <React.Fragment>
             <nav className="nav-container purpleGradient">
                <Link to="/" className="logo">Awesome libs</Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
        </nav>    
        </React.Fragment>
    )
}

export default Navbar
