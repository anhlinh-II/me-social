import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { BsBookmark } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';
import More from '../modal/More';
import { Post } from '../../types/Post';
import GroupJoinedCard from '../groups/card/GroupJoinedCard';
import ImageSlider from './ImageSlider';
import PostDetailModal from '../modal/Post.detail.modal';

interface PostItemProps {
    post: Post;
    index: number;
    handleLikeBtn: (index: number) => void;
    handleFavouriteBtn: (index: number) => void;
}

const GroupPostItem: React.FC<PostItemProps> = ({ post, index, handleLikeBtn, handleFavouriteBtn }) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);
	const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [showGroupCard, setShowGroupCard] = useState<boolean>(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleImageError = () => {
        setImageError(true);
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
        <div className="md:w-[600px] sm:w-full bg-white rounded-lg border-2 mb-4">
            <div className="flex relative justify-start items-center px-3 py-2 gap-2">
                <Link to={`/groups/groupName/discussion`}>
                    <img
                        src="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg"
                        className="border border-sky-600 rounded-lg h-12 w-12 mt-1 object-cover cursor-pointer hover:opacity-80"
                        alt="error"
                        onError={handleImageError}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </Link>
                <img className="absolute bottom-2 left-8 w-8 h-8 rounded-full object-cover cursor-pointer border"
                    src={post.avatar} />
                {showGroupCard && (
                    <div className="absolute top-8 -left-20 z-10"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <GroupJoinedCard imageUrl="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg" groupName={post.groupName} />
                    </div>
                )}
                <div className="ml-2">
                    <span className='font-bold font-serif text-md text-black-500 hover:underline'>
                        <Link to={`/groups/groupName/discussion`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            {post.groupName}
                        </Link>
                    </span>
                    <div className="flex gap-2 justify-start items-center">
                        <span className="text-sm font-bold text-gray-500 hover:underline">
                            <Link to={`/profile`}>
                                {post.userFullName}
                            </Link>
                        </span>
                        <span className="flex justify-center items-center text-gray-500 font-semibold align-center">{post.time}h <GoDotFill className="text-[10px]" /></span>
                        <span>{post.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (post.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                    </div>
                </div>
                <div className='ml-auto satisfy-regular text-xl decoration-sky-600'>Me Social</div>
                <span className="ml-auto w-[36px] h-[36px] text-xl cursor-pointer p-2 hover:bg-sky-200 duration-300 transition rounded-full" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
            </div>

            {/* Post slider */}
            {post.imageError ? (
                <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                </div>
            ) : (
                <ImageSlider urls={post.urls} />
            )}

            <div className="flex flex-col p-3">
                <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                    <div className="flex gap-1 font-bold text-2xl">
                        <button
                            onClick={() => handleLikeBtn(index)}
                            className={post.isLiked ? "w-[34px] h-[34px] text-[red] rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] rounded-full flex items-center justify-center"}
                        >
                            {post.isLiked ? <FaHeart /> : <FaRegHeart />}
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
                        className={post.isFavourited ? "w-[34px] h-[34px] text-[blue-600] text-2xl rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] text-2xl rounded-full flex items-center justify-center"}
                    >
                        {post.isFavourited ? <FaBookmark /> : <BsBookmark />}
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
                            className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500">
                            Xem {post.commentNum} bình luận
                        </span>
                        : <span className='font-semibold text-gray-600'>Chưa có bình luận nào</span>}
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
            <div className="relative">
				<PostDetailModal
					show={showDetailModal}
					setShow={setShowDetailModal}
				/>
			</div>
        </div>
    );
};



export default GroupPostItem;
