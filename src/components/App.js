import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import api from '../api/Contacts';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetails from './ContactDetails';
import './App.css';
import EditContact from './EditContact';

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    //     () => {
    //     const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    //     return data ? JSON.parse(data) : [];
    // }

    //retrieve contacts
    const retrieveContacts = async () => {
        const response = await api.get('/contacts');
        return response.data;
    };

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrieveContacts();
            if (allContacts) setContacts(allContacts);
        };
        getAllContacts();
    }, [contacts]);

    const addContactHandler = async (contact) => {
        const request = {
            id: uuid(),
            ...contact,
        };
        const response = await api.post('/contacts', request);
        setContacts([...contacts, response.data]);
    };
    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const { id, name, email } = response.data;
        setContacts(
            contacts.map((contact) => {
                return contact.id === id ? { ...response.data } : contact;
            })
        );
    };
    const searchHandler = (keyword) => {
        setSearchTerm(keyword);
        if (searchTerm !== '') {
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact)
                    .join(' ')
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResults(newContactList);
        } else {
            setSearchResults(contacts);
        }
    };
    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        // const newContactList = contacts.filter((contact) => {
        //     return contact.id !== id;
        // });
        // setContacts(newContactList);
    };

    useEffect(() => {
        // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    return (
        <div className='ui container'>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <ContactList
                                contacts={
                                    searchTerm.length < 1
                                        ? contacts
                                        : searchResults
                                }
                                getContactId={removeContactHandler}
                                term={searchTerm}
                                searchKeyword={searchHandler}
                            />
                        }
                        exact
                    />
                    <Route
                        path='/add'
                        element={
                            <AddContact addContactHandler={addContactHandler} />
                        }
                    />
                    <Route
                        path='/edit'
                        element={
                            <EditContact
                                updateContactHandler={updateContactHandler}
                            />
                        }
                    />
                    <Route
                        path='/contact/:id'
                        exact
                        element={<ContactDetails />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
