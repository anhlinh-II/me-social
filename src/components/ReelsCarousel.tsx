import { BsBookmark, BsThreeDots } from 'react-icons/bs';
import { FaBookmark, FaHeart, FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { IoPlay } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { PiSpeakerSimpleHighFill, PiSpeakerSimpleSlashFill } from 'react-icons/pi';
import ShowMoreText from "react-show-more-text";
import React, { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomPrevArrow = (props: any) => {
     const { className, onClick } = props;
     return (
          <div
               className={className}
               style={{
                    width: "48px",
                    height: "48px",
                    display: "block",
                    background: "rgb(110, 110, 110)",
                    textAlign: "center",
                    borderRadius: "50%",
                    padding: "10px",
                    paddingTop: "15px",
                    left: "35px",
               }}
               onClick={onClick}
          >
               Prev
          </div>
     );
};

const CustomNextArrow = (props: any) => {
     const { className, onClick } = props;
     return (
          <div
               className={className}
               style={{
                    width: "48px",
                    height: "48px",
                    display: "block",
                    background: "rgb(110, 110, 110)",
                    textAlign: "center",
                    borderRadius: "50%",
                    padding: "10px",
                    paddingTop: "15px",
                    right: "35px",
               }}
               onClick={onClick}
          >
               Next
          </div>
     );
};

// interface IFakeReelsData {
//      username: string;
//      avatar: string;
//      likes: number;
//      description: string;
//      totalComments: number;
//      isLiked: boolean;
//      isFavourited: boolean;
//      video: string;
//      isFriend: boolean;
// }

interface ReelsCarouselProps {
     items: React.ReactNode[];
}

const ReelsCarousel: React.FC<ReelsCarouselProps> = ({ items }) => {
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
     const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
          // vertical: true,
          // verticalSwiping: true,
          // variableHeight: false,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         vertical: true, // Enable vertical for responsive views
                         verticalSwiping: true,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         vertical: true,
                         verticalSwiping: true,
                    },
               },
               {
                    breakpoint: 640,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         vertical: true,
                         verticalSwiping: true,
                    },
               },
          ],
     };

     return (
          <div className="container mx-auto multiCarousel bg-gray-400 w-fit h-[650px] ">
               <Slider {...settings} className='overflow-hidden'>
                    {items.map((item, index) => {
                         return <>{item} </>;
                    })}
               </Slider>
          </div>
     );
}
export default ReelsCarousel;

// {items.map((item: IFakeReelsData) => {
//      return (
//           <div className='relative rounded-xl border border-black'>
//                {/* main video */}
//                <div className="h-[650px]  cursor-pointer relative w-full bg-transparent overflow-hidden">
//                     <video
//                          autoPlay
//                          onClick={handlePlay}
//                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full"
//                          ref={videoRef}
//                     >
//                          <source src={item.video} type="video/mp4" />
//                          Your browser does not support the video tag.
//                     </video>
//                     {/* Play Icon, hidden when playing */}
//                     <span
//                          id="play-icon"
//                          className='text-2xl absolute top-[44%] right-[42%] p-3 rounded-full bg-black/50 text-white transition duration-300'
//                     >
//                          <IoPlay />
//                     </span>
//                     <div className='absolute bottom-0 right-0 pb-8 pt-4 px-4 hover:bg-black/20 bg-transparent transition duration-150 left-0 w-full'>
//                          <div className='text-white flex items-center mb-2'>
//                               <img
//                                    src={item.avatar}
//                                    className="rounded-[100%] text-base h-10 w-10 mr-2"
//                                    alt="error"
//                               />
//                               <span className='text-sm duration-700 transition hover:underline hover:underline-offset-2'>{item.username}</span>
//                               {item.isFriend ? "" : <LuDot className='text-xl' />}
//                               {item.isFriend ? "" : <button className='px-2 py-2 font-bold text-white/80 text-wrap border border-white/50 rounded-md text-xs'>Add friend</button>}
//                          </div>
//                          <div className='w-full border-red-900'>
//                               <ShowMoreText
//                                    lines={2}
//                                    more="more"
//                                    less="less"
//                                    className='w-full text-white/80'  // Change here to make it full width
//                                    anchorClass="text-slate-300 cursor-pointer font-bold hover:text-slate-100 transition-colors duration-300"
//                                    expanded={false}
//                                    truncatedEndingComponent={"..."}
//                               >
//                                    <p className='w-full'>{item.description}</p>
//                               </ShowMoreText>
//                          </div>
//                     </div>
//                </div>
//                {/* interact with video */}
//                <div className="absolute bottom-20 -right-12 flex flex-col gap-8 text-gray-600 text-xl">
//                     <span className='flex flex-col gap-1 cursor-pointer '><FaRegHeart className='hover:text-gray-400' /><span className='text-sm'>{item.likes}</span></span>
//                     <span className='flex flex-col gap-1 cursor-pointer '><FaRegComment className='hover:text-gray-400' /><span className='text-sm'>{item.totalComments}</span></span>
//                     <span className='cursor-pointer hover:text-gray-400'><FaRegPaperPlane /></span>
//                     {item.isFavourited ? <span className='cursor-pointer text'><FaBookmark /></span> : <span className='cursor-pointer hover:text-gray-400'><BsBookmark /></span>}
//                     <span className='cursor-pointer hover:text-gray-400'> <BsThreeDots /></span>
//                </div>
//                <div
//                     className='absolute top-2 right-2 text-md p-2 bg-gray-800/50 rounded-full text-slate-200 cursor-pointer'
//                     onClick={handleMuteVideo}
//                >
//                     {isMuted ? <PiSpeakerSimpleSlashFill /> : <PiSpeakerSimpleHighFill />}
//                </div>
//           </div>
//      );
// })}

