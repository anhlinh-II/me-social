import React from 'react';

const GroupCardPlaceholder: React.FC = () => {
    return (
        <div className="flex flex-col h-full gap-2 bg-white rounded-lg shadow-md animate-pulse">
            <div className="w-full h-36 bg-gray-300 rounded-tl-lg rounded-tr-lg"></div>

            <div className="mt-2 ms-4">
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-1"></div>
                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            </div>

            <div className="flex flex-row gap-2 ms-4 items-center mt-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>

            <div className="flex flex-row justify-center mt-auto w-full p-4 pt-2">
                <div className="bg-gray-300 w-full h-10 rounded-md"></div>
            </div>
        </div>
    );
};

export default GroupCardPlaceholder;
