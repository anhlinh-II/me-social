import React, { useState } from 'react';
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
            <div className="w-1/4 p-4 overflow-y-auto bg-gray-900">
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
                            className={`cursor-pointer p-2 rounded-lg ${currentStoryIndex === index ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                            onClick={() => handleStorySelect(index)}
                        >
                            <div className="flex items-center space-x-2">
                                <img src={story.avt} alt={story.userName} className="w-10 h-10 rounded-full" />
                                <span className="text-white">{story.userName}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Story Content */}
            <div className="relative flex-1 flex justify-center items-center">
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <img src={stories[currentStoryIndex]?.avt} alt={stories[currentStoryIndex]?.userName} className="w-12 h-12 rounded-full" />
                    <h5 className="text-white">{stories[currentStoryIndex]?.userName}</h5>
                </div>

                <div className="relative max-w-screen-md w-full max-h-full">
                    <video className="w-[800px] h-[450px] object-cover"
                        src={stories[currentStoryIndex]?.background}
                        controls autoPlay />

                    {/* Navigation Controls */}
                    <div className="absolute mt-5 bottom--1 left-0 right-0 flex justify-between px-80">
                        <button
                            onClick={handlePreviousStory}
                            className="text-white bg-gray-700 p-2 rounded-lg hover:bg-gray-600"
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
                            className="text-white bg-gray-700 p-2 rounded-lg hover:bg-gray-600"
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
        </div>
    );
};

export default StoriesPage;
