import React from 'react';

const PostPlaceholder: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-lg border-2 mb-4 animate-pulse">
            <div className="flex relative justify-start items-center px-3 py-2 gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                <div className="ml-2 flex flex-col gap-1">
                    <div className="h-4 bg-gray-300 rounded w-28"></div>
                    <div className="flex gap-2">
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                </div>
                <div className="ml-auto w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
            </div>

            <div className="flex justify-center items-center w-full h-64 bg-gray-200"></div>

            <div className="flex flex-col p-3">
                <div className="flex justify-between cursor-pointer text-sky-600 mb-2">
                    <div className="flex gap-1">
                        <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div>
                        <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div>
                        <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                <div className="w-full border-t-[1.5px] border-gray-300 mt-2">
                    <div className="h-4 bg-gray-300 rounded w-28 my-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="flex mt-2 items-center">
                        <div className="rounded-full bg-gray-300 h-10 w-10 mr-2"></div>
                        <div className="bg-gray-300 h-8 rounded w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPlaceholder;
