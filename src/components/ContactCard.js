import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

function ContactCard({ contact, clickHandler }) {
    // const [modal, setModal] = useState(false);

    // const yesHandler = (no) => {
    //     console.log(no);
    //     // setModal(false);
    //     // clickHandler(no);
    // };
    return (
        <>
            <div className='item'>
                <img src={user} alt='user' className='ui avatar image' />
                <div className='content'>
                    <Link to={`/contact/:${contact.id}`} state={{ contact }}>
                        <div className='header'>{contact.name}</div>
                        <div>{contact.email}</div>
                    </Link>
                </div>
                <i
                    className='trash alternate outline icon'
                    style={{ color: 'red', marginTop: '7px' }}
                    onClick={() => clickHandler(contact.id)}></i>
                <Link to={`/edit`} state={{ contact }}>
                    <i
                        className='edit alternate outline icon'
                        style={{
                            color: 'blue',
                            marginTop: '7px',
                            marginLeft: '10px',
                        }}></i>
                </Link>
            </div>
            {/* <div
                className={modal ? 'over' : null}
                onClick={() => setModal(false)}>
                <div className={modal ? 'modal active' : 'modal'}>
                    <div className='close' onClick={() => setModal(false)}>
                        X
                    </div>
                    <div className='h3'>
                        Do you want to delete this Contact?{' '}
                    </div>
                    <div className='controls'>
                        <button
                            className='btn'
                            onClick={() => {
                                yesHandler(contact.id);
                            }}>
                            Yes
                        </button>
                        <button className='btn' onClick={() => setModal(false)}>
                            No
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default ContactCard;
