import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
        const [friend, setFriend] = useState({})
        const { name, email, phone, company } = friend;
        const { friendID } = useParams();
        useEffect(() => {
                const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
                fetch(url)
                        .then(res => res.json())
                        .then(data => setFriend(data))
        }, [])
        return (
                <div>
                        <h1>I am Friend Details {friendID}</h1>
                        <p>Let me know!!!!</p>
                        <div className="card w-50 border border-3 border-dark mx-auto">
                                <h1>I am {name}</h1>
                                <p>Email: {email}</p>
                                <p>Phone: {phone}</p>
                                <p>Works at {company?.name}</p>
                        </div>
                </div>
        );
};

export default FriendDetails;