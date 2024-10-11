// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { PostResponse } from '../services/fetchPosts/PostType';
import { getPostsForNewsFeed } from '../services/fetchPosts/PostService';

const PostList: React.FC<{ userId: number }> = ({ userId }) => {
    const [posts, setPosts] = useState<PostResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPostsForNewsFeed(userId);
                setPosts(data.result.content); // Giả sử dữ liệu trả về có structure này
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };

        fetchPosts(); // Gọi hàm để fetch bài đăng
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
