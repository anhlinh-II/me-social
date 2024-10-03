import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import wideImage from '../../assets/image.png';
import { BsThreeDots } from 'react-icons/bs';
import { Avatar } from '@mui/material';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaRegComment, FaRegFaceSmileBeam, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { FiBookmark } from 'react-icons/fi';
import Emoji from '../Emoji';

interface ModalProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDetailModal: React.FC<ModalProps> = ({ show, setShow }) => {

     const [openEmoji, setOpenEmoji] = useState<boolean>(false);

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
                    <IoClose size={30} />
               </button>
               {/* Modal Content */}
               <div className="flex absolute bg-white rounded-lg shadow-lg max-w-[80%] h-[95%]">
                    <div className='max-h-[100%] max-w-[700px] mr-auto bg-black flex items-center justify-center border-2 border-black'>
                         <img
                              className='max-h-full max-w-full'
                              // src="https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/454373468_122139931490271357_53862221086868218_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEe6YjCJENMlXcACeDuYfexO9JOtIEqpo470k60gSqmjlflvYzjDdLgLXEhXEB5uCW5iR-bI-DcnL6Jz6ROcfLc&_nc_ohc=tSzju19ub2gQ7kNvgFq9TVx&_nc_ht=scontent.fhan8-1.fna&_nc_gid=AGJVwhkERc7kICd4aYrtXNk&oh=00_AYBDpKnObtCUFJ9Ew27b6RcLATsiqCTKLyIkwtq72y537g&oe=670176DF"
                              src={wideImage}
                              alt="error"
                         />
                    </div>
                    {/* left */}
                    <div className='relative w-[480px] bg-stone-50 overflow-hidden'>
                         <div className='px-4 py-4 flex justify-between items-center border border-b-gray-300'>
                              <div className='flex gap-3 items-center'>
                                   <span className='border border-sky-600 rounded-full'>
                                        <Avatar
                                             sx={{ width: 30, height: 30 }}
                                             src='https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/453749771_122139111296271357_91196455686795292_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_tssY1zt5j08WBzPEViPaYwPSUc95HE5jA9JRz3kcTrN9-8X3OuB0k5r6WopphjWL7bdm43z7N3snNWsiHoF3&_nc_ohc=wAzd2ZuP77cQ7kNvgGFAx6F&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AqT4mogTdxdk5i0Mnorg4m9&oh=00_AYAjPDR08Zil-ZtFdHAZWj3tnnLSzAXkrthgzsqQcj7Sug&oe=6701FDE1'
                                             alt='avatar'
                                        />
                                   </span>
                                   <span className='font-semibold text-sm'>pittapiu</span>
                              </div>
                              <BsThreeDots />
                         </div>
                         <div className='p-4 overflow-auto h-4/5'>
                              {/* owner post's caption */}
                              <div className='flex gap-3 items-start mb-4'>
                                   <span className='border h-fit w-fit rounded-full border-sky-600'>
                                        <Avatar
                                             sx={{ width: 30, height: 30 }}
                                             src='https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/453749771_122139111296271357_91196455686795292_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_tssY1zt5j08WBzPEViPaYwPSUc95HE5jA9JRz3kcTrN9-8X3OuB0k5r6WopphjWL7bdm43z7N3snNWsiHoF3&_nc_ohc=wAzd2ZuP77cQ7kNvgGFAx6F&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AqT4mogTdxdk5i0Mnorg4m9&oh=00_AYAjPDR08Zil-ZtFdHAZWj3tnnLSzAXkrthgzsqQcj7Sug&oe=6701FDE1'
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
                                                  sx={{ width: 30, height: 30 }}
                                                  src='data:image/jpeg;base64,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'
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
                                        </div>
                                   </div>
                                   <span className='text-md'><IoMdHeartEmpty className='hover:text-gray-700 cursor-pointer' /></span>
                              </div>
                              <div className='flex justify-between items-start mb-4'>
                                   <div className='flex gap-3'>
                                        <span className='border h-fit w-fit rounded-full border-sky-600'>
                                             <Avatar
                                                  sx={{ width: 30, height: 30 }}
                                                  src='https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/461669622_2070442183412162_7950140092646977056_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHp42LKZHE0a4VFlWpzAk630u1QxIl-jzLS7VDEiX6PMpdG66MrQZfAVQtV9P8COLYXa1PK7tB5CcO5WinKQSLJ&_nc_ohc=6jg8lX7VNLcQ7kNvgFbtthq&_nc_ht=scontent.fhan2-3.fna&oh=00_AYDdL_03ss4O0c2G3f5MT8DOJ3slfRZONoG2uyCQxDpkKA&oe=67020CE3'
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
                                                  sx={{ width: 30, height: 30 }}
                                                  src='https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/451418121_1493503281258736_1067539081919969742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Zd01_0VGpYQ7kNvgGeWDHD&_nc_ht=scontent.fhph1-1.fna&oh=00_AYBHEAthlGeQj62ElU3i3-wL8Pg2Yne60mzoift-ZQxEKw&oe=66F439A4'
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
                                             <span className='text-xl cursor-pointer'><FaRegHeart /></span>
                                             <span className='text-xl cursor-pointer'><FaRegComment /></span>
                                             <span className='text-xl cursor-pointer'><FaRegPaperPlane /></span>
                                        </div>
                                        <div className='flex flex-col text-sm'>
                                             <span className='font-semibold'>465,253 likes</span>
                                             <span className='text-gray-600 font-md'>4 hours ago</span>
                                        </div>
                                   </div>
                                   <span className='text-xl cursor-pointer'><FiBookmark /></span>
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
                                   <textarea className='w-full outline-none resize-none rounded-md' rows={4} placeholder='Add a comment...' />
                                   <span className='font-semibold text-sky-600 cursor-pointer'>Post</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PostDetailModal;

