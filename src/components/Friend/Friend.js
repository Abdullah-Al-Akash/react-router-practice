import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
        const { id, name, email, address, phone } = props.friend;
        return (
                <div className="col">
                        <div className="card h-100">
                                <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{email}</p>
                                        <p>{address.city}</p>
                                        <p>{phone}</p>
                                        <Link to={`/friend/${id}`}>
                                                <button className="btn btn-success">Detail</button>
                                        </Link>
                                </div>
                        </div>
                </div >
        );
};

export default Friend;