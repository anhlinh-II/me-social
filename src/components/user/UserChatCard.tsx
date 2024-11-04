

interface UserCardProps {
    id: number;
    name: string;
    avatar: string;
    lastChat: string;
    lastChatSince: string;
}

const UserChatCard: React.FC<UserCardProps> = ({ name, avatar, lastChat, lastChatSince }) => {

    const placeholder = (
        <div className="flex w-[98%] ms-1 rounded-lg justify-between overflow-hidden animate-pulse bg-gray-100 cursor-pointer">
            <div className="flex items-start relative p-2">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-2 left-12 w-5 h-5 bg-gray-300 rounded-full"></div>

                <div className="ml-4 flex flex-col items-start">
                    <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="flex gap-2 w-full">
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex w-[98%] ms-1 rounded-lg justify-between overflow-hidden cursor-pointer hover:bg-[#F1F1F1]">
                <div className="flex items-start relative p-2">
                    <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={avatar}
                        alt={`${name}'s avatar`}
                    />
                    <img className="absolute bottom-2 left-12 w-5 h-5 rounded-full object-cover"
                        src="../src/assets/img/icons/onlineIcon.png"></img>
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