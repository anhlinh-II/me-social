// src/components/PostList.tsx
import React, { useEffect, useRef, useState } from 'react';
import { PostResponse } from '../../types/Post';
import PostPlaceholder from './PostPlaceholder';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { fetchUserNewsfeed } from '../../redux/slice/postsSlice';
import PostItem from './PostItem';


const NewsFeed: React.FC<{ userId: number }> = ({ userId }) => {
    const [page, setPage] = useState(0);
    const [size] = useState(10);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();
    const { userNewsfeedPost, isLoading, error, hasMore } = useAppSelector((state: RootState) => state.posts);

    useEffect(() => {
        if (hasMore) {
            console.log("Fetching page:", page);
            dispatch(fetchUserNewsfeed({ userId, page, size }));
        }
    }, [page, dispatch]);

    useEffect(() => {
        const container = containerRef.current
        const handleScroll = () => {
            if (
                container &&
                container.scrollHeight - container.scrollTop <= container.clientHeight + 100
            ) {
                console.log("set page here");
                setPage((prev) => prev + 1);
            }
        };
        console.log("code run after handle scroll")

        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore, isLoading, page]);


    if (isLoading && userNewsfeedPost.length === 0) {
        return (
            <div className="md:w-[600px] sm:w-full">
                <PostPlaceholder />
                <PostPlaceholder />
            </div>
        );
    }

    if (error) {
        return <div>Error loading posts</div>;
    }
    return (
        <div ref={containerRef} id='post-list-container' className="w-full h-fit rounded flex flex-col gap-4 ">
            {userNewsfeedPost.map((post: PostResponse, index: number) => (
                <PostItem index={index} post={post} error={error} isLoading={isLoading} />
            ))}
        </div>
    );
};

export default NewsFeed;
