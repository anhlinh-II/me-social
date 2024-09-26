
interface GroupCardProps {
    imageUrl: string;
    groupName: string;
}

const GroupSuggestCard: React.FC<GroupCardProps> = ({ imageUrl, groupName }) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <img src={imageUrl} alt={groupName} className="w-full h-32 object-cover rounded-tl-lg rounded-tr-lg" />
            <h3 className="text-lg font-semibold mt-2 ms-4">{groupName}</h3>
            <div className='flex flex-row'>
                <div className="p-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Tham gia nhóm</button>
                </div>
            </div>
        </div>
    );
};

export default GroupSuggestCard;
