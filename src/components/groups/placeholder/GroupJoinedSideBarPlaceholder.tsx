import React from 'react';

const GroupSidebarPlaceholder: React.FC = () => {
    return (
        <div className="mb-[25%] me-0 animate-pulse">
            <div className="flex flex-col gap-1 p-2">
                <div className="border bg-sky-500 px-5 py-2 rounded-lg h-2/3 flex justify-center items-center">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
                    <div className="w-24 h-6 bg-gray-300 rounded"></div>
                </div>

                <div className="flex flex-row items-center justify-between mb-2 border-t border-gray-200 pt-2">
                    <div className="h-5 w-32 bg-gray-300 rounded"></div>
                    <div className="h-7 w-20 bg-gray-300 rounded"></div>
                </div>

                <div className="space-y-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div className="flex flex-col w-full">
                                <div className="h-5 w-32 bg-gray-300 rounded mb-1"></div>
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GroupSidebarPlaceholder;
