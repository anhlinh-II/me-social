// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { getPostsForNewsFeed } from '../../services/Entities/PostService';
import { BsBookmark } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { FaEarthAmericas, FaLock, FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaBookmark } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ShowMoreText from "react-show-more-text";
import { Link } from 'react-router-dom';
import PostDetailModal from '../modal/Post.detail.modal';
import More from '../modal/More';
import { Post, PostResponse } from '../../services/Types/Post';
import GroupJoinedCard from '../groups/GroupJoinedCard';
import ImageSlider from './ImageSlider';


const TestNewsFeed: React.FC<{ userId: number }> = ({ userId }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);

    const [showGroupCard, setShowGroupCard] = useState<boolean>(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                if (!token) {
                    throw new Error('No token found');
                }

                const data = await getPostsForNewsFeed(userId, 0, token);
                const transformedPosts: Post[] = data.result.content.map((item: PostResponse) => {

                    const createdAtDate = new Date(item.createdAt);
                    const now = new Date();
                    const timeDifference = Math.floor((now.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60));

                    return {
                        id: item.id,
                        userId: item.userId,
                        userFullName: item.userFullName,
                        avatar: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
                        groupId: item.groupId,
                        groupName: item.groupName,
                        content: item.content,
                        privacy: item.privacy,
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                        likeNum: item.likeNum,
                        commentNum: item.commentNum,
                        time: timeDifference,
                        isLiked: false,
                        isFavourited: false,
                        urls: item.urls,
                        imageError: false
                    }
                });

                setPosts(transformedPosts);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };

        fetchPosts();
    }, [userId]);


    if (loading) {
        return <></>;
    }

    if (error) {
        return <></>;
    }

    const handleLikeBtn = (index: number) => {
        setPosts(prevPosts =>
            prevPosts.map((post, i) =>
                i === index ? { ...post, isLiked: !post.isLiked } : post
            )
        );
    };

    const handleFavouriteBtn = (index: number) => {
        setPosts(prevPosts =>
            prevPosts.map((post, i) => {
                return (i === index ? { ...post, isFavourited: !post.isFavourited } : post);
            })
        );
    };

    const handleImageError = (index: number) => {
        setPosts(prevPosts =>
            prevPosts.map((post, i) =>
                i === index ? { ...post, imageError: true } : post
            )
        );
    };

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

    return (
        <div className="w-full h-fit rounded flex flex-col gap-4">
            {posts.map((item: Post, index: number) => (
                <div key={`post-key-${index}`} className="w-[100%] bg-white border shadow-md rounded-lg">
                    {/* Post header */}
                    <div className="flex relative justify-start items-center px-3 py-2 gap-2">
                        {item.groupId ? (
                            <div>
                                <Link to={`/groups/groupName/discussion`}>
                                    <img
                                        src="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg"
                                        className="border border-sky-600 rounded-lg h-12 w-12 mt-1 object-cover cursor-pointer hover:opacity-80"
                                        alt="error"
                                        onError={() => handleImageError(index)}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </Link>
                                <img className="absolute bottom-2 left-8 w-8 h-8 rounded-full object-cover cursor-pointer border"
                                    src={item.avatar} />
                                {showGroupCard && (
                                    <div className="absolute top-8 -left-20 z-10"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                            <GroupJoinedCard imageUrl="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg" groupName={item.groupName} />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <img src={item.avatar}
                                    className="border border-sky-600 rounded-[100%] h-12 w-12 object-cover cursor-pointer"
                                    alt="error"
                                />
                            </>
                        )}
                        {item.groupId ? (
                            <div className="ml-2">
                                <h4 className='font-bold font-serif text-lg text-black-500 hover:underline'>
                                    <Link to={`/groups/groupName/discussion`}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                            {item.groupName}
                                    </Link>
                                </h4>
                                <div className="flex gap-2 justify-start items-center">
                                    <span className="text-sm font-bold text-gray-500 hover:underline">
                                        <Link to={`/profile`}>
                                            {item.userFullName}
                                        </Link>
                                    </span>
                                    <span className="flex justify-center items-center text-gray-500 font-semibold align-center">{item.time}h <GoDotFill className="text-[10px]" /></span>
                                    <span>{item.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (item.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="ml-2">
                                <span className="text-base font-bold text-sky-800 cursor-pointer hover:underline decoration-sky-700">{item.userFullName}</span>
                                <div className="flex gap-2 justify-start items-center">
                                    <span className="flex justify-center items-center text-gray-500 font-semibold align-center">{item.time}h <GoDotFill className="text-[10px]" /></span>
                                    <span>{item.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (item.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                </div>
                            </div>
                        )}
                        <div className='ml-auto satisfy-regular text-xl decoration-sky-600'>Me Social</div>
                        <span className="ml-auto w-[36px] h-[36px] text-xl cursor-pointer p-2 hover:bg-sky-200 duration-300 transition rounded-full" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
                    </div>

                    {/* Post slider */}
                    {item.imageError ? (
                        <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                        </div>
                    ) : (
                        <ImageSlider urls={item.urls}/>
                    )}

                    {/* Post Content and things */}
                    <div className="flex flex-col p-3">
                        <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                            <div className="flex gap-1 font-bold text-2xl">
                                <button
                                    onClick={() => handleLikeBtn(index)}
                                    className={item.isLiked ? "w-[34px] h-[34px] text-[red] rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] rounded-full flex items-center justify-center"}
                                >
                                    {item.isLiked ? <FaHeart /> : <FaRegHeart />}
                                </button>
                                <button className={`w-[34px] h-[34px] hover:text-gray-600 rounded-full flex items-center justify-center`}>
                                    <FaRegComment />
                                </button>
                                <button className={`w-[34px] h-[34px] hover:text-gray-600 rounded-full flex items-center justify-center pe-1`}>
                                    <FaRegPaperPlane />
                                </button>
                            </div>
                            <button
                                onClick={() => handleFavouriteBtn(index)}
                                className={item.isFavourited ? "w-[34px] h-[34px] text-[blue-600] text-2xl rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] text-2xl rounded-full flex items-center justify-center"}
                            >
                                {item.isFavourited ? <FaBookmark /> : <BsBookmark />}
                            </button>
                        </div>
                        <span className="font-medium text-sky-800">{item.likeNum} likes</span>
                        <div className="w-[100%] border-t-[1.5px] border-gray-300 mt-2">
                            <span className="font-bold text-sky-700">{item.userFullName}</span>
                            <ShowMoreText
                                lines={1}
                                more="more"
                                less="less"
                                className="text-gray-700 w-[100%] text-base leading-relaxed mb-2"
                                anchorClass="text-blue-500 cursor-pointer font-bold hover:text-blue-600 transition-colors duration-300"
                                expanded={false}
                                truncatedEndingComponent={"..."}
                            >
                                {item.content}
                            </ShowMoreText>
                            {item.commentNum > 0 ?
                                <span
                                    className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500"
                                    onClick={() => setShowDetailModal(true)}
                                >
                                    Xem {item.commentNum} bình luận
                                </span>
                            :   <span className='font-semibold text-gray-600'>Chưa có bình luận nào</span>}
                            <div className='flex flex-row mt-2'>
                                <img src={item.avatar}
                                    className="rounded-[100%] h-10 w-10 me-2"
                                    alt="error"
                                />
                                <input type="text" className="block bg-transparent outline-none mt-1" placeholder="Add a comment..." />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <More show={showMore} setShow={setShowMore} />
            <div className="relative">
                <PostDetailModal
                    show={showDetailModal}
                    setShow={setShowDetailModal}
                />
            </div>
        </div>
    );
};

export default TestNewsFeed;
