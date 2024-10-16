import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { BsBookmark } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';
import More from '../modal/More';

interface IPost {
    username: string;
    avatar: string;
    groupName: string;
    postStatus: string;
    likes: number;
    description: string;
    totalComments: number;
    time: number;
    isLiked: boolean | undefined;
    isFavourited: boolean | undefined;
    image: string;
}

interface PostItemProps {
    post: IPost;
    index: number;
    handleLikeBtn: (index: number) => void;
    handleFavouriteBtn: (index: number) => void;
}

const GroupPostItem: React.FC<PostItemProps> = ({ post, index, handleLikeBtn, handleFavouriteBtn }) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="w-[100%] bg-white rounded-lg border-2 mb-4">
            <div className="flex justify-start items-center px-4 py-4 gap-2">
                <img
                    src={post.avatar}
                    className="rounded-[100%] h-10 w-10 mt-1"
                    alt="error"
                    onError={handleImageError}
                />
                <div className="ml-2">
                    <h4 className='font-bold text-black-500 hover:underline'>
                        <Link to={`/groups/groupName/discussion`}>
                            {post.groupName}
                        </Link>
                    </h4>
                    <div className="flex gap-2 justify-start items-center">
                        <span className="text-sm font-bold text-gray-500 hover:underline">
                            <Link to={`/profile`}>
                                {post.username}
                            </Link>
                        </span>
                        <span className="flex justify-center items-center text-gray-500 font-semibold align-center">{post.time}h <GoDotFill className="text-[10px]" /></span>
                        <span>{post.postStatus === "public" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (post.postStatus === "friends" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                    </div>
                </div>
                <span className="ml-auto cursor-pointer p-1 hover:bg-sky-200 duration-300 transition rounded" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
            </div>

            {imageError ? (
                <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                </div>
            ) : (
                <img
                    src={post.image}
                    className="w-[100%] h-auto"
                    alt="error"
                    onError={handleImageError}
                />
            )}

            <div className="flex flex-col p-3">
                <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                    <div className="flex gap-4 font-bold text-lg">
                        <div
                            onClick={() => handleLikeBtn(index)}
                            className={post.isLiked ? "" : "hover:text-gray-600"}
                        >
                            {post.isLiked ? <FaHeart /> : <FaRegHeart />}
                        </div>
                        <FaRegComment className="hover:text-gray-600" />
                        <FaRegPaperPlane className="hover:text-gray-600" />
                    </div>
                    <div
                        onClick={() => handleFavouriteBtn(index)}
                        className={post.isFavourited ? "" : "hover:text-gray-600"}
                    >
                        {post.isFavourited ? <FaBookmark /> : <BsBookmark />}
                    </div>
                </div>
                <span className="font-medium text-sky-800">{post.likes} likes</span>
                <div className="w-[100%] border-t-[1.5px] border-gray-300 mt-2">
                    <span className="font-bold text-sky-700">{post.username}</span>
                    <ShowMoreText
                        lines={1}
                        more="more"
                        less="less"
                        className="text-gray-700 w-[100%] text-base leading-relaxed"
                        anchorClass="text-blue-500 cursor-pointer font-bold hover:text-blue-600 transition-colors duration-300"
                        expanded={false}
                        truncatedEndingComponent={"..."}
                    >
                        {post.description}
                    </ShowMoreText>
                    <span className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500">view all 3 comments</span>
                    <div className='flex flex-row mt-2'>
                        <img src={post.avatar}
                            className="rounded-[100%] h-10 w-10 me-2"
                            alt="error"
                            onError={handleImageError}
                        />
                        <input type="text" className="block bg-transparent outline-none mt-1" placeholder="Add a comment..." />
                    </div>
                </div>
            </div>
            <More show={showMore} setShow={setShowMore} />
        </div>
    );
};



export default GroupPostItem;
