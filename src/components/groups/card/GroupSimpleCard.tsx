import { Link } from "react-router-dom";
import { formatCreatedTime } from "../../../utils/FormatTime";

interface GroupCardProps {
    imageUrl: string;
    groupName: string;
    createdAt: Date | string;
    groupId: number;
}

const GroupSimpleCard: React.FC<GroupCardProps> = ({ imageUrl, groupName, createdAt, groupId  }) => {
    let createdDate;

    // Ensure createdAt is a Date object
    if (typeof createdAt === "string") {
        createdDate = new Date(createdAt);
    } else {
        createdDate = createdAt;
    }

    return (
        <Link to={`/groups/${groupId}/discussion`}>
            <div className="flex flex-row gap-2 bg-white rounded-lg shadow-sm p-2 hover:bg-blue-100">
                <img src={imageUrl} alt={groupName} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex flex-col gap-1">
                    <h3 className="text-md font-semibold break-words max-w-[230px] line-clamp-2">{groupName}</h3>
                    <span className='text-xs text-gray-500'>Nhóm được thành lập vào {formatCreatedTime(createdDate.toISOString())} trước</span>
                </div>
            </div>
        </Link>
    );
};

export default GroupSimpleCard;