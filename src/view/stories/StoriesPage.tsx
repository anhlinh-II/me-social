import React, { useState } from 'react';
import { FaEarthAmericas } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { useNavigate, useLocation } from 'react-router-dom';

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
    const { stories, storyIndex } = location.state as LocationState;
    const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(storyIndex || 0);

    const handleNextStory = () => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else {
            navigate(-1); // Close the story view
        }
    };

    const handlePreviousStory = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        } else {
            navigate(-1); // Close the story view
        }
    };

    const handleClose = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleStorySelect = (index: number) => {
        setCurrentStoryIndex(index);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex z-50">
            {/* Sidebar */}
            <div className="w-1/4 p-4 overflow-y-auto bg-[#242526]">
                <button
                    className="absolute top-0 left-4 text-white text-4xl"
                    onClick={handleClose}
                >
                    &times;
                </button>
                <h2 className="text-white text-lg mt-6 mb-4">Stories</h2>
                <ul className="space-y-4">
                    {stories.map((story, index) => (
                        <li
                            key={story.id}
                            className={`cursor-pointer p-2 rounded-lg ${currentStoryIndex === index ? 'bg-[#505151]' : 'bg-[#242526] hover:bg-[#505151]'}`}
                            onClick={() => handleStorySelect(index)}
                        >
                            <div className="flex items-center space-x-2">
                                <img src={story.avt} alt={story.userName} className="w-10 h-10 rounded-full" />
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
            <div className="relative flex-1 flex justify-center items-center">
                <div className="absolute top-[4%] flex items-center space-x-2">
                    <img src={stories[currentStoryIndex]?.avt} alt={stories[currentStoryIndex]?.userName} className="w-12 h-12 rounded-full" />
                    <h5 className="text-white font-semibold">{stories[currentStoryIndex]?.userName}</h5>
                    <span className="flex justify-center items-center text-white align-center">20h <GoDotFill className="text-[10px]" /></span>
                    <span>< FaEarthAmericas className="text-white text-sm font-normal align-center" /></span>
                </div>

                <div className="relative max-w-screen-md w-full max-h-full flex justify-center">
                    <video className="w-[360px] h-auto max-h-[800px] object-cover"
                        src={stories[currentStoryIndex]?.background}
                        controls autoPlay />
                </div>
                {/* Navigation Controls */}
                <div className="absolute mt-0 bottom--1 left-0 right-0 flex justify-between px-80">
                    <button
                        onClick={handlePreviousStory}
                        className="text-white bg-gray-700 p-2 rounded-[100%] hover:bg-gray-600"
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
                        className="text-white bg-gray-700 p-2 rounded-[100%] hover:bg-gray-600"
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
