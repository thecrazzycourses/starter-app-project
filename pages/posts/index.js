import React from 'react';
import Link from 'next/link';
import {useGetPosts} from "../../actions";

const Posts = () => {

    const {data, error, loading} = useGetPosts();

    function renderPosts(posts) {
        return (posts.map(post => (
            <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                    <a>{post.title}</a>
                </Link>

            </li>
        )))
    }

    return (
        <div>
            <h1>Here are the Posts:</h1>

            {
                loading &&
                <div>Loading</div>

            }

            {
                data &&
                <ul>
                    {renderPosts(data)}
                </ul>
            }

            {
                error &&
                <div>{error.message}</div>
            }
        </div>
    );
}

export default Posts;
