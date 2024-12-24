import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import pittapiu from '../../assets/pittapiu.png';
import { BsThreeDots } from 'react-icons/bs';
import { Avatar } from '@mui/material';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaRegComment, FaRegFaceSmileBeam, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { FiBookmark } from 'react-icons/fi';
import Emoji from '../Emoji';
import More from './More';

interface ModalProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDetailModal: React.FC<ModalProps> = ({ show, setShow }) => {

     const [openEmoji, setOpenEmoji] = useState<boolean>(false);
     const [showReplies, setShowReplies] = useState<boolean>(false);
     const [showMore, setShowMore] = useState<boolean>(false);

     const wrapperRef = useRef(null);

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

     useEffect(() => {
          if (show) {
               // Disable scrolling
               document.body.style.overflow = 'hidden';
          } else {
               // Enable scrolling
               document.body.style.overflow = '';
          }

          // Cleanup function to reset body style when component is unmounted or modal is closed
          return () => {
               document.body.style.overflow = '';
          };
     }, [show]);
     if (!show) return null;

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
                         <img
                              className='max-h-full max-w-full'
                              src={pittapiu}
                              alt="error"
                         />
                    </div>
                    {/* left */}
                    <div className='relative w-[480px] bg-stone-50 overflow-hidden'>
                         <div className='px-4 py-4 flex justify-between items-center border border-b-gray-300'>
                              <div className='flex gap-3 items-center'>
                                   <span className='border border-sky-600 rounded-full'>
                                        <Avatar
                                             sx={{ width: 40, height: 40 }}
                                             src={pittapiu}
                                             alt='avatar'
                                        />
                                   </span>
                                   <span className='font-semibold text-sm'>pittapiu</span>
                              </div>
                              <span onClick={() => setShowMore(true)} className='cursor-pointer hover:text-gray-600'><BsThreeDots /></span>
                         </div>
                         <div className='p-4 overflow-auto no-scrollbar h-4/5'>
                              {/* owner post's caption */}
                              <div className='flex gap-3 items-start mb-4'>
                                   <span className='border h-fit w-fit rounded-full border-sky-600'>
                                        <Avatar
                                             sx={{ width: 40, height: 40 }}
                                             src={pittapiu}
                                             alt='avatar'
                                        />
                                   </span>
                                   <div className='flex flex-col gap-1.5'>
                                        <p className='text-sm'><span className='font-semibold'>pittapiu</span> this is a dump photo of me 🐟</p>
                                        <span className='text-gray-400 text-xs font-semibold'>8w</span>
                                   </div>
                              </div>
                              {/* other people comments */}
                              <div className='flex justify-between items-start mb-4'>
                                   <div className='flex gap-3'>
                                        <span className='border h-fit w-fit rounded-full border-sky-600'>
                                             <Avatar
                                                  sx={{ width: 35, height: 35 }}
                                                  src={pittapiu}
                                                  alt='avatar'
                                             />
                                        </span>
                                        <div className='flex flex-col gap-1.5'>
                                             <p className='text-sm'><span className='font-semibold'>hermione</span> this is a dump photo of me 🐟. You know i am Hermione Grangers, a little cute witch in Hogwarts School</p>
                                             <div className='text-gray-400 text-xs font-semibold flex gap-4 '>
                                                  <div className='cursor-text'>8w</div>
                                                  <span className='cursor-pointer'>1 like</span>
                                                  <span className='cursor-pointer'>Reply</span>
                                             </div>
                                             {/* reply section */}
                                             <div
                                                  className='flex items-center gap-3 cursor-pointer'
                                                  onClick={() => setShowReplies(!showReplies)}
                                             >
                                                  <div className='border w-8 h-0 border-gray-500'></div>
                                                  <div className='text-xs cursor-pointer font-semibold text-gray-400'>
                                                       {showReplies ? <>Hide all comments</> : <>View replies (2)</>}
                                                  </div>
                                             </div>
                                             {
                                                  showReplies ?
                                                       <div className='flex justify-between items-start'>
                                                            <div className='flex gap-3'>
                                                                 <span className='border h-fit w-fit rounded-full border-sky-600'>
                                                                      <Avatar
                                                                           sx={{ width: 35, height: 35 }}
                                                                           src={pittapiu}
                                                                           alt='avatar'
                                                                      />
                                                                 </span>
                                                                 <div className='flex flex-col gap-1.5'>
                                                                      <p className='text-sm'><span className='font-semibold'>Khánh Linh</span> xinh qua di, huhuhuhu</p>
                                                                      <div className='text-gray-400 text-xs font-semibold flex gap-4 '>
                                                                           <div className='cursor-text'>8w</div>
                                                                           <span className='cursor-pointer'>1 like</span>
                                                                           <span className='cursor-pointer'>Reply</span>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <span className='text-md'><IoMdHeartEmpty className='hover:text-gray-700 cursor-pointer' /></span>
                                                       </div>: <></>
                                             }
                                        </div>
                                   </div>
                                   <span className='text-md'><IoMdHeartEmpty className='hover:text-gray-700 cursor-pointer' /></span>
                              </div>
                              <div className='flex justify-between items-start mb-4'>
                                   <div className='flex gap-3'>
                                        <span className='border h-fit w-fit rounded-full border-sky-600'>
                                             <Avatar
                                                  sx={{ width: 35, height: 35 }}
                                                  src={pittapiu}
                                                  alt='avatar'
                                             />
                                        </span>
                                        <div className='flex flex-col gap-1.5'>
                                             <p className='text-sm'><span className='font-semibold'>Khánh Linh</span> xinh qua di, huhuhuhu</p>
                                             <div className='text-gray-400 text-xs font-semibold flex gap-4 '>
                                                  <div className='cursor-text'>8w</div>
                                                  <span className='cursor-pointer'>1 like</span>
                                                  <span className='cursor-pointer'>Reply</span>
                                             </div>
                                        </div>
                                   </div>
                                   <span className='text-md'><IoMdHeartEmpty className='hover:text-gray-700 cursor-pointer' /></span>
                              </div>
                              <div className='flex justify-between items-start mb-4'>
                                   <div className='flex gap-3'>
                                        <span className='border h-fit w-fit rounded-full border-sky-600'>
                                             <Avatar
                                                  sx={{ width: 35, height: 35 }}
                                                  src={pittapiu}
                                                  alt='avatar'
                                             />
                                        </span>
                                        <div className='flex flex-col gap-1.5'>
                                             <p className='text-sm'><span className='font-semibold'>Ahn Linhh</span> this is really a good girl</p>
                                             <div className='text-gray-400 text-xs font-semibold flex gap-4 '>
                                                  <div className='cursor-text'>8w</div>
                                                  <span className='cursor-pointer'>1 like</span>
                                                  <span className='cursor-pointer'>Reply</span>
                                             </div>
                                        </div>
                                   </div>
                                   <span className='text-md'><IoMdHeartEmpty className='hover:text-gray-700 cursor-pointer' /></span>
                              </div>

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
                                             <span className='font-semibold'>465,253 likes</span>
                                             <span className='text-gray-600 font-md'>4 hours ago</span>
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
                                                  openEmoji={openEmoji}
                                                  setOpenEmoji={setOpenEmoji}
                                             />
                                        </span>
                                   </span>
                                   <textarea className='w-full outline-none resize-none rounded-md' rows={1} placeholder='Add a comment...' />
                                   <span className='font-semibold text-sky-600 cursor-pointer'>Post</span>
                              </div>
                         </div>
                    </div>
               </div>
               <More show={showMore} setShow={setShowMore}/>
          </div>
     );
};

export default PostDetailModal;

