// src/components/PostList.tsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { FaEarthAmericas, FaLock, FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaBookmark } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ShowMoreText from "react-show-more-text";
import { Link } from 'react-router-dom';
import PostDetailModal from '../modal/Post.detail.modal';
import More from '../modal/More';
import { PostResponse } from '../../types/Post';
import GroupJoinedCard from '../groups/card/GroupJoinedCard';
import ImageSlider from './ImageSlider';
import PostPlaceholder from './PostPlaceholder';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { fetchUserNewsfeed, updatePostLike } from '../../redux/slice/postsSlice';
import { formatCreatedTime } from '../../utils/FormatTime';
import { Avatar, Spin } from 'antd';
import { createPostLike } from '../../services/LikeService';


const NewsFeed: React.FC<{ userId: number }> = ({ userId }) => {
    const [page, setPage] = useState(0);
    const [size] = useState(10);

    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [showGroupCard, setShowGroupCard] = useState<boolean>(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    const [openedPost, setOpenedPost] = useState<PostResponse>({
        id: 0,
        userId: 0,
        avatarUrl: '',
        userFullName: '',
        groupId: 0,
        groupName: '',
        groupAvatar: '',
        groupCreatedAt: '',
        content: '',
        urls: [],
        publicIds: [],
        privacy: '',
        createdAt: '',
        updatedAt: '',
        likeNum: 0,
        commentNum: 0,
        liked: false,
    });

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
        const container = containerRef.current // Replace with your actual container class
        console.log("container >> ", container)
        console.log("is loading >> ", isLoading)
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

    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
            setShowGroupCard(true);
        }, 500);
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setShowGroupCard(false);
    };

    const handleOnclickImage = (post: PostResponse) => {
        setShowDetailModal(true);
        setOpenedPost(post);
    }

    const handleLikeBtn = async (postId: number, liked: boolean) => {
        dispatch(updatePostLike({ userId, postId, isLiked: liked }))
    }

    return (
        <div ref={containerRef} id='post-list-container' className="w-full h-fit rounded flex flex-col gap-4 ">
            {userNewsfeedPost.map((post: PostResponse, index: number) => (
                <div key={`post-key-${index}`} className="md:w-[600px] sm:w-full bg-white border shadow-md rounded-lg">
                    {/* Post header */}
                    <div className="flex relative justify-start items-center px-3 py-2 gap-2">
                        {post.groupId ? (
                            <div>
                                <Link to={`/groups/${[post.groupId]}/discussion`}>
                                    <img
                                        src={post.groupAvatar}
                                        className="border border-sky-600 rounded-lg h-12 w-12 mt-1 object-cover cursor-pointer hover:opacity-80"
                                        alt="error"
                                        // onError={() => handleImageError(index)}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </Link>
                                <img className="absolute bottom-2 left-8 w-8 h-8 rounded-full object-cover cursor-pointer border"
                                    src={post.avatarUrl} />
                                {showGroupCard && (
                                    <div className="absolute top-8 -left-20 z-10"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        <GroupJoinedCard createdAt={post.createdAt} groupId={post.id} imageUrl={post.avatarUrl} groupName={post.groupName} />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Avatar
                                    size={'large'}
                                    className='border-sky-500'
                                    src={post.avatarUrl ? post.avatarUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    alt="avatar"
                                />
                            </>
                        )}
                        {post.groupId ? (
                            <div className="ml-2">
                                <h4 className='font-bold text-lg hover:underline'>
                                    <Link to={`/groups/${post.groupId}/discussion`}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        {post.groupName}
                                    </Link>
                                </h4>
                                <div className="flex gap-1 justify-start items-center text-sm">
                                    <span className="font-semibold text-gray-500 hover:underline">
                                        <Link to={`/profile`}>
                                            {post.userFullName}
                                        </Link>
                                    </span>
                                    <GoDotFill className="text-[6px]" />
                                    <span className=" text-gray-500 font-semibold text-sm ">{formatCreatedTime(post.createdAt)} </span>
                                    <GoDotFill className="text-[6px]" />
                                    <span>{post.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm  align-center" /> : (post.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="ml-2">
                                <span className="text-base font-bold text-sky-800 cursor-pointer hover:underline decoration-sky-700">{post.userFullName}</span>
                                <div className="flex gap-2 justify-start items-center text-gray-500">
                                    <span className="font-semibold text-sm">{formatCreatedTime(post.createdAt)} </span>
                                    <span><GoDotFill className="text-[10px]" /></span>
                                    <span>{post.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (post.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                </div>
                            </div>
                        )}
                        <span className="ml-auto w-[36px] h-[36px] text-xl cursor-pointer p-2 hover:bg-sky-200 duration-300 transition rounded-full" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
                    </div>

                    {/* Post slider */}
                    {error ? (
                        <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                        </div>
                    ) : (
                        <div onClick={() => handleOnclickImage(post)}>
                            <ImageSlider urls={post.urls} />
                        </div>
                    )}

                    {/* Post Content and things */}
                    <div className="flex flex-col p-3">
                        <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                            <div className="flex gap-1 font-bold text-2xl">
                                <button
                                    onClick={() => handleLikeBtn(post.id, post.liked)}
                                    className={post.liked ? "w-[34px] h-[34px] text-[red] rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] rounded-full flex items-center justify-center"}
                                >
                                    {post.liked ? <FaHeart /> : <FaRegHeart />}
                                </button>
                                <button className={`w-[34px] h-[34px] hover:text-gray-600 rounded-full flex items-center justify-center`}>
                                    <FaRegComment />
                                </button>
                                <button className={`w-[34px] h-[34px] hover:text-gray-600 rounded-full flex items-center justify-center pe-1`}>
                                    <FaRegPaperPlane />
                                </button>
                            </div>
                            <button
                                // onClick={() => handleFavouriteBtn(index)}
                                className={true ? "w-[34px] h-[34px] text-[blue-600] text-2xl rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] text-2xl rounded-full flex items-center justify-center"}
                            // this is favorite icon
                            >
                                {true ? <FaBookmark /> : <BsBookmark />}
                            </button>
                        </div>
                        <span className="font-medium text-sky-800">{post.likeNum} likes</span>
                        <div className="w-[100%] border-t-[1.5px] border-gray-300 mt-2">
                            <span className="font-bold text-sky-700">{post.userFullName}</span>
                            <ShowMoreText
                                lines={1}
                                more="more"
                                less="less"
                                className="text-gray-700 w-[100%] text-base leading-relaxed mb-2"
                                anchorClass="text-blue-500 cursor-pointer font-bold hover:text-blue-600 transition-colors duration-300"
                                expanded={false}
                                truncatedEndingComponent={"..."}
                            >
                                {post.content}
                            </ShowMoreText>
                            {post.commentNum > 0 ?
                                <span
                                    className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500"
                                    onClick={() => handleOnclickImage(post)}
                                >
                                    Xem {post.commentNum} bình luận
                                </span>
                                : <span className='font-semibold text-gray-600'>Chưa có bình luận nào</span>}
                            <div className='flex flex-row gap-2 mt-2'>
                                <Avatar
                                    // size={''}
                                    // className='border-sky-500'
                                    src={post.avatarUrl ? post.avatarUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    alt="avatar"
                                />
                                <input type="text" className="block bg-transparent outline-none mt-1" placeholder="Add a comment..." />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {isLoading ?? <Spin />}
            <More show={showMore} setShow={setShowMore} />

            <PostDetailModal
                post={openedPost}
                show={showDetailModal}
                setShow={setShowDetailModal}
            />
        </div>
    );
};

export default NewsFeed;
