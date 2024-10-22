import { MdOutlineGroups } from "react-icons/md";
import { Link } from "react-router-dom";

interface GroupCardProps {
    imageUrl: string;
    groupName: string;
}

const GroupSuggestCard: React.FC<GroupCardProps> = ({ imageUrl, groupName }) => {
    return (
        <div className="flex flex-col h-full gap-2 bg-white rounded-lg shadow-md">
            <Link to={`/groups/groupName/discussion`}>
                <img src={imageUrl} alt={groupName} className="w-full h-36 object-cover rounded-tl-lg rounded-tr-lg" />
            </Link>
            <Link to={`/groups/groupName/discussion`} className='hover:underline'>
                <h3 className="text-lg font-semibold mt-2 ms-4 break-words max-w-[280px] leading-tight line-clamp-3">{groupName}</h3>
            </Link>
            <div className="flex flex-row gap-2 ms-4">
                <MdOutlineGroups style={{ fontSize: "18px", color: "black" }} />
                <span className='text-xs text-black'>782,7 Nghìn thành viên</span>
            </div>
            <div className='flex flex-row justify-center mt-auto w-full'>
                <div className="p-4 pt-2 w-full">
                    <button className="bg-blue-100 text-blue-500 w-full px-2 py-2 rounded-md hover:bg-blue-200">Tham gia nhóm</button>
                </div>
            </div>
        </div>
    );
};

export default GroupSuggestCard;
