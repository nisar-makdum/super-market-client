import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div >
            <nav className="d-flex navbar navbar-expand-lg">
                <div style={{ marginTop: '30px' }} className="container-fluid">
                    <h3 className="text-secondary fw-bolder">Super Market</h3>
                    <div className="d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/home">Home</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/orders">Orders</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold ">
                                <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/admin"> Admin</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="btn btn-secondary mt-1" to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;