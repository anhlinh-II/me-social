import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { Avatar } from '@mui/material';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { FaRegComment, FaRegFaceSmileBeam, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { FiBookmark } from 'react-icons/fi';
import Emoji from '../Emoji';
import More from './More';
import { PostResponse } from '../../types/Post';
import { DEFAULT_AVATAR } from '../../utils/Constant';
import ImageSlider from '../post/ImageSlider';
import { formatNumberWithCommas } from '../../utils/FormatNumber';
import { formatCreatedTime } from '../../utils/FormatTime';
import { CommentRequest, CommentResponse } from '../../types/Comment';
import { createComment, getAllChildrenComments, getTopCommentsByPost } from '../../services/CommentService';
import { useUser } from '../../utils/CustomHook';
import CommentOptionModal from './Comment.option.modal';
import { createCommentLike, deleteCommentLike } from '../../services/LikeService';
import _ from 'lodash';

interface ModalProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
     post: PostResponse;
}

const PostDetailModal: React.FC<ModalProps> = ({ show, setShow, post }) => {

     const user = useUser();

     const [openEmoji, setOpenEmoji] = useState<boolean>(false);
     const [showRepliesMap, setShowRepliesMap] = useState<{ [key: number]: boolean }>({});
     const [repliesMap, setRepliesMap] = useState<{ [key: number]: CommentResponse[] }>({});
     const [showMore, setShowMore] = useState<boolean>(false);
     const [comments, setComments] = useState<CommentResponse[]>([]);
     const [loading, setLoading] = useState<boolean>(false);
     const [comment, setComment] = useState<string>("");
     const [openCommentOption, setOpenCommentOption] = useState<boolean>(false);
     const [dataForThreeDot, setDataForThreeDot] = useState<{
          commentId: number,
          userId: number,
          content: string;
     }>({
          commentId: 0,
          userId: 0,
          content: ""
     });
     const [toggleDelete, setToggleDelete] = useState<boolean>(false);

     const wrapperRef = useRef(null);
     const replyRef = useRef<HTMLInputElement | null>(null);
     const [parentCommentId, setParentCommentId] = useState<number>(0);

     useOutsideAlerter(wrapperRef);

     function useOutsideAlerter(ref: any) {
          useEffect(() => {
               /**
                * Alert if clicked on outside of element
                */
               function handleClickOutside(event: any) {
                    if (ref.current && !ref.current.contains(event.target)) {
                         setOpenEmoji(false)
                    }
               }
               if (openEmoji) {
                    // Bind the event listener
                    document.addEventListener("mousedown", handleClickOutside);
                    return () => {
                         // Unbind the event listener on clean up
                         document.removeEventListener("mousedown", handleClickOutside);
                    };
               }

          }, [ref, openEmoji]);
     }

     const handleEmojiSelect = (emoji: any) => {
          setComment((prev) => prev + emoji.native); // Append emoji to the input value
     };

     useEffect(() => {
          if (show) {
               // Disable scrolling
               document.body.style.overflow = 'hidden';
               fetchComments()
          } else {
               // Enable scrolling
               document.body.style.overflow = '';
          }

          // Cleanup function to reset body style when component is unmounted or modal is closed
          return () => {
               document.body.style.overflow = '';
          };
     }, [show, toggleDelete]);

     if (!show) return null;

     const fetchComments = async () => {
          setLoading(true);
          try {
               const response = await getTopCommentsByPost(Number(user.id), post.id);
               console.log("res comment >> ", response);
               if (response && response.code === 1000 && response.result?.content) {
                    setComments(response.result?.content);
               }
          } catch (error) {
               console.error('Failed to fetch comments:', error);
          } finally {
               setLoading(false);
          }
     };

     const toggleShowReplies = (commentId: number) => {
          setShowRepliesMap((prev) => ({
               ...prev,
               [commentId]: !prev[commentId],
          }));
     };

     const handleSeeReplies = async (parentCommentId: number, isRepliesVisible: boolean) => {

          if (!isRepliesVisible) {
               const response = await getAllChildrenComments(Number(user.id), parentCommentId, 0, 10);

               setRepliesMap((prev) => ({
                    ...prev,
                    [parentCommentId]: response.result?.content || []
               }));
          }

          toggleShowReplies(parentCommentId);
     }

     const handleCreateComment = async () => {
          if (!comment.trim()) return; // Prevent empty comments

          try {
               const newCommentRequest: CommentRequest = {
                    postId: post.id,
                    content: comment.trim(),
                    userId: Number(user.id),
                    parentCommentId: parentCommentId !== 0 ? parentCommentId : undefined
               };

               const response = await createComment(newCommentRequest);
               if (response.code === 1000 && response.result) {
                    // Only update state if response.result is defined
                    setComment(""); // Clear the input
                    fetchComments();
               } else {
                    console.error("Failed to create comment:", response.message);
               }
          } catch (error) {
               console.error("Error creating comment:", error);
          }
     }

     const handleThreeDot = (commentId: number, userId: number, content: string) => {
          setOpenCommentOption(true)
          setDataForThreeDot({
               commentId,
               userId,
               content
          })
     }

     const handleLikeComment = async (commentId: number, isLiked: boolean) => {
          try {
               // Find the comment to update
               const updatedComments = [...comments];
               const commentIndex = updatedComments.findIndex((comment) => comment.id === commentId);

               if (commentIndex === -1) {
                    console.warn("Comment not found.");
                    return;
               }

               if (!isLiked) {
                    // Like the comment
                    const response = await createCommentLike(Number(user.id), commentId);
                    if (response && response.code === 1000) {
                         // Update the local state
                         updatedComments[commentIndex] = {
                              ...updatedComments[commentIndex],
                              liked: true,
                              likeNum: updatedComments[commentIndex].likeNum + 1,
                         };
                         setComments(updatedComments);
                    }
               } else {
                    // Unlike the comment
                    await deleteCommentLike(Number(user.id), commentId);
                    // Update the local state
                    updatedComments[commentIndex] = {
                         ...updatedComments[commentIndex],
                         liked: false,
                         likeNum: Math.max(updatedComments[commentIndex].likeNum - 1, 0),
                    };
                    setComments(updatedComments);
               }
          } catch (error) {
               console.error("Error handling comment like/unlike:", error);
          }
     };

     const handleRepliesLike = async (replyId: number, commentId: number, isLiked: boolean) => {
          try {
               // Get the current replies for the given commentId
               const replies = repliesMap[commentId] || [];
               const replyIndex = replies.findIndex((reply) => reply.id === replyId);

               if (replyIndex === -1) {
                    console.warn("Reply not found.");
                    return;
               }

               const updatedReplies = [...replies];
               const targetReply = updatedReplies[replyIndex];

               if (!isLiked) {
                    const response = await createCommentLike(Number(user.id), replyId);
                    if (response && response.code === 1000) {
                         updatedReplies[replyIndex] = {
                              ...targetReply,
                              liked: true,
                              likeNum: targetReply.likeNum + 1,
                         };
                    }
               } else {
                    // Unlike the reply
                    const response = await deleteCommentLike(Number(user.id), replyId);
                    if (response && response.data.code === 1000) {
                         updatedReplies[replyIndex] = {
                              ...targetReply,
                              liked: false,
                              likeNum: Math.max(targetReply.likeNum - 1, 0),
                         };
                    }
               }

               const updatedRepliesMap = _.cloneDeep(repliesMap);
               updatedRepliesMap[commentId] = updatedReplies;
               setRepliesMap(updatedRepliesMap);
          } catch (error) {
               console.error("Error handling reply like/unlike:", error);
          }
     };

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
               {/* Overlay */}
               <div className="fixed inset-0 bg-black/50 opacity-50"></div>
               <button
                    className="absolute top-6 right-6 text-slate-100 hover:text-gray-400"
                    onClick={() => setShow(false)}
               >
                    <IoClose size={35} />
               </button>
               {/* Modal Content */}
               <div className="flex absolute bg-white rounded-lg shadow-lg max-w-[80%] h-[95%]">
                    <div className='max-h-[100%] max-w-[700px] mr-auto bg-black flex items-center justify-center border-2 border-black'>
                         <ImageSlider urls={post.urls} />
                    </div>
                    {/* left */}
                    <div className='relative w-[480px] bg-stone-50 overflow-hidden'>
                         <div className='px-4 py-4 flex justify-between items-center border border-b-gray-300'>
                              <div className='flex gap-3 items-center'>
                                   <span className='border border-sky-600 rounded-full'>
                                        <Avatar
                                             sx={{ width: 40, height: 40 }}
                                             src={post.avatarUrl ? post.avatarUrl : DEFAULT_AVATAR}
                                             alt='avatar'
                                        />
                                   </span>
                                   <span className='font-semibold text-sm'>{post.userFullName}</span>
                              </div>
                              <span onClick={() => setShowMore(true)} className='cursor-pointer hover:text-gray-600'><BsThreeDots /></span>
                         </div>
                         <div className='p-4 overflow-y-auto no-scrollbar h-4/5'>
                              {/* owner post's caption */}
                              <div className='flex gap-3 items-start mb-4'>
                                   <span className='border h-fit w-fit rounded-full border-sky-600'>
                                        <Avatar
                                             sx={{ width: 40, height: 40 }}
                                             src={post.avatarUrl ? post.avatarUrl : DEFAULT_AVATAR}
                                             alt='avatar'
                                        />
                                   </span>
                                   <div className='flex flex-col gap-1.5'>
                                        <p className='text-sm'><span className='font-semibold'>{post.userFullName}</span> {post.content}</p>
                                        <span className='text-gray-400 text-xs font-semibold'>{formatCreatedTime(post.createdAt)}</span>
                                   </div>
                              </div>
                              {/* other people comments */}
                              {loading ? (
                                   <div className="space-y-4 animate-pulse">
                                        {/* Single Comment Skeleton */}
                                        <div className="flex space-x-4">
                                             {/* Profile Picture */}
                                             <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                             {/* Comment Content */}
                                             <div className="flex-1 space-y-2">
                                                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                                                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                                             </div>
                                        </div>
                                        {/* Add more skeleton items to simulate multiple comments */}
                                        <div className="flex space-x-4">
                                             <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                             <div className="flex-1 space-y-2">
                                                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                                                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                                             </div>
                                        </div>
                                   </div>

                              ) : (
                                   comments.map((comment) => {
                                        const isRepliesVisible = showRepliesMap[comment.id] || false;
                                        const repliesList = repliesMap[comment.id] || [];
                                        return (
                                             <div key={comment.id} className="flex gap-3 items-start mb-4">
                                                  <span className="border h-fit w-fit rounded-full border-sky-600">
                                                       <Avatar sx={{ width: 35, height: 35 }} src={comment.avatarUrl} alt="avatar" />
                                                  </span>
                                                  <div className="flex flex-col gap-1.5 w-full">
                                                       <p className="flex justify-between items-center text-sm">
                                                            <span className=""><span className='font-semibold'>{comment.username}</span> {comment.content}</span>
                                                            {
                                                                 comment.liked
                                                                      ? <span onClick={() => handleLikeComment(comment.id, comment.liked)} className='text-md cursor-pointer text-red-500'><IoMdHeart /></span>
                                                                      : <span onClick={() => handleLikeComment(comment.id, comment.liked)} className='text-md cursor-pointer'><IoMdHeartEmpty /></span>
                                                            }
                                                       </p>
                                                       <span className="text-gray-400 items-center flex gap-3 text-xs font-semibold">
                                                            <span>{formatCreatedTime(comment.createdAt)}</span>
                                                            {comment.likeNum >= 1 && <span>{comment.likeNum > 1 ? `${comment.likeNum} likes` : (comment.likeNum === 1 ? `${comment.likeNum} like` : null)}</span>}
                                                            <span onClick={() => {
                                                                 replyRef.current?.focus();
                                                                 setParentCommentId(comment.id)
                                                            }} className='cursor-pointer'>trả lời</span>
                                                            <span className='cursor-pointer' onClick={() => handleThreeDot(comment.id, comment.userId, comment.content)}><BsThreeDots /></span>
                                                       </span>
                                                       {
                                                            comment.responseNum > 0 &&
                                                            <div
                                                                 className='flex items-center gap-3 cursor-pointer'
                                                                 onClick={() => handleSeeReplies(comment.id, isRepliesVisible)}
                                                            >
                                                                 <div className='border w-8 h-0 border-gray-500'></div>
                                                                 <div className='text-xs cursor-pointer font-semibold text-gray-400'>
                                                                      {isRepliesVisible ? <>Ẩn phản hồi</> : <>Xem {comment.responseNum} phản hồi</>}
                                                                 </div>
                                                            </div>
                                                       }
                                                       {
                                                            (isRepliesVisible && repliesList.length > 0) ?
                                                                 repliesList.map((reply) => {
                                                                      return (
                                                                           <div className='flex justify-between items-start'>
                                                                                <div className='flex gap-3'>
                                                                                     <span className='border h-fit w-fit rounded-full border-sky-600'>
                                                                                          <Avatar
                                                                                               sx={{ width: 35, height: 35 }}
                                                                                               src={reply.avatarUrl ? reply.avatarUrl : DEFAULT_AVATAR}
                                                                                               alt='avatar'
                                                                                          />
                                                                                     </span>
                                                                                     <div className='flex flex-col gap-1.5'>
                                                                                          <p className='text-sm'>
                                                                                               <span className='font-semibold'>{reply.username}</span> <span className='text-sky-700'>@{reply.respondedToUser}</span> <span className=''>{reply.content}</span>
                                                                                          </p>
                                                                                          <div className='text-gray-400 text-xs font-semibold flex items-center gap-4 '>
                                                                                               <div className='cursor-text'>{formatCreatedTime(reply.createdAt)}</div>
                                                                                               {reply.likeNum >= 1 && <span>{reply.likeNum > 1 ? `${reply.likeNum} likes` : (reply.likeNum === 1 ? `${reply.likeNum} like` : null)}</span>}
                                                                                               <span className='cursor-pointer' onClick={
                                                                                                    () => {
                                                                                                         replyRef.current?.focus();
                                                                                                         setParentCommentId(reply.id)
                                                                                                    }
                                                                                               }>Trả lời</span>
                                                                                               <span onClick={() => handleThreeDot(reply.id, reply.userId, comment.content)} className='cursor-pointer'><BsThreeDots /></span>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>

                                                                                {
                                                                                     reply.liked
                                                                                          ? <span onClick={() => handleRepliesLike(reply.id, comment.id, reply.liked)} className='text-md cursor-pointer text-red-500'><IoMdHeart className='cursor-pointer' /></span>
                                                                                          : <span onClick={() => handleRepliesLike(reply.id, comment.id, reply.liked)} className='text-md cursor-pointer'><IoMdHeartEmpty className='hover:text-gray-700 cursor-pointer' /></span>
                                                                                }
                                                                           </div>
                                                                      )
                                                                 })
                                                                 : <></>
                                                       }
                                                  </div>

                                             </div>
                                        )
                                   })
                              )}
                         </div>
                         {/* interact with post */}
                         <div className='absolute bottom-0 right-0 left-0 h-1/4 bg-white'>
                              {/* top */}
                              <div className='p-4 border border-b-gray-400 flex justify-between items-start'>
                                   <div className='flex flex-col gap-4'>
                                        <div className='flex gap-4'>
                                             <span className='text-2xl cursor-pointer hover:text-gray-600'><FaRegHeart /></span>
                                             <span className='text-2xl cursor-pointer hover:text-gray-600'><FaRegComment /></span>
                                             <span className='text-2xl cursor-pointer hover:text-gray-600'><FaRegPaperPlane /></span>
                                        </div>
                                        <div className='flex flex-col text-sm'>
                                             <span className='font-semibold'>{formatNumberWithCommas(post.likeNum)} {post.likeNum > 1 ? "likes" : "like"}</span>
                                             <span className='text-gray-600 font-md'>{formatCreatedTime(post.createdAt)}</span>
                                        </div>
                                   </div>
                                   <span className='text-xl cursor-pointer hover:text-gray-600'><FiBookmark /></span>
                              </div>
                              {/* comment input */}
                              <div className='flex gap-4 justify-between items-start p-4'>
                                   <span
                                        className='text-2xl cursor-pointer relative'
                                        onClick={() => setOpenEmoji(!openEmoji)}
                                   >
                                        <FaRegFaceSmileBeam />
                                        <span ref={wrapperRef} className='absolute -top-[430px] '>
                                             <Emoji
                                                  onEmojiSelect={handleEmojiSelect}
                                                  openEmoji={openEmoji}
                                                  setOpenEmoji={setOpenEmoji}
                                             />
                                        </span>
                                   </span>
                                   <input
                                        ref={replyRef}
                                        className='w-full outline-none resize-none rounded-md'
                                        placeholder='Add a comment...'
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                   />
                                   <span
                                        onClick={() => handleCreateComment()}
                                        className='font-semibold text-sky-600 cursor-pointer'
                                   >Đăng</span>
                              </div>
                         </div>
                    </div>
               </div>
               <More show={showMore} setShow={setShowMore} />
               <CommentOptionModal setToggleDelete={setToggleDelete} data={dataForThreeDot} setData={setDataForThreeDot} show={openCommentOption} setShow={setOpenCommentOption} />
          </div>
     );
};

export default PostDetailModal;

