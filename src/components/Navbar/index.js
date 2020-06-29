import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {

const [search, setSearch] = useState(false);

const submitSearch =(e)=>{
    e.preventDefault();
    alert('Search Complete')
}

const openSearch=()=>{
    setSearch(true);
}

const searchClass = search ? 'searchInput active': 'searchInput'

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">AboutUs</NavLink></li>
                <li><NavLink to="/contact-us">ContactUs</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search.."/>
                <img onClick={openSearch} classname="searchIcon" src={require('../../assets/icons/search.png')} alt="" />

                </form>
            </div>

        </div>
    )
}


export default Navbar;