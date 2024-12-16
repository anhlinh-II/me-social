import React, { useRef, useState } from 'react';
import { FaEarthAmericas, FaRegHeart } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { IoPause, IoPlay } from 'react-icons/io5';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Story from './Story';
import { PiPlusLight, PiSpeakerSimpleHighFill, PiSpeakerSimpleSlashFill } from 'react-icons/pi';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

interface Story {
    id: number;
    background: string;
    avt: string;
    userName: string;
}

interface LocationState {
    stories: Story[];
    storyIndex: number;
}

const StoriesPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { stories, storyIndex } = location.state as LocationState || {};
    const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(storyIndex || 0);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handlePlay = () => {
        const videoElement = videoRefs.current[currentStoryIndex];
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
                setIsPlaying(true);
            } else {
                videoElement.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleMuteVideo = () => {
        const videoElement = videoRefs.current[currentStoryIndex];
        if (videoElement) {
            videoElement.muted = !videoElement.muted;
            setIsMuted(videoElement.muted);
        }
    };

    const handleNextStory = () => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                const nextVideoElement = videoRefs.current[nextIndex];
                if (nextVideoElement) {
                    nextVideoElement.play();
                }
                setIsPlaying(true);
                return nextIndex;
            });
        } else {
            navigate(-1);
        }
    };

    const handlePreviousStory = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
            setIsPlaying(true);
        } else {
            navigate(-1);
        }
    };

    const handleClose = () => {
        navigate(-1);
    };

    const handleStorySelect = (index: number) => {
        setCurrentStoryIndex(index);
    };

    const handleVideoTimeUpdate = () => {
        const videoElement = videoRefs.current[currentStoryIndex];
        if (videoElement) {
            const progress = (videoElement.currentTime / videoElement.duration) * 100;
            setProgress(progress);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex z-50 ">
            {/* Sidebar */}
            <div className="w-1/3 p-4 overflow-y-auto bg-[#242526]">
                <button onClick={handleClose} className="text-white text-2xl top-4 left-6 rounded-full p-2 bg-[#18191A] hover:bg-zinc-700">
                    <IoMdClose />
                </button>
                <h2 className="text-white text-2xl font-bold mt-6 mb-4">Tin</h2>
                <Link to={`/stories/create`}>
                    <div className='flex gap-2 mb-4 p-2 rounded-lg hover:bg-[#404141]'>
                        <div key="createReel" className="w-16 h-16 bg-gray-200 overflow-hidden cursor-pointer p-2 border rounded-full border-black relative group">
                            <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/camera.jpg')", backgroundPosition: "center bottom" }}></div>
                            <div className="relative h-full p-4 flex flex-col items-center justify-center z-10 transition-transform duration-300 transform group-hover:scale-105">
                                <div className='p-2 rounded-full border border-white'>
                                    <PiPlusLight className="text-2xl text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 justify-center">
                            <p className='text-white text-md'>Tạo tin</p>
                            <p className='text-gray-400 text-xs'>Bạn có thể chia sẻ ảnh hoặc video</p>
                        </div>
                    </div>
                </Link>
                <hr className='border-b border-[#404141] mb-4'></hr>
                <ul className="">
                    {stories.map((story, index) => (
                        <li
                            key={story.id}
                            className={`cursor-pointer p-4 rounded-lg ${currentStoryIndex === index ? 'bg-[#656565]' : 'bg-[#242526] hover:bg-[#505151]'}`}
                            onClick={() => handleStorySelect(index)}
                        >
                            <div className="flex items-center space-x-2 pe-20">
                                <img src={story.avt} alt={story.userName} className="w-10 h-10 rounded-full object-cover" />
                                <div className='flex flex-col'>
                                    <span className="text-white text-lg">{story.userName}</span>
                                    <p className='text-white text-xs'>20 giờ</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Story Content */}
            <div className="relative w-full h-full flex justify-center items-center border border-black rounded-xl">
                <div className="flex items-center justify-center w-[360px] h-[640px] p-2 rounded-lg cursor-pointer relative bg-[#18191A]">
                    <div className="absolute top-8 flex justify-between items-center z-20 w-[90%]">
                        <div className='flex gap-2  justify-self-start'>
                            <img src={stories[currentStoryIndex]?.avt} alt={stories[currentStoryIndex]?.userName} className="w-10 h-10 me-1 object-cover rounded-full" />
                            <div className='flex flex-col gap-2'>
                                <h5 className="text-white text-sm text-left font-semibold">{stories[currentStoryIndex]?.userName}</h5>
                                <span className="flex items-center text-xs text-white align-center">
                                    20h
                                    <GoDotFill className="text-[10px] mx-2" />
                                    < FaEarthAmericas className="text-white text-sm font-normal align-center" /></span>
                            </div>
                        </div>
                        <div className='flex gap-1 justify-self-end'>
                            {/* Play Icon */}
                            {!isPlaying && (
                                <span
                                    className='text-xl p-2 rounded-full text-white cursor-pointer hover:bg-[#505151]'
                                    onClick={handlePlay}
                                >
                                    <IoPlay />
                                </span>
                            )}

                            {/* Pause Icon */}
                            {isPlaying && (
                                <span
                                    className='text-xl p-2 rounded-full text-white cursor-pointer hover:bg-[#505151]'
                                    onClick={handlePlay}
                                >
                                    <IoPause />
                                </span>
                            )}

                            {/* Mute Icon */}
                            <div
                                className='text-white text-xl p-2 rounded-full cursor-pointer hover:bg-[#505151]'
                                onClick={handleMuteVideo}
                            >
                                {isMuted ? <PiSpeakerSimpleSlashFill /> : <PiSpeakerSimpleHighFill />}
                            </div>
                            <div className='text-white text-xl p-2 rounded-full cursor-pointer hover:bg-[#505151]'>
                                <BsThreeDots />
                            </div>
                        </div>

                    </div>

                    <video
                        ref={(el) => videoRefs.current[currentStoryIndex] = el}
                        autoPlay
                        onEnded={handleNextStory}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full z-10"
                        onClick={handlePlay}
                        src={stories[currentStoryIndex]?.background}
                        onTimeUpdate={handleVideoTimeUpdate}
                    >
                    </video>


                    {/* Video Progress Bar */}
                    <div className="absolute top-4 left-0 w-[90%] ms-[5%] rounded-lg h-1 bg-gray-600">
                        <div
                            className="h-full bg-white"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="absolute top-32 right-[-45px] flex flex-col items-center gap-5 text-white text-center">
                        <span className='cursor-pointer text-4xl'><FaRegHeart /></span>
                        <BsBookmark className=' text-3xl' />
                    </div>
                </div>

                {/* Video Navigation Buttons */}
                <div className="absolute mt-0 left-0 right-0 flex justify-between px-80">
                    <button
                        onClick={handlePreviousStory}
                        className="text-white bg-[#242526] p-2 rounded-[100%] hover:bg-[#505151] cursor-pointer"
                        disabled={currentStoryIndex === 0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNextStory}
                        className="text-white bg-[#242526] p-2 rounded-[100%] hover:bg-[#505151]"
                        disabled={currentStoryIndex === stories.length - 1}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoriesPage;
