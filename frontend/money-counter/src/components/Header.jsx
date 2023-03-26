import React from "react";


const Header = () => {
    return (
        <div className="navbar">
            <h1 className="navbar-list brand">Brand</h1>
            <a className="navbar-list" href="">all entries</a>
            <a className="navbar-list" href="">today entries</a>
            <a className="navbar-list" href="">finished entries</a>
        </div>
    );
}


export default Header;