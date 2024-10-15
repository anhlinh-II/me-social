// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { PostResponse } from '../services/Types/PostResponse';
import { getPostsForNewsFeed } from '../services/Posts/PostService';

const PostList: React.FC<{ userId: number }> = ({ userId }) => {
    const [posts, setPosts] = useState<PostResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5MDQ3MTEwLCJpYXQiOjE3Mjg5NjA3MTAsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.oFfaz79nR3cXOevMDZllVNtpuUY1pdh_pyNmR59NyM8U1KoIhIWYqsB1Ty9tYfp4xTKlwxkKK2pfOjqhTGw4eQ"; 
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
