import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface SearchModalProps {
    onClose: () => void;
    recentSearches: string[];
}

const GroupSearchModal: React.FC<SearchModalProps> = ({ onClose, recentSearches }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log("Searching for:", searchTerm);
        // Logic tìm kiếm sẽ được xử lý tại đây
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[400px] relative">
                <button onClick={onClose} className="text-black text-xl absolute top-4 right-6 rounded-full p-2 bg-blue-400 hover:bg-blue-300">
                    <IoMdClose />
                </button>
                <h3 className="text-lg font-semibold mb-4">Tìm kiếm</h3>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm"
                    className="p-2 border rounded w-full mb-4"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white p-2 px-4 rounded w-full mb-4"
                >
                    Tìm kiếm
                </button>
                <div className="mt-4">
                    <h4 className="text-md font-semibold">Tìm kiếm gần đây</h4>
                    <ul className="mt-2">
                        {recentSearches.map((search, index) => (
                            <li key={index} className="p-2 border-b cursor-pointer hover:bg-gray-200">
                                {search}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GroupSearchModal;
