import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <p onClick={()=>{navigate("/")}} className='header-title'>Weather App</p>
            <div className='link-container'>
                <p  onClick={()=>{navigate("/")}}  className='link-container-item active'>Home</p>
                <p className='link-container-item'>Download App</p>
                <p onClick={()=>{navigate("/about")}}  className='link-container-item'>About us</p>
            </div>
            <button className='sign-button'>Sign up</button>
        </div>
    );
}

export default Header;