
interface GroupCardProps {
    imageUrl: string;
    groupName: string;
}

const GroupSuggestCard: React.FC<GroupCardProps> = ({ imageUrl, groupName }) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <img src={imageUrl} alt={groupName} className="w-full h-36 object-cover rounded-tl-lg rounded-tr-lg" />
            <h3 className="text-lg font-semibold mt-2 ms-4">{groupName}</h3>
            <span className='text-xs ms-4 text-gray-500'>782,7 Nghìn thành viên</span>
            <div className='flex flex-row justify-center'>
                <div className="p-4">
                    <button className="bg-blue-100 text-blue-500 px-12 py-2 rounded-md hover:bg-blue-200">Tham gia nhóm</button>
                </div>
            </div>
        </div>
    );
};

export default GroupSuggestCard;
