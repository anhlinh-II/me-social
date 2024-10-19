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


const TestNewsFeed: React.FC<{ userId: number }> = ({ userId }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5NDA5MTg1LCJpYXQiOjE3MjkzMjI3ODUsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.Ro0sBYAHG-Oz9zTWck6lFfza7Ms8cQcaQ4DFJ0U-lynF0m0NJDucFHdIg0Cg5J2jIxmmj4E0mCW49_ra5ApW2Q";
                // localStorage.getItem('token');
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
                        image: "https://bizweb.dktcdn.net/100/370/339/products/z4529778288710-9a538b8bcac451561af81cd240d963a1.jpg?v=1689758099500",
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
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

    return (
        <div className="w-full h-fit rounded flex flex-col gap-6">
            {posts.map((item: Post, index: number) => (
                <div key={`post-key-${index}`} className="w-[100%] bg-white border shadow-md rounded-lg">
                    <div className="flex justify-start items-center px-4 py-4 gap-2">
                        <img src={item.avatar}
                            className="border border-sky-600 rounded-[100%] h-10 w-10 cursor-pointer"
                            alt="error"
                        />
                        {item.groupId ? (
                            <div className="ml-2">
                                <h4 className='font-bold text-black-500 hover:underline'>
                                    <Link to={`/groups/groupName/discussion`}>
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
                        <span className="ml-auto cursor-pointer p-1 hover:bg-sky-200 duration-300 transition rounded" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
                    </div>
                    {item.imageError ? (
                        <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                        </div>
                    ) : (
                        <img
                            src={item.image}
                            className="w-[100%] rounded h-auto cursor-pointer"
                            alt="Post"
                            onError={() => handleImageError(index)}
                            onClick={() => setShowDetailModal(true)}
                        />
                    )}
                    <div className="flex flex-col p-3">
                        <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                            <div className="flex gap-4 font-bold text-lg">
                                <div
                                    onClick={() => handleLikeBtn(index)}
                                    className={item.isLiked ? "" : "hover:text-gray-600"}
                                >
                                    {item.isLiked ? <FaHeart /> : <FaRegHeart />}
                                </div>
                                <FaRegComment className="hover:text-gray-600" />
                                <FaRegPaperPlane className="hover:text-gray-600" />
                            </div>
                            <div
                                onClick={() => handleFavouriteBtn(index)}
                                className={item.isFavourited ? "" : "hover:text-gray-600"}
                            >
                                {item.isFavourited ? <FaBookmark /> : <BsBookmark />}
                            </div>
                        </div>
                        <span className="font-medium text-sky-800">{item.likeNum} likes</span>
                        <div className="w-[100%] border-t-[1.5px] border-gray-300 mt-2">
                            <span className="font-bold text-sky-700">{item.userFullName}</span>
                            <ShowMoreText
                                lines={1}
                                more="more"
                                less="less"
                                className="text-gray-700 w-[100%] text-base leading-relaxed"
                                anchorClass="text-blue-500 cursor-pointer font-bold hover:text-blue-600 transition-colors duration-300"
                                expanded={false}
                                truncatedEndingComponent={"..."}
                            >
                                {item.content}
                            </ShowMoreText>
                            <span
                                className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500"
                                onClick={() => setShowDetailModal(true)}
                            >
                                {item.commentNum} comments
                            </span>
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
