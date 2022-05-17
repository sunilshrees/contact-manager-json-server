import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function EditContact({ updateContactHandler }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = useState({ name: '', email: '' });

    useEffect(() => {
        const { id, name, email } = location.state.contact;
        setState({ id, name, email });
    }, []);

    const update = (e) => {
        e.preventDefault();
        if (state.name === '' || state.email === '') {
            alert('Invalid inputs');
            return;
        }
        updateContactHandler(state);
        setState({ name: '', email: '' });
        navigate('/');
    };
    const onChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <div className='ui main'>
            <h2>Edit Contact </h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={state.name}
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <div className='field'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={state.email}
                        onChange={onChange}
                        autoComplete='off'
                    />
                </div>
                <button type='submit' className='ui button blue'>
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditContact;
