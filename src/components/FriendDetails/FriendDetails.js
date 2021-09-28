import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
        const { friendID } = useParams();
        return (
                <div>
                        <h1>I am Friend Details {friendID}</h1>
                        <p>Let me know!!!!</p>
                </div>
        );
};

export default FriendDetails;