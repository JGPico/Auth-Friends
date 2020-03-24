import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {

    const [ friends, setFriends ] = useState();

    useEffect(() => {
        const getData = () => {
            axiosWithAuth()
            .get('api/friends')
            .then(response => {
                console.log("Get response ", response);
                setFriends(response.data);
            })
            .catch(error => {
                console.log("Get error ", error);
            })
        }
        getData();
    },[])

    return(
        <div>
            <h1>List of Friends</h1>
            {friends ? friends.map( element => (
                <div key={element.id}>
                    <h2>{element.name}</h2>
                    <p>age {element.age}</p>
                    <p>{element.email}</p>
                </div>
            )) : <h2>Loading...</h2>}
        </div>
    )
}

export default FriendsList;