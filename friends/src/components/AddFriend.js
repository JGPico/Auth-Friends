import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {

    const history = useHistory();

    const [newFriend, setNewFriend] = useState({
        id: 42,
        name: '',
        age: 42,
        email: ''
    });

    const handleChange = event => {
        setNewFriend({...newFriend, [event.target.name]: event.target.value});
    }

    const handleSubmit = () => {
        
        console.log("Add Friend was pushed");
        
        setNewFriend({...newFriend, id: Date.now()});
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then( response => {
            console.log("newFriend post ", response);
            setNewFriend({
                id: 42,
                name: '',
                age: 42,
                email: ''
            });
            history.push('/protected');
        })
        .catch( error => {
            console.log("newFriend error ", error);
        })
    }

    return (
        <div className='friend-form'>
            <h2>New Friend Form</h2>
            <form className='friend=form' onSubmit={handleSubmit}>
                <label htmlFor='name'/>
                <input
                name='name'
                id='name'
                type='text'
                placeholder='name'
                value={newFriend.name}
                onChange={handleChange}
                />

                <label htmlFor='age'/>
                <input
                name='age'
                id='age'
                type='text'
                placeholder='age'
                value={newFriend.age}
                onChange={handleChange}
                />

                <label htmlFor='email'/>
                <input
                name='email'
                id='email'
                type='text'
                placeholder='email'
                value={newFriend.email}
                onChange={handleChange}
                />

            <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;