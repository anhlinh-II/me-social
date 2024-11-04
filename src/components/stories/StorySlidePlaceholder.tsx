import React from 'react';

const StorySlidePlaceholder: React.FC = () => {
    const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="flex gap-2 overflow-x-auto">
            {/* Placeholder for "Create New Story" */}
            <div className="story-container create-new-story bg-gray-400 animate-pulse" style={{ width: '100px', cursor: 'pointer' }}>
                <div className="flex flex-col items-center">
                    <div className="w-full h-[120px] bg-gray-300 rounded-t-md"></div>
                    <div className="h-5 bg-gray-300 w-3/4 rounded mt-2"></div>
                    <div className="w-full h-8 bg-gray-300 rounded-full mt-2 flex items-center justify-center"></div>
                </div>
            </div>

            {/* Placeholders for other stories */}
            {placeholders.map((_, index) => (
                <div key={index} className="story-container bg-gray-400 animate-pulse" style={{ width: '100px', cursor: 'pointer' }}>
                    {/* Background placeholder */}
                    <div className="w-full h-[120px] bg-gray-300 rounded-t-md"></div>

                    {/* Avatar and username placeholders */}
                    <div className="flex items-center p-2 relative">
                        <div className="story-avatar w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="absolute bottom-0 left-7 w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    <div className="w-3/4 h-4 bg-gray-300 rounded mt-1 mx-auto"></div>
                </div>
            ))}
        </div>
    );
};

export default StorySlidePlaceholder;
