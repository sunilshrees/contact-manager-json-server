import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import user from '../images/user.png';
import './App.css';

function ContactDetails() {
    const location = useLocation();
    // console.log(location);
    const { name, email } = location.state.contact;
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt='user' />
                </div>
                <div className='content center'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
            <div className='centerko'>
                <Link to='/'>
                    <button className='ui button blue center'>
                        Back to Contact lists
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetails;
