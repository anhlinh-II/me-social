import React, { useState } from 'react';

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
        <div className="bg-white rounded-lg shadow-md">
            <img src={imageUrl} alt={groupName} className="w-full h-32 object-cover rounded-tl-lg rounded-tr-lg" />
            <h3 className="text-lg font-semibold mt-2 ms-4">{groupName}</h3>
            <div className='flex flex-row'>
                <div className="p-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Xem nhóm</button>
                </div>
                <div className="p-4">
                    <div className="relative inline-block text-left">
                        <button
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={toggleMenu}
                        >
                            Menu
                        </button>
                        {menuOpen && (
                            <div 
                                className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                                style={{ zIndex: 50 }} 
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
