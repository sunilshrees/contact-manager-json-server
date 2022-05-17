import React, { useRef } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

function ContactList({ contacts, getContactId, term, searchKeyword }) {
    const inputEl = useRef('');
    const deleteContactHandler = (id) => {
        getContactId(id);
    };

    const renderContactList = contacts.map((contact, index) => {
        return (
            <ContactCard
                contact={contact}
                key={index}
                clickHandler={deleteContactHandler}
            />
        );
    });
    const getSearchTerm = () => {
        searchKeyword(inputEl.current.value);
    };

    console.log(`${process.env.REACT_APP_API_KEY}`);

    return (
        <div className='main'>
            <div className='semiHeader'>
                <h2>Contact List </h2>
                <Link to='/add'>
                    <button className='ui button blue right'>
                        Add Contact
                    </button>
                </Link>
            </div>
            <div className='ui search'>
                <div className='ui icon input searchTab'>
                    <input
                        ref={inputEl}
                        type='text'
                        placeholder='Search Contacts'
                        className='prompt'
                        value={term}
                        onChange={getSearchTerm}
                        autoComplete='off'
                    />
                    <i className='search icon'></i>
                </div>
            </div>
            <div className='ui celled list'>
                {renderContactList.length > 0
                    ? renderContactList
                    : 'No contacts available'}
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
                        <button className='btn' onClick={yesHandler}>
                            Yes
                        </button>
                        <button className='btn' onClick={() => setModal(false)}>
                            No
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default ContactList;
