// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { PostResponse } from '../services/Types/PostType';
import { getPostsForNewsFeed } from '../services/Posts/PostService';

const PostList: React.FC<{ userId: number }> = ({ userId }) => {
    const [posts, setPosts] = useState<PostResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI4OTUzODE2LCJpYXQiOjE3Mjg4Njc0MTYsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.LbK4ToGcCjnTrLmZQr4Q5NTBgPfyePn59YhAoAGVyAJsyYBUX48hx4fHkjuwsp7f6aD5zWTwVSAX8NOTX1JsAA"; 
                // localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
    
                const data = await getPostsForNewsFeed(userId, 0, token);
                setPosts(data.result.content);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };
    
        fetchPosts();
    }, [userId]);
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="post-list">
            {posts.map((post: PostResponse) => (
                <div key={post.id} className="post border border-gray-200 p-4 mb-4 rounded">
                    <h2 className="font-bold">Post ID: {post.id}</h2>
                    <p>{post.content}</p>
                    <p>Privacy: {post.privacy}</p>
                    <p>Likes: {post.likeNum}</p>
                    <p>Comments: {post.commentNum}</p>
                    <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
                    <p>Updated At: {new Date(post.updatedAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
