import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return(
        <div>
            <nav>
                <Link exact to="/" className="site-title">Stage-Blog</Link>
                <Link to="/Stagepage1" className="nav-text">Stage QuestControl</Link>
                <Link to="/Stagepage2" className="nav-text">Stagepage2</Link>
            </nav>

        </div>
       
           
    ) 
}
    
    
    export default Navbar;