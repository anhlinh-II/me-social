import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDots } from 'react-icons/bs';
import { FaEarthAmericas, FaLock, FaPlus, FaShare } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { GroupPrivacy, GroupResponse } from "../../types/Group";
import InviteModal from "./modal/InviteModal";
import GroupSearchModal from "./modal/GroupSearchModal";
import GroupDropdownMenu from "./modal/GroupDropdownMenu";
import GroupShareModal from "./modal/GroupShareModal";
import { FaEdit } from "react-icons/fa";
import { PiUploadSimpleFill } from "react-icons/pi";
import { uploadGroupImage } from "../../services/ImagesService";
import { editGroup } from "../../services/GroupService";


interface GroupHeaderProps {
    group?: GroupResponse;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ group }) => {
    const location = useLocation();
    const initialActive = location.pathname.includes("about") ? "about" : "discussion";
    const [active, setActive] = useState<string>(initialActive);
    const [isInviteModalOpen, setInviteModalOpen] = useState(false);
    const [isGroupSearchModalOpen, setIsGroupSearchModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const [imageUrl, setImageUrl] = useState("https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg");
    const [showMenu, setShowMenu] = useState(false);
    const [inputUrl, setInputUrl] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const adminId = 5;
    const groupId = 8;

    const handleUpdate = async () => {
        try {
            let newImageUrl = imageUrl;

            if (selectedFile) {
                const uploadResult = await uploadGroupImage(selectedFile, groupId);
                newImageUrl = uploadResult.secure_url;
            } else if (inputUrl.trim() !== "") {
                newImageUrl = inputUrl;
            }

            const groupResponse = await editGroup({
                groupId,
                adminId,
                name: group?.name,
                imageUrl: newImageUrl,
                privacy: GroupPrivacy.PUBLIC
            });
            console.log(groupResponse);

            // 3. Cập nhật giao diện
            setImageUrl(newImageUrl);
            setInputUrl("");
            setSelectedFile(null);
            setShowMenu(false);
        } catch (error) {
            console.error("Lỗi khi cập nhật nhóm:", error);
        }
    };

    const recentSearches = ["Tìm kiếm 1", "Tìm kiếm 2", "Tìm kiếm 3"];

    const suggestedUsers = ['User1', 'User2', 'User3'];

    return (
        <div className="flex flex-col items-center justify-center w-full bg-blue-100 shadow-sm p-4 mt-[-72px] mb-5">
            <div className="relative">
                <img
                    src={group?.imageUrl}
                    alt="Group"
                    className="rounded-md object-cover w-[1120px] h-[540px]"
                />
                <div className="absolute right-2 bottom-2">
                    {!showMenu ? (
                        <button
                            onClick={() => setShowMenu(true)}
                            className="flex flex-row gap-2 items-center bg-[#e4e6eba0] hover:bg-[#d8dadfcd] p-2 rounded-lg"
                        >
                            <span>Chỉnh sửa</span>
                            <FaEdit />
                        </button>
                    ) : (
                        <div className="flex flex-col gap-2 bg-white w-80 shadow-md p-2 rounded-lg">
                            {/* Tải ảnh lên */}
                            <div className="w-full p-2 rounded-md hover:bg-gray-200 text-black cursor-pointer">
                                <label className="flex flex-row gap-2 items-center cursor-pointer">
                                    <PiUploadSimpleFill />
                                    <span className="text-black font-semibold">Tải ảnh lên</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                            <div className="w-full p-2 rounded-md hover:bg-gray-200 text-black">
                                <input
                                    type="text"
                                    placeholder="Nhập URL ảnh"
                                    value={inputUrl}
                                    onChange={(e) => setInputUrl(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            {/* Nhập URL ảnh */}
                            <div className="flex flex-row gap-2">
                                <button
                                    onClick={handleUpdate}
                                    className="bg-blue-100 text-blue-500 w-[70%] p-2 rounded-md hover:bg-blue-200"
                                >
                                    Cập nhật
                                </button>
                                <button
                                    onClick={() => setShowMenu(false)}
                                    className="bg-blue-100 text-blue-500 w-[30%] p-2 rounded-md hover:bg-blue-200"
                                >
                                    Huỷ
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-[72%] mt-4 border-b border-black pb-4'>
                <h1 className="text-2xl w-fit cursor-pointer font-bold hover:underline">
                    {group?.name}
                </h1>
                <div className='mt-2 flex items-center gap-2'>
                    {group?.privacy === "PUBLIC" ? (
                        <FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" />
                    ) : (
                        <FaLock className="text-gray-600 text-sm font-normal align-center" />
                    )}
                    <span>
                        {group?.privacy === "PUBLIC" ? "Công khai" : "Riêng tư"}
                    </span>
                    <GoDotFill className="text-[10px]" />
                    <span className='ms-2'>
                        {group ? group.memberNum + group.adminNum : ""} thành viên
                    </span>
                </div>


                {/* Group Info */}
                <div className="flex items-center space-x-4">
                    <div className="flex-1">
                        <div className="flex space-x-2 mt-2">

                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Menu */}
            <div className="mt-4">
                <div className="flex space-x-4 relative">
                    <Link to={`/groups/${group?.id}/about`} onClick={() => setActive("recentlyActivity")}>
                        <button className={active === "recentlyActivity" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>Giới thiệu
                        </button>
                    </Link>

                    <Link to={`/groups/${group?.id}/discussion`} onClick={() => setActive("discussion")}>
                        <button className={active === "discussion" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>Thảo luận
                        </button>
                    </Link>

                    <Link to={`/groups/${group?.id}/members`} onClick={() => setActive("members")}>
                        <button className={active === "members" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>Mọi người
                        </button>
                    </Link>

                    <Link to={`/groups/${group?.id}/media`} onClick={() => setActive("media")}>
                        <button className={active === "media" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>File phương tiện
                        </button>
                    </Link>

                    <Link to={`/groups/${group?.id}/files`} onClick={() => setActive("files")}>
                        <button className={active === "files" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>File
                        </button>
                    </Link>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                        Tham gia</button>
                    <button className="flex items-center text-white gap-1 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
                        onClick={() => setInviteModalOpen(true)}>
                        <FaPlus />
                        <div>Mời</div>
                    </button>
                    <button className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                        onClick={() => setIsShareModalOpen(true)}>
                        <FaShare />
                        <div>Chia sẻ</div>
                    </button>
                    <button className="bg-[#E4E6EB] px-4 py-2 rounded-md hover:bg-[#D8DADF]"
                        onClick={() => setIsGroupSearchModalOpen(true)}>
                        <IoSearchSharp /></button>
                    <button className="bg-[#E4E6EB] px-4 py-2 rounded-md hover:bg-[#D8DADF]"
                        onClick={() => setIsMenuOpen((prev) => !prev)}>
                        <BsThreeDots />
                    </button>
                    {isMenuOpen && (
                        <GroupDropdownMenu onClose={() => setIsMenuOpen(false)} />
                    )}
                </div>
            </div>
            {isInviteModalOpen && (
                <InviteModal
                    onClose={() => setInviteModalOpen(false)}
                    suggestedUsers={suggestedUsers}
                />
            )}
            {isGroupSearchModalOpen && (
                <GroupSearchModal
                    onClose={() => setIsGroupSearchModalOpen(false)}
                    recentSearches={recentSearches}
                />
            )}
            {isShareModalOpen && (
                <GroupShareModal
                    onClose={() => setIsShareModalOpen(false)}
                    userAvatar="/gta6.jpg"
                    userName="Cristiano Ronaldo"
                />
            )}
        </div>
    );
};

export default GroupHeader;
