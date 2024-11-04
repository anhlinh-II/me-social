import React from 'react';
import { FaPersonCirclePlus } from 'react-icons/fa6';

interface UserCardProps {
	name: string;
	avatar: string;
	description: string;
	mutualFriends: number;
	location: string;
	joinedSince: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, avatar, description, location }) => {

	const placeholder = (
		<div className="flex w-full justify-between overflow-hidden animate-pulse bg-gray-100 rounded-lg p-4">
			<div className="flex items-start">
				<div className="w-16 h-16 bg-gray-300 rounded-full"></div>
				<div className="ml-4 flex flex-col items-start space-y-2">
					<div className="h-4 bg-gray-300 rounded w-24"></div>
					<div className="h-3 bg-gray-300 rounded w-32"></div>
					<div className="h-3 bg-gray-300 rounded w-20"></div>
				</div>
			</div>
			<div className="self-center">
				<div className="bg-gray-300 rounded-md px-4 py-2 w-28 h-10"></div>
			</div>
		</div>
	);

	return (
		<div className="flex w-full justify-between overflow-hidden">
			<div className="flex items-start p-4">
				<img
					className="w-16 h-16 rounded-full object-cover"
					src={avatar}
					alt={`${name}'s avatar`}
				/>
				<div className="ml-4 flex flex-col items-start">
					<h2 className="text-md font-semibold text-gray-800">{name}</h2>
					<p className="text-gray-600 text-sm">{description}</p>
					<p className="text-gray-600 text-sm">{location}</p>
				</div>
			</div>
			<div className="self-center">
				<button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 flex items-center gap-2">
					<FaPersonCirclePlus></FaPersonCirclePlus>
					<span> Thêm bạn bè</span>
				</button>
			</div>
		</div>
	);
};

export default UserCard;
