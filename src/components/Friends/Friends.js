import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend'
const Friends = () => {
        const [friends, setFriends] = useState([]);
        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                        .then(res => res.json())
                        .then(data => setFriends(data))
        }, [])
        return (
                <div className="container">
                        <h2>I have total {friends.length} friends.</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                                {
                                        friends.map(friend => <Friend
                                                key={friend.id}
                                                friend={friend}
                                        >
                                        </Friend>)
                                }

                        </div>

                </div>
        );
};

export default Friends;