// src/components/ProfileInfo.tsx

import React, { useState } from 'react';
import { FaArchive, FaEdit } from 'react-icons/fa';
import { GrSettingsOption } from "react-icons/gr";
import { formatNumberWithCommas, formatNumberWithUnit } from '../../utils/FormatNumber';
import { updateUser } from '../../services/Entities/UserService';
import { UserUpdateRequest } from '../../services/Types/User';

interface ProfileInfoProps {
    profileImage: string;
    username: string;
    posts: number;
    likes: number;
    mutual_friends: number;
    bio: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImage, username, posts, likes, mutual_friends, bio }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<UserUpdateRequest>({
        id: 1, // Use actual ID here
        firstName: '',
        lastName: '',
        bio,
    });

    const handleEditClick = () => setIsEditing(true);
    const handleClose = () => setIsEditing(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const token = 'your_token'; // Add actual token here
            await updateUser(formData, token);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };
    
    return (
        <div className="flex flex-row justify-between items-center p-4 bg-gray-100 w-[80%]">
            <img
                src={profileImage}
                alt={`${username}'s profile`}
                className="w-44 h-44 rounded-full object-cover ms-5 mb-4 me-5 cursor-pointer border border-blue-300"
            />
            <div className='flex flex-col items-start'>
                <div className='flex flex-row gap-4'>
                    <h2 className="text-xl font-semibold font-serif me-2">{username}</h2>
                    <button onClick={handleEditClick} className='flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg'>
                        <FaEdit/>
                        <span>Chỉnh sửa</span>
                    </button>
                    <button className='flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg'>
                        <FaArchive/>
                        <span>Lưu trữ</span>
                    </button>
                    <button className='group/item relative cursor-pointer transition duration-200'>
                        <GrSettingsOption className='text-xl'/>
                        <div className="absolute z-40 w-max top-[25px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-200 rounded-lg">
							Cài đặt
						</div>
                    </button>
                </div>
                <div className="flex space-x-8 my-4">
                    <div className="text-start group/item relative">
                        <p className="font-bold">{formatNumberWithUnit(posts)}</p>
                        <p className="text-gray-500">Bài đăng</p>
                        <div className="absolute z-40 w-max top-[25px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-200 rounded-lg">
							{formatNumberWithCommas(posts)}
						</div>
                    </div>
                    <div className="text-start group/item relative">
                        <p className="font-bold">{formatNumberWithUnit(likes)}</p>
                        <p className="text-gray-500">Lượt thích</p>
                        <div className="absolute z-40 w-max top-[25px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-200 rounded-lg">
							{formatNumberWithCommas(likes)}
						</div>
                    </div>
                    <div className="text-start">
                        <p className="font-bold">{formatNumberWithUnit(mutual_friends)}</p>
                        <p className="text-gray-500">Bạn chung</p>
                    </div>
                </div>
                <p className="text-left text-gray-700 w-full">{bio} </p>
            </div>
            
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg w-[400px] relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold"
                    >
                        &times;
                    </button>
                    <h3 className="text-lg font-semibold mb-4">Chỉnh sửa thông tin</h3>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="p-2 border rounded w-full mb-2"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="p-2 border rounded w-full mb-2"
                    />
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Bio"
                        className="p-2 border rounded w-full mb-2"
                    />
                    <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2 w-full">Save</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default ProfileInfo;
