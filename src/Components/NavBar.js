import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light pb-5" style={{ backgroundColor: '#27323E' }}>
                <div className="container">
                    <a className="navbar-brand text-light" href="/#">Beans <span className="gradient_text">Studios</span></a>

                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        style={{
                            background: '#e8054c',
                            width: '40px', height: '40px', border: 'none',
                            borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'transparent'
                        }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-4">
                                <Link className="nav-link text-light" aria-current="page" to={'/'}>Home</Link>
                            </li>

                            <li className="nav-item ms-4">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>

                            <li className="nav-item ms-4">
                                <Link className="nav-link text-light" to="/footer">Contacts</Link>
                            </li>

                           


                            <li className="nav-item ms-4">
                                <Link className="nav-link text-light" to="/prouducts">Prouducts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
