// src/components/ProfileInfo.tsx

import React from 'react';
import { FaArchive, FaEdit } from 'react-icons/fa';
import { GrSettingsOption } from "react-icons/gr";

interface ProfileInfoProps {
    profileImage: string;
    username: string;
    posts: number;
    likes: number;
    mutual_friends: number;
    bio: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImage, username, posts, likes, mutual_friends, bio }) => {
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
                    <button className='flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg'>
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
                    <div className="text-start">
                        <p className="font-bold">{posts}</p>
                        <p className="text-gray-500">Bài đăng</p>
                    </div>
                    <div className="text-start">
                        <p className="font-bold">{likes}</p>
                        <p className="text-gray-500">Lượt thích</p>
                    </div>
                    <div className="text-start">
                        <p className="font-bold">{mutual_friends}</p>
                        <p className="text-gray-500">Bạn chung</p>
                    </div>
                </div>
                <p className="text-left text-gray-700 w-full">{bio} </p>
            </div>
        </div>
    );
};

export default ProfileInfo;
