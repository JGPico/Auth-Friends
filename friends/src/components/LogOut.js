import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';

const LogOut = () => {

     const [ isLoggedOut, setIsLoggedOut ] = useState(false);

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedOut(true);
    }

    return (
        <div>
            { localStorage.getItem ? 
                 
            <button onClick={logout}>Log out</button>
                : 
            <span></span>    
            }
            
        </div>
    )
}

export default LogOut;