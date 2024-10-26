import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface InviteModalProps {
    onClose: () => void;
    suggestedUsers: string[];
}

const InviteModal: React.FC<InviteModalProps> = ({ onClose, suggestedUsers }) => {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

    const handleCheckboxChange = (user: string) => {
        setSelectedUsers((prev) =>
            prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
        );
    };

    const handleInvite = () => {
        console.log("Invited users:", selectedUsers);
        onClose(); // Đóng modal sau khi gửi lời mời
    };

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[600px] flex flex-col relative">
                <div className='relative flex gap-2 items-center justify-center w-full border-b border-gray-400 pb-2 mb-4'>
                    <h3 className="text-xl font-bold mb-4">Mời thành viên</h3>
                    <button onClick={onClose} className="text-black float-right text-xl absolute right-2 rounded-full p-2 bg-blue-400 hover:bg-blue-300">
                        <IoMdClose />
                    </button>
                </div>
                <div className='flex'>
                    <div className="w-1/2">
                        
                        <input
                            type="text"
                            placeholder="Tìm kiếm người dùng"
                            className="p-2 border rounded w-full mb-4"
                        />
                        <div className="flex flex-col w-full max-h-60 overflow-y-auto">
                            {suggestedUsers.map((user, index) => (
                                <div key={index} className="flex items-center justify-between p-2 border-b">
                                    <span>{user}</span>
                                    <input
                                        type="checkbox"
                                        checked={selectedUsers.includes(user)}
                                        onChange={() => handleCheckboxChange(user)}
                                        className="mr-2 h-6 w-6"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 p-4 bg-gray-100 rounded-lg ml-4">
                        <h4 className="text-lg font-semibold mb-4">Đã chọn</h4>
                        <div className="max-h-60 overflow-y-auto">
                            {selectedUsers.map((user, index) => (
                                <div key={index} className="flex items-center p-2">
                                    <span>{user}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleInvite}
                    className="self-end mt-4 bg-blue-500 text-white p-2 px-4 rounded w-24"
                >
                    Mời
                </button>
            </div>
        </div>
    );
};

export default InviteModal;
