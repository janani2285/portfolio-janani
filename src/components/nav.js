import React from "react";

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand name-font">JANANI NAGARAJ AMUTHA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link" href="contact.html">Contact</a>
                <a className="nav-item nav-link" href="portfolio.html">Portfolio</a>
                <a className="nav-item nav-link active" href="index.html">About <span
                        className="sr-only">(current)</span></a>

            </div>
        </div>
    </nav>
    );
}

export default Nav;