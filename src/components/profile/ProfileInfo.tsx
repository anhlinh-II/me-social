import React, { useEffect, useState } from 'react';
import { FaArchive, FaEdit } from 'react-icons/fa';
import { GrSettingsOption } from "react-icons/gr";
import { formatNumberWithCommas, formatNumberWithUnit } from '../../utils/FormatNumber';
import { updateUser } from '../../services/UserService';
import { UserUpdateRequest } from '../../types/User';
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { setUserLoginInfo } from '../../redux/slice/accountSlice';
import UpdateAvatarModal from '../modal/UpdateAvatarModal';
import { deleteImage, uploadUserAvatar } from '../../services/ImagesService';

const ProfileInfo = () => {
    const user = useAppSelector(state => state.account.user);

    const [showModal, setShowModal] = useState<boolean>(false)
    const [charCount, setCharCount] = useState<number>(0);
    const [isEditing, setIsEditing] = useState(false);
    const [file, setFile] = useState<File>();

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<UserUpdateRequest>({
        id: Number(user.id),
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        avatarUrl: user.avatarUrl
    });

    const postNum = user?.postNum ? Number(user.postNum) : 0;
    const likeNum = user?.likeNum ? Number(user.likeNum) : 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const res = await updateUser(formData);
            console.log('Update response:', res);
            if (res) {
                setIsEditing(false);
                dispatch(setUserLoginInfo({ ...user, ...formData }));
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);

            try {
                const responseUploadedUrl = await uploadUserAvatar(selectedFile, Number(user.id));
                console.log('Uploaded Avatar URL:', responseUploadedUrl);

                // Update the avatar URL in the state
                setFormData({ ...formData, avatarUrl: responseUploadedUrl?.secure_url });

                // Save the updated avatar URL to the user profile
                const updatedUser = await updateUser({ ...formData, avatarUrl: responseUploadedUrl?.secure_url });

                console.log("updated user: ", updatedUser);

                if (updatedUser) {
                    dispatch(setUserLoginInfo({ ...user, avatarUrl: responseUploadedUrl }));
                    console.log("dispatch ok")
                }
            } catch (error) {
                console.error('Error handling file upload:', error);
            }
        }
    };

    useEffect(() => {
        if (!isEditing) {
            setFormData({
                id: Number(user.id),
                firstName: user.firstName,
                lastName: user.lastName,
                bio: user.bio,
                avatarUrl: user.avatarUrl,
            });
        }
    }, [isEditing, user]);

    const handleClickPhoto = () => {
        setShowModal(true);
    }

    const handleOnclickUpdate = () => {
        document.getElementById('fileInput')?.click();
    }

    const handleOnclickRemove = async () => {
        console.log("function remove called")
        try {
            // Xóa ảnh trên Cloudinary
            const res = await deleteImage(user.avatarUrl);
            console.log("res ", res)
    
            if (res) {
                console.log("Delete on cloud success");
    
                // Cập nhật cơ sở dữ liệu
                const updatedUser = await updateUser({ ...formData, avatarUrl: '' });
    
                if (updatedUser) {
                    console.log("Delete on DB success");
    
                    // Đồng bộ Redux và trạng thái cục bộ
                    setFormData({ ...formData, avatarUrl: '' });
                    dispatch(setUserLoginInfo({ ...user, avatarUrl: '' }));
                } else {
                    console.error("Failed to update user in DB");
                }
            } else {
                console.error("Failed to delete image on Cloudinary");
            }
        } catch (error) {
            console.error("Error in handleOnclickRemove:", error);
        }
    };
    

    return (
        <div className="flex flex-row gap-14 items-center p-4 bg-gray-100 w-[80%]">
            <div className='w-44 h-44  ms-5 me-5 cursor-pointer'
                onClick={() => handleClickPhoto()}
            >
                <img
                    src={user.avatarUrl ? user.avatarUrl : 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}
                    alt={`${user.username}'s profile`}
                    className="w-44 h-44 rounded-full object-covercursor-pointer border border-blue-500"
                />
                <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-4">
                    <h2 className="text-xl font-semibold me-2 min-w-[180px]">{user.username}</h2>
                    <button onClick={() => setIsEditing(true)} className="flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg">
                        <FaEdit />
                        <span>Chỉnh sửa</span>
                    </button>
                    <button className="flex flex-row gap-2 items-center bg-[#E4E6EB] hover:bg-[#D8DADF] p-2 rounded-lg">
                        <FaArchive />
                        <span>Lưu trữ</span>
                    </button>
                    <button className="group/item relative cursor-pointer transition duration-200">
                        <GrSettingsOption className="text-xl" />
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
                </div>
                {user.bio ? (
                    <p className="text-center text-gray-700 w-full">{user.bio}</p>
                ) : (
                    <textarea
                        placeholder="Giới thiệu về bản thân...🪶"
                        className="w-full h-28 rounded-lg p-2 resize-none border border-gray-300 outline-none"
                        onClick={() => setIsEditing(true)}
                    />
                )}
            </div>

            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-[600px] relative">
                        <button onClick={() => setIsEditing(false)} className="absolute top-4 right-4 text-xl bg-gray-400 hover:bg-gray-300 p-2 rounded-full">
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
                        <textarea
                            name="bio"
                            value={formData.bio || ''}
                            onChange={(e) => {
                                const currentLength = e.target.value.length;
                                setCharCount(currentLength);
                                setFormData({ ...formData, bio: e.target.value });
                            }}
                            placeholder="Giới thiệu về bản thân..."
                            className={`w-full h-28 rounded-lg p-2 resize-none border ${charCount > 150 ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        <p className={`text-sm ${charCount > 150 ? 'text-red-500' : ''}`}>{charCount} / 150</p>
                        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2 w-full">
                            Save
                        </button>
                    </div>
                </div>
            )}
            <UpdateAvatarModal show={showModal} setShow={setShowModal} handleOnclickUpdate={handleOnclickUpdate} handleOnclickRemove={handleOnclickRemove} />
        </div>
    );
};

export default ProfileInfo;
