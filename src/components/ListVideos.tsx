import { useRef, useState } from 'react';
import ReelsCarousel from './ReelsCarousel';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaBookmark } from 'react-icons/fa6';
import { IoPlay } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { PiSpeakerSimpleSlashFill, PiSpeakerSimpleHighFill } from 'react-icons/pi';
import ShowMoreText from "react-show-more-text";

const ListVideos = () => {
     const [isMuted, setIsMuted] = useState(false);
     // Reference to the video element
     const videoRef = useRef<HTMLVideoElement | null>(null);
     // Reference to store play/pause state without re-rendering
     const isPlayRef = useRef<boolean>(true);

     // Play/Pause the video
     const handlePlay = () => {
          isPlayRef.current = !isPlayRef.current;
          if (isPlayRef.current) {
               videoRef.current?.pause();
          } else {
               videoRef.current?.play();
          }

          console.log(videoRef.current?.duration)

          // Manually trigger UI update for the play/pause icon
          document.getElementById('play-icon')?.classList.toggle('hidden', !isPlayRef.current);
     };

     const handleMuteVideo = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          setIsMuted((prev) => {
               if (videoRef) {
                    videoRef.current!.muted = !prev;
               }
               return !prev;
          });
     };

     interface IFakeReelsData {
          username: string;
          avatar: string;
          likes: number;
          description: string;
          totalComments: number;
          isLiked: boolean;
          isFavourited: boolean;
          video: string;
          isFriend: boolean;
     }
     const fakeReelsData: IFakeReelsData[] = [
          {
               username: "Ahn Linhh",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/451418121_1493503281258736_1067539081919969742_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=FLRvjd8ljSwQ7kNvgF2lgaM&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AzWBNGZrTZ6JzlLGz23NluW&oh=00_AYA_j8m04FT-WgZpTpMJx4PuUAdsjuksB85D_5yeYVS-3Q&oe=66F8B1E2",
               likes: 56,
               description: "video này là một video vớ vẩn mà tôi nhờ chat gpa bê về hộ, cái đụ má nó test mãi không được cái showmoretext này, cuối cùng lỗi là tại vị mình viết liền tù tì 1 chữ không có dấu cách",
               totalComments: 12,
               isLiked: true,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          },
          {
               username: "Khánh Linh",
               avatar: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/449159350_1997633627359685_3033974697510613913_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bxRqxaMid2wQ7kNvgHATpZV&_nc_ht=scontent.fhph2-1.fna&_nc_gid=AHEGGND76WGF-xDKG-J38eH&oh=00_AYA93jCpdrlbdmG2Rb17SPhdqG4gYE0mdrh595lfGFcw9w&oe=66F4BAE6",
               likes: 47,
               description: "Healing sau quãng thời gian chạy đua với deadline nhừ người hahahahahaha",
               totalComments: 12,
               isLiked: true,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: true
          },
          {
               username: "Hồng Phấn",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
               likes: 284,
               description: "ava i do se thich hon (my mom😔)!",
               totalComments: 53,
               isLiked: false,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          },
          {
               username: "Hồng Phấn",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
               likes: 284,
               description: "ava i do se thich hon (my mom😔)!",
               totalComments: 53,
               isLiked: false,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          },
          {
               username: "Hồng Phấn",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
               likes: 284,
               description: "ava i do se thich hon (my mom😔)!",
               totalComments: 53,
               isLiked: false,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          },
          {
               username: "Hồng Phấn",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
               likes: 284,
               description: "ava i do se thich hon (my mom😔)!",
               totalComments: 53,
               isLiked: false,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          },
          {
               username: "Hồng Phấn",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
               likes: 284,
               description: "ava i do se thich hon (my mom😔)!",
               totalComments: 53,
               isLiked: false,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          },
          {
               username: "Hồng Phấn",
               avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
               likes: 284,
               description: "ava i do se thich hon (my mom😔)!",
               totalComments: 53,
               isLiked: false,
               isFavourited: true,
               video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
               isFriend: false
          }
     ]

     const carouselReels = fakeReelsData.map((item, index) => {
          return (
               <div key={index} className='relative h-full w-[full] rounded-xl border border-black'>
                    {/* main video */}
                    <div className="h-[650px] cursor-pointer relative w-full bg-transparent overflow-hidden">
                         <video
                              autoPlay
                              onClick={handlePlay}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full"
                              ref={videoRef}
                         >
                              <source src={item.video} type="video/mp4" />
                              Your browser does not support the video tag.
                         </video>
                         {/* Play Icon, hidden when playing */}
                         <span
                              id="play-icon"
                              className='text-2xl absolute top-[44%] right-[42%] p-3 rounded-full bg-black/50 text-white transition duration-300'
                         >
                              <IoPlay />
                         </span>
                         <div className='absolute bottom-0 right-0 pb-8 pt-4 px-4 hover:bg-black/20 bg-transparent transition duration-150 left-0 w-full'>
                              <div className='text-white flex items-center mb-2'>
                                   <img
                                        src={item.avatar}
                                        className="rounded-[100%] text-base h-10 w-10 mr-2"
                                        alt="error"
                                   />
                                   <span className='text-sm duration-700 transition hover:underline hover:underline-offset-2'>{item.username}</span>
                                   {item.isFriend ? "" : <LuDot className='text-xl' />}
                                   {item.isFriend ? "" : <button className='px-2 py-2 font-bold text-white/80 text-wrap border border-white/50 rounded-md text-xs'>Add friend</button>}
                              </div>
                              <div className='w-full border-red-900'>
                                   <ShowMoreText
                                        lines={2}
                                        more="more"
                                        less="less"
                                        className='w-full text-white/80'  // Change here to make it full width
                                        anchorClass="text-slate-300 cursor-pointer font-bold hover:text-slate-100 transition-colors duration-300"
                                        expanded={false}
                                        truncatedEndingComponent={"..."}
                                   >
                                        <p className='w-full'>{item.description}</p>
                                   </ShowMoreText>
                              </div>
                         </div>
                    </div>
                    {/* interact with video */}
                    <div className="absolute bottom-20 -right-12 flex flex-col gap-8 text-gray-600 text-xl">
                         <span className='flex flex-col gap-1 cursor-pointer '><FaRegHeart className='hover:text-gray-400' /><span className='text-sm'>{item.likes}</span></span>
                         <span className='flex flex-col gap-1 cursor-pointer '><FaRegComment className='hover:text-gray-400' /><span className='text-sm'>{item.totalComments}</span></span>
                         <span className='cursor-pointer hover:text-gray-400'><FaRegPaperPlane /></span>
                         {item.isFavourited ? <span className='cursor-pointer text'><FaBookmark /></span> : <span className='cursor-pointer hover:text-gray-400'><BsBookmark /></span>}
                         <span className='cursor-pointer hover:text-gray-400'> <BsThreeDots /></span>
                    </div>
                    <div
                         className='absolute top-2 right-2 text-md p-2 bg-gray-800/50 rounded-full text-slate-200 cursor-pointer'
                         onClick={handleMuteVideo}
                    >
                         {isMuted ? <PiSpeakerSimpleSlashFill /> : <PiSpeakerSimpleHighFill />}
                    </div>
               </div>
          )
     })

     return (
          <div className=''>
               <ReelsCarousel items={carouselReels} />
          </div>

     );
};

export default ListVideos;
