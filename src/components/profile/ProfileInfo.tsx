// src/components/ProfileInfo.tsx

import React, { useState } from 'react';
import { FaArchive, FaEdit } from 'react-icons/fa';
import { GrSettingsOption } from "react-icons/gr";
import { formatNumberWithCommas, formatNumberWithUnit } from '../../utils/FormatNumber';
import { updateUser } from '../../services/UserService';
import { UserUpdateRequest } from '../../types/User';
import { IoMdClose } from 'react-icons/io';
import { useAppSelector } from '../../redux/hook';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

interface ProfileInfoProps {
    profileImage: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImage, }) => {
    const user = useAppSelector(state => state.account.user);
    const [charCount, setCharCount] = useState<number>(0);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<UserUpdateRequest>({
        id: 1, // Use actual ID here
        firstName: '',
        lastName: '',
        bio: user.bio,
    });

    // Use default value 0 if user.postNum or user.likeNum is null, undefined, or not a number
    const postNum = user?.postNum ? Number(user.postNum) : 0;
    const likeNum = user?.likeNum ? Number(user.likeNum) : 0;

    const handleEditClick = () => setIsEditing(true);
    const handleClose = () => setIsEditing(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await updateUser(formData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="flex flex-row gap-14 items-center p-4 bg-gray-100 w-[80%]">
            <img
                src={profileImage}
                alt={`${user.name}'s profile`}
                className="w-44 h-44 rounded-full object-cover ms-5 mb-4 me-5 cursor-pointer border border-blue-300"
            />
            <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className="text-xl font-semibold me-2 min-w-[180px]">{user.name}</h2>
                    <button onClick={handleEditClick} className='flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg'>
                        <FaEdit />
                        <span>Chỉnh sửa</span>
                    </button>
                    <button className='flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg'>
                        <FaArchive />
                        <span>Lưu trữ</span>
                    </button>
                    <button className='group/item relative cursor-pointer transition duration-200'>
                        <GrSettingsOption className='text-xl' />
                        <div className="absolute z-40 w-max top-[25px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-200 rounded-lg">
                            Cài đặt
                        </div>
                    </button>
                </div>
                <div className="flex space-x-8 my-4">


                    <div className="text-start flex-row flex gap-2 group/item relative">
                        <p className="font-semibold">{formatNumberWithUnit(postNum)}</p>
                        <p className="text-gray-500">Bài đăng</p>
                        <div className="absolute z-40 w-max top-[25px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-200 rounded-lg">
                            {formatNumberWithCommas(postNum)}
                        </div>
                    </div>
                    <div className="text-start flex flex-row gap-2 group/item relative">
                        <p className="font-semibold">{formatNumberWithUnit(likeNum)}</p>
                        <p className="text-gray-500">Lượt thích</p>
                        <div className="absolute z-40 w-max top-[25px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-200 rounded-lg">
                            {formatNumberWithCommas(likeNum)}
                        </div>
                    </div>

                    {/* <div className="text-start">
                        <p className="font-bold">{formatNumberWithUnit(mutual_friends)}</p>
                        <p className="text-gray-500">Bạn chung</p>
                    </div> */}
                </div>
                {user.bio ? 
                    (<p className="text-center text-gray-700 w-full">{user.bio}</p>)
                    :
                    (<div className='w-full h-28 relative'>
                        <textarea placeholder='Giới thiệu về bản thân...🪶'
                            className={`w-full h-full rounded-lg p-2 pe-14 pb-4 resize-none border border-gray-300 outline-none  
                                `} 
                            onClick={handleEditClick}
                            spellCheck="false"
                            onChange={(e) => {
                                const currentLength = e.target.value.length;
                                setCharCount(currentLength);
                                e.target.style.borderColor = currentLength > 150 ? 'red' : 'gray';
                            }}
                        ></textarea>
                        <div className='absolute right-4 bottom-2 flex flex-col justify-end'>
                            <p className={`text-gray-600 text-sm ${charCount > 150 ? 'text-[#ff0909]' : ''}`}>
                                0 / 150</p>
                            <button className='self-end text-lg'><PiPaperPlaneRightFill /></button>
                        </div>
                    </div>)
                }
            </div>

            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-[600px] relative">
                        <button onClick={handleClose} className="text-black float-right text-xl absolute top-4 right-4 rounded-full p-2 bg-gray-400 hover:bg-gray-300">
                            <IoMdClose />
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
                        <div className='w-full h-28 relative'>
                            <textarea placeholder='Giới thiệu về bản thân...🪶'
                                className={`w-full h-full rounded-lg p-2 pe-16 pb-4 resize-none border border-gray-300 outline-none  
                            `}
                                spellCheck="false"
                                onChange={(e) => {
                                    const currentLength = e.target.value.length;
                                    setCharCount(currentLength);
                                    e.target.style.borderColor = currentLength > 150 ? 'red' : 'gray';
                                }}
                            ></textarea>
                            <div className='absolute right-4 bottom-2 flex flex-col justify-end'>
                                <p className={`text-gray-600 text-sm ${charCount > 150 ? 'text-[#ff0909]' : ''}`}>
                                    {charCount} / 150</p>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2 w-full">Save</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;
