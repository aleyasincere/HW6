import React from 'react';

const Post = (postInfo) => {

    console.log(postInfo)

    return (
        <div>
            <h2>{postInfo.title}</h2>
            <p>{postInfo.body}</p>
            <p>=====================
            </p>
        </div>
    );
};

export default Post;