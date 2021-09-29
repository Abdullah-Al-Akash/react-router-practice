import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Post = (props) => {
        const { title, id } = props.post;
        const history = useHistory();

        const handlePost = () => {
                history.push(`/posts/${id}`)
        }
        return (
                <div className="col">
                        <div className="card">
                                <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <button onClick={handlePost} className="btn btn-warning">Details</button>
                                        <br />
                                        <br />
                                        <Link to={`/posts/${id}`}>Click Me Details</Link>
                                </div>
                        </div>
                </div>
        );
};

export default Post;