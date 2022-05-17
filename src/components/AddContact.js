import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact({ addContactHandler }) {
    const navigate = useNavigate();
    const [state, setState] = useState({ name: '', email: '' });
    const onSubmit = (e) => {
        e.preventDefault();
        if (state.name === '' || state.email === '') {
            alert('Invalid inputs');
            return;
        }
        addContactHandler(state);
        setState({ name: '', email: '' });
        navigate('/');
    };
    const onChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <div className='ui main'>
            <h2>Add Contact </h2>
            <form className='ui form' onSubmit={onSubmit}>
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
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddContact;
