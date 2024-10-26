import { Link } from "react-router-dom";

interface GroupCardProps {
    imageUrl: string;
    groupName: string;
    lastActivitySince: Date;
}

const getTimeAgo = (lastActivitySince: Date): string => {
    const now = new Date();
    const diff = now.getTime() - lastActivitySince.getTime();
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    if (years > 0) return `${years} năm trước`;
    if (months > 0) return `${months} tháng trước`;
    if (weeks > 0) return `${weeks} tuần trước`;
    if (days > 0) return `${days} ngày trước`;
    if (hours > 0) return `${hours} giờ trước`;
    if (minutes > 0) return `${minutes} phút trước`;
    return `vừa xong`;
}

const GroupSimpleCard: React.FC<GroupCardProps> = ({ imageUrl, groupName, lastActivitySince }) => {
    const timeAgo = getTimeAgo(lastActivitySince);

    return (
        <Link to={`/groups/groupName/discussion`}>
            <div className="flex flex-row gap-2 bg-white rounded-lg shadow-sm p-2 hover:bg-blue-100">
                <img src={imageUrl} alt={groupName} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex flex-col gap-1">
                    <h3 className="text-md font-semibold break-words max-w-[230px] line-clamp-2">{groupName}</h3>
                    <span className='text-xs text-gray-500'>Lần hoạt dộng gần nhất: {timeAgo}</span>
                </div>
            </div>
        </Link>
    );
};

export default GroupSimpleCard;