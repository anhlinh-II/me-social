import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface GroupShareModalProps {
    onClose: () => void;
    userAvatar: string;
    userName: string;
}

const GroupShareModal: React.FC<GroupShareModalProps> = ({ onClose, userAvatar, userName }) => {
    const [privacy, setPrivacy] = useState('public');
    const [content, setContent] = useState('');

    const handleShare = () => {
        // Thực hiện hành động chia sẻ ở đây
        console.log("Sharing post:", { privacy, content });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <div className='relative flex gap-2 items-center justify-center w-full border-b border-gray-400 pb-4 mb-4'>
                    <p className='text-xl font-bold'>Chia sẻ nhóm</p>
                    {/* Close Button */}
                    <button onClick={onClose} className="text-black float-right text-xl absolute right-2 rounded-full p-2 bg-blue-400 hover:bg-blue-300">
                        <IoMdClose />
                    </button>
                </div>

                {/* User Info and Privacy Selector */}
                <div className="flex items-center mb-4">
                    <img src={userAvatar} alt={`${userName}'s avatar`} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <h3 className="font-semibold">{userName}</h3>
                        <div className='flex flex-row gap-2 items-center justify-center'>
                            <div className='text-sm bg-gray-200 border rounded px-2 py-1 cursor-not-allowed'>Bảng feed</div>
                            <select
                                value={privacy}
                                onChange={(e) => setPrivacy(e.target.value)}
                                className="text-sm bg-gray-200 border rounded px-2 py-1 cursor-pointer"
                            >
                                <option value="public">Công khai</option>
                                <option value="friends">Bạn bè</option>
                                <option value="private">Riêng tư</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Viết gì đó... (không bắt buộc)"
                    className="w-full h-32 border rounded p-2 mb-4 resize-none"
                />

                {/* Share Button */}
                <button
                    onClick={handleShare}
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
                >
                    Chia sẻ ngay
                </button>
            </div>
        </div>
    );
};

export default GroupShareModal;
