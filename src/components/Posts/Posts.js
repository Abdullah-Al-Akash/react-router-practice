import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
        const [posts, setPosts] = useState([]);
        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json())
                        .then(data => setPosts(data))
        }, [])
        return (
                <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                        posts.map(post => <Post
                                                key={post.id}
                                                post={post}
                                        ></Post>)
                                }
                        </div>

                </div>
        );
};

export default Posts;