

interface UserCardProps {
    id: number;
    name: string;
    avatar: string;
    lastChat: string;
    lastChatSince: string;
}

const UserChatCard: React.FC<UserCardProps> = ({ name, avatar, lastChat, lastChatSince }) => {

    return (
        <div>
            <div className="flex w-[98%] ms-1 rounded-lg justify-between overflow-hidden cursor-pointer hover:bg-[#F1F1F1]"
                >
                <div className="flex items-start p-4">
                    <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={avatar}
                        alt={`${name}'s avatar`}
                    />
                    <div className="ml-4 flex flex-col items-start">
                        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                        <div className="flex gap-2">
                            <p className="text-sm">{lastChat}</p>
                            <p className="text-sm">{lastChatSince}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserChatCard;