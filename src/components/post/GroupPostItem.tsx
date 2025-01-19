import { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { BsBookmark } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';
import More from '../modal/More';
import { PostResponse } from '../../types/Post';
import GroupJoinedCard from '../groups/card/GroupJoinedCard';
import ImageSlider from './ImageSlider';
import PostDetailModal from '../modal/Post.detail.modal';
import { formatCreatedTime } from '../../utils/FormatTime';
import { Avatar } from 'antd';
import { useAppDispatch } from '../../redux/hook';
import { updatePostLike } from '../../redux/slice/postsSlice';
import { useUser } from '../../utils/CustomHook';

interface PostItemProps {
    post: PostResponse;
    index: number;
    error: string | null;
}


const GroupPostItem = (props: PostItemProps) => {
    const { post, error } = props;

    const dispatch = useAppDispatch();
    const user = useUser();

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

    const handleOnclickImage = (post: PostResponse) => {
        setShowDetailModal(true);
    }

    const handleLikeBtn = async (postId: number, liked: boolean) => {
        dispatch(updatePostLike({ userId: Number(user.id), postId, isLiked: liked }))
    }

    return (
        <div className="md:w-[600px] sm:w-full bg-white rounded-lg border-2 mb-4">
            <div className="flex relative justify-start items-center px-3 py-2 gap-2">
                <Link to={`/groups/${post.groupId}/discussion`}>
                    <img
                        src={post.groupAvatar}
                        className="border border-sky-600 rounded-lg h-12 w-12 mt-1 object-cover cursor-pointer hover:opacity-80"
                        alt="error"
                        onError={handleImageError}
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
                        <GroupJoinedCard groupId={post.groupId} createdAt={post.groupCreatedAt} imageUrl={post.groupAvatar} groupName={post.groupName} />
                    </div>
                )}
                <div className="ml-2">
                    <span className='font-bold text-md text-black-500 hover:underline'>
                        <Link to={`/groups/${post.groupId}/discussion`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            {post.groupName}
                        </Link>
                    </span>
                    <div className="flex gap-1 justify-start items-center">
                        <span className="text-sm font-semibold text-gray-500 hover:underline">
                            <Link to={`/profile`}>
                                {post.userFullName}
                            </Link>
                        </span>
                        <GoDotFill className="text-[6px]" />
                        <span className="flex justify-center items-center text-gray-500 text-sm font-semibold align-center">{formatCreatedTime(post.createdAt)} </span>
                        <GoDotFill className="text-[6px]" />
                        <span>{post.privacy === "PUBLIC" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (post.privacy === "FRIENDS" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                    </div>
                </div>
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
                        // this is where isFavorited is handled
                        className={true ? "w-[34px] h-[34px] text-[blue-600] text-2xl rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] text-2xl rounded-full flex items-center justify-center"}
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
                            className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500">
                            Xem {post.commentNum} bình luận
                        </span>
                        : <span className='font-semibold text-gray-600'>Chưa có bình luận nào</span>}
                    <div className='flex flex-row mt-2'>
                        <Avatar src={post.avatarUrl}
                            className="rounded-[100%] h-10 w-10 me-2"
                            alt="error"
                        // onError={handleImageError}
                        />
                        <input type="text" className="block bg-transparent outline-none mt-1" placeholder="Add a comment..." />
                    </div>
                </div>
            </div>
            <More show={showMore} setShow={setShowMore} />

            <PostDetailModal
                post={post}
                show={showDetailModal}
                setShow={setShowDetailModal}
            />
        </div>
    );
};



export default GroupPostItem;
