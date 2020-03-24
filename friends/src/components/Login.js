import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Login was pushed");
        axiosWithAuth()
        .post('/api/login', credentials)
        .then( response => {
            console.log("Post response ", response);
            localStorage.setItem('token', JSON.stringify(response.data.payload));
            props.history.push('/protected');
        })
        .catch(error => {
            console.log("Post error ", error);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'/>
                <input
                name='username'
                id='username'
                type='text'
                placeholder='username'
                value={credentials.username}
                onChange={handleChange}
                />

                <label htmlFor='password'/>
                <input
                name='password'
                id='password'
                type='text'
                placeholder='password'
                value={credentials.password}
                onChange={handleChange}
                />

            <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Login;