import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface GroupCardProps {
    imageUrl: string;
    groupName: string;
}

const GroupJoinedCard: React.FC<GroupCardProps> = ({ imageUrl, groupName }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col h-full gap-2 bg-white rounded-lg shadow-md">
            <Link to={`/groups/groupName/discussion`}>
                <img src={imageUrl} alt={groupName} className="w-full h-36 object-cover rounded-tl-lg rounded-tr-lg" />
            </Link>
            <h3 className="text-lg font-semibold mt-2 ms-4 break-words max-w-[280px] leading-tight line-clamp-3">
                <Link to={`/groups/groupName/discussion`} className='hover:underline'>
                    {groupName}
                </Link>
            </h3>
            <div className="flex flex-row gap-2 ms-4">
                <FaClock className='text-gray-600'/>
                <span className='text-xs text-black'>Truy cập lần gần nhất 2 ngày trước</span>
            </div>
            <div className='flex flex-row mt-auto'>
                <div className="pb-4 pt-2 ps-4 pe-0">
                <Link to={`/groups/groupName/discussion`}>
                    <button className="bg-blue-100 text-blue-500 px-16 py-2 rounded-md hover:bg-blue-200">
                        Xem nhóm
                    </button>
                </Link>
                </div>
                <div className="p-4 pt-2">
                    <div className="relative inline-block text-left">
                        <button
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50"
                            onClick={toggleMenu}
                        >
                            <BsThreeDots />
                        </button>
                        {menuOpen && (
                            <div 
                                className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-5"
                                style={{ zIndex: 5 }} 
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Quản lý thông báo</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Báo cáo nhóm</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Rời nhóm</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupJoinedCard;
