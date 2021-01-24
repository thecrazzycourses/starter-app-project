import React from 'react';
import {useGetPost} from "../../actions";
import {useRouter} from "next/router";

const Post = () => {
    const router = useRouter();
    const {data: post, error, loading} = useGetPost(router.query.id);

    return (
        <div>
            {
                loading &&
                <div>Loading...</div>
            }

            {
                error &&
                <div>{error.message}</div>
            }
            {
                post &&
                <>
                    <h1>Post ID: {post.id}</h1>
                    <p>Post Title: {post.title}</p>
                    <p>Post Body: {post.body}</p>
                    <p>Post UserID: {post.userId}</p>
                </>
            }
        </div>
    );
}

export default Post;
