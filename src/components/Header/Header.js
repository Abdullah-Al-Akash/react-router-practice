import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                                <li className="nav-item">
                                                        <NavLink
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "red"
                                                                }}
                                                                className="nav-link" to="/home">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "red"
                                                                }}
                                                                className="nav-link" to="/friends">Friends</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "red"
                                                                }}
                                                                className="nav-link" to="/about">About us</NavLink>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Header;