

interface UserSimpleCardProps {
    userId: number;
	userFullName: string;
	avatarUrl: string;
}

const UserSimpleCard: React.FC<UserSimpleCardProps> = ({ userFullName, avatarUrl }) => {

	const placeholder = (
		<div className="flex w-full p-1 justify-between overflow-hidden rounded-lg animate-pulse bg-gray-100 cursor-pointer">
            <div className="flex items-center relative w-full gap-4 py-1">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-1 left-7 w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
	);

	return (
		<div className="flex w-full p-1 justify-between overflow-hidden rounded-lg cursor-pointer hover:bg-[#E7E7E7]">
			<div className="flex items-center relative w-full gap-4 py-1">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={avatarUrl}
					alt={`${userFullName}'s avatar`}
				/>
                <img className="absolute bottom-1 left-7 w-3 h-3 rounded-full object-cover" 
                    src="../src/assets/img/icons/onlineIcon.png"></img>  
				<h2 className="text-md font-bold text-gray-800">{userFullName}</h2>
			</div>
		</div>
	);
};

export default UserSimpleCard;