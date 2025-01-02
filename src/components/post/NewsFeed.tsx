// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
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
import { fetchUserNewsfeed } from '../../redux/slice/postsSlice';
import { formatCreatedTime } from '../../utils/FormatTime';
import { Avatar } from 'antd';


const NewsFeed: React.FC<{ userId: number }> = ({ userId }) => {
    // const [posts, setPosts] = useState<PostResponse[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    // const {} = useAppSelector((state: RootState) => state)

    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);

    const [showGroupCard, setShowGroupCard] = useState<boolean>(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {

    //             const response = await getPostsForNewsFeed(userId, 0);
    //             if (!response || !response.result || !Array.isArray(response.result.content)) {
    //                 throw new Error('Invalid response structure');
    //             }

    //             const transformedPosts: Post[] = response.result.content.map((item: PostResponse) => {



    //                 return {
    //                     id: item.id,
    //                     userId: item.userId,
    //                     userFullName: item.userFullName,
    //                     avatar: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
    //                     groupId: item.groupId,
    //                     groupName: item.groupName,
    //                     content: item.content,
    //                     privacy: item.privacy,
    //                     createdAt: item.createdAt,
    //                     updatedAt: item.updatedAt,
    //                     likeNum: item.likeNum,
    //                     commentNum: item.commentNum,
    //                     time: timeDifference,
    //                     isLiked: false,
    //                     isFavourited: false,
    //                     publicIds: item.publicIds,
    //                     urls: item.urls,
    //                     imageError: false
    //                 }
    //             });

    //             setPosts(transformedPosts);
    //             setLoading(false);
    //         } catch (err: any) {
    //             setError(err.message || 'Something went wrong');
    //             setLoading(false);
    //         }
    //     };

    //     fetchPosts();
    // }, [userId]);

    const dispatch = useAppDispatch();
    const { posts, isLoading, error } = useAppSelector((state: RootState) => state.posts);

    useEffect(() => {
        const res = dispatch(fetchUserNewsfeed({ userId, pageNum: 0 }));
        console.log("res >> ", res)
    }, [dispatch, userId]);


    if (isLoading) {
        return <div className='md:w-[600px] sm:w-full'><PostPlaceholder /><PostPlaceholder /></div>;
    }

    if (error) {
        return <></>
    }

    // const handleLikeBtn = (index: number) => {
    //     setPosts(prevPosts =>
    //         prevPosts.map((post, i) =>
    //             i === index ? { ...post, isLiked: !post.isLiked } : post
    //         )
    //     );
    // };

    // const handleFavouriteBtn = (index: number) => {
    //     setPosts(prevPosts =>
    //         prevPosts.map((post, i) => {
    //             return (i === index ? { ...post, isFavourited: !post.isFavourited } : post);
    //         })
    //     );
    // };

    // const handleImageError = (index: number) => {
    //     setPosts(prevPosts =>
    //         prevPosts.map((post, i) =>
    //             i === index ? { ...post, imageError: true } : post
    //         )
    //     );
    // };

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
            {posts.map((item: PostResponse, index: number) => (
                <div key={`post-key-${index}`} className="md:w-[600px] sm:w-full bg-white border shadow-md rounded-lg">
                    {/* Post header */}
                    <div className="flex relative justify-start items-center px-3 py-2 gap-2">
                        {item.groupId ? (
                            <div>
                                <Link to={`/groups/groupName/discussion`}>
                                    <img
                                        src="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg"
                                        className="border border-sky-600 rounded-lg h-12 w-12 mt-1 object-cover cursor-pointer hover:opacity-80"
                                        alt="error"
                                        // onError={() => handleImageError(index)}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </Link>
                                <img className="absolute bottom-2 left-8 w-8 h-8 rounded-full object-cover cursor-pointer border"
                                    src={item.avatarUrl} />
                                {showGroupCard && (
                                    <div className="absolute top-8 -left-20 z-10"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        <GroupJoinedCard groupId={item.id} imageUrl={item.avatarUrl} groupName={item.groupName} />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Avatar
                                    size={'large'}
                                    className='border-sky-500'
                                    src={item.avatarUrl ? item.avatarUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    alt="avatar"
                                />
                            </>
                        )}
                        {item.groupId ? (
                            <div className="ml-2">
                                <h4 className='font-bold text-lg hover:underline'>
                                    <Link to={`/groups/${item.groupId}/discussion`}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        {item.groupName}
                                    </Link>
                                </h4>
                                <div className="flex gap-1 justify-start items-center text-sm">
                                    <span className="font-semibold text-gray-500 hover:underline">
                                        <Link to={`/profile`}>
                                            {item.userFullName}
                                        </Link>
                                    </span>
                                    <GoDotFill className="text-[6px]" />
                                    <span className=" text-gray-500 font-semibold text-sm ">{formatCreatedTime(item.createdAt)} </span>
                                    <GoDotFill className="text-[6px]" />
                                    <span>{item.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm  align-center" /> : (item.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="ml-2">
                                <span className="text-base font-bold text-sky-800 cursor-pointer hover:underline decoration-sky-700">{item.userFullName}</span>
                                <div className="flex gap-2 justify-start items-center text-gray-500 ">
                                    <span className="font-semibold text-sm">{formatCreatedTime(item.createdAt)} </span>
                                    <span><GoDotFill className="text-[10px]" /></span>
                                    <span>{item.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (item.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                </div>
                            </div>
                        )}
                        <span className="ml-auto w-[36px] h-[36px] text-xl cursor-pointer p-2 hover:bg-sky-200 duration-300 transition rounded-full" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
                    </div>

                    {/* Post slider */}
                    {/* {item.imageError ? (
                        <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                        </div>
                    ) : (
                    )} */}
                    <ImageSlider urls={item.urls} />

                    {/* Post Content and things */}
                    <div className="flex flex-col p-3">
                        <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                            <div className="flex gap-1 font-bold text-2xl">
                                <button
                                    // onClick={() => handleLikeBtn(index)}
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
                                // onClick={() => handleFavouriteBtn(index)}
                                className={true ? "w-[34px] h-[34px] text-[blue-600] text-2xl rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] text-2xl rounded-full flex items-center justify-center"}
                            // this is favorite icon
                            >
                                {true ? <FaBookmark /> : <BsBookmark />}
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
                                : <span className='font-semibold text-gray-600'>Chưa có bình luận nào</span>}
                            <div className='flex flex-row gap-2 mt-2'>
                                <Avatar
                                    // size={''}
                                    // className='border-sky-500'
                                    src={item.avatarUrl ? item.avatarUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    alt="avatar"
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

export default NewsFeed;
