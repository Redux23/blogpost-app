import React from 'react';
import './style.css';

function Navbar() {


const submitSearch =(e)=>{
    e.preventDefault();
    alert('Search Complete')
}

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">AboutUs</a></li>
                <li><a href="#">ContactUs</a></li>
                <li><a href="#">Posts</a></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className="searchInput" placeholder="Search.."/>
                <img src={require('../../assets/icons/search.png')} alt="" />

                </form>
            </div>

        </div>
    )
}


export default Navbar;