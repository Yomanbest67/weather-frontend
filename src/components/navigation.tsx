import React from 'react';
import '../styles/navigation.css';
import '../bootstrap/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom'; // If using React Router

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Weather Frontend</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        <Link className="nav-link" to="#">Features</Link>
                        <Link className="nav-link" to="#">Pricing</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
