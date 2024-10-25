import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDots } from 'react-icons/bs';
import { FaEarthAmericas, FaPlus, FaShare } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { GroupResponse } from "../../services/Types/Group";


interface GroupHeaderProps {
    group: GroupResponse | null;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ group }) => {
    const location = useLocation();
    const initialActive = location.pathname.includes("about") ? "about" : "discussion";
    const [active, setActive] = useState<string>(initialActive);

    console.log(group);
    if (!group) return null;

    return (
        <div className="flex flex-col items-center justify-center w-full bg-blue-100 shadow-sm p-4 mt-[-72px] mb-5">
            <img
                src="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg"
                alt="Group"
                className="rounded-md object-cover w-[1120px] h-[540px]"
            />
            <div className='w-[72%] mt-4 border-b border-black pb-4'>
            <h1 className="text-2xl w-fit cursor-pointer font-bold hover:underline">
                    {group.name}
                </h1>
                <div className='mt-2 flex items-center gap-2'>
                    <FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" />
                    <span>{group.privacy}</span>
                    <GoDotFill className="text-[10px]" />
                    <span className='ms-2'>{group.memberNum + group.adminNum} thành viên</span>
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
                <div className="flex space-x-4">
                    <Link to={`/groups/groupName/about`} onClick={() => setActive("recentlyActivity")}>
                        <button className={active === "recentlyActivity" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>Giới thiệu
                        </button>
                    </Link>

                    <Link to={`/groups/groupName/discussion`} onClick={() => setActive("discussion")}>
                        <button className={active === "discussion" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>Thảo luận
                        </button>
                    </Link>

                    <Link to={`/groups/groupName/members`} onClick={() => setActive("members")}>
                        <button className={active === "members" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>Mọi người
                        </button>
                    </Link>

                    <Link to={`/groups/groupName/media`} onClick={() => setActive("media")}>
                        <button className={active === "media" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>File phương tiện
                        </button>
                    </Link>

                    <Link to={`/groups/groupName/files`} onClick={() => setActive("files")}>
                        <button className={active === "files" ? "py-2 px-4 border-b-2 border-blue-500 font-medium" : "py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300"}>File
                        </button>
                    </Link>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                        Tham gia</button>
                    <button className="flex items-center text-white gap-1 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">
                        <FaPlus />
                        <div>Mời</div>
                    </button>
                    <button className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                        <FaShare />
                        <div>Chia sẻ</div>
                    </button>
                    <button className="bg-[#E4E6EB] px-4 py-2 rounded-md hover:bg-[#D8DADF]">
                        <IoSearchSharp /></button>
                    <button className="bg-[#E4E6EB] px-4 py-2 rounded-md hover:bg-[#D8DADF]">
                        <BsThreeDots /></button>
                </div>
            </div>
        </div>
    );
};

export default GroupHeader;
