import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar () {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <h1>Philip Phyoe</h1>
                    </Link>
                    <ul className="menu-container">
                        <li className="menu-item">
                            <Link to="/" className="menu-link">
                                Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">
                                My Projects
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contact" className="menu-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    
                    <Button child={"Contact Now"} contact="./contact"></Button>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar;