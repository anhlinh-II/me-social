import React from 'react';

import onlineIcon from '../../assets/img/icons/onlineIcon.png';
import { IoIosArrowDown } from 'react-icons/io';


interface InfoBarProps {
	chatName: string;
	avtUrl: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ chatName, avtUrl }) => (
	<div className="bg-[#2979FF] rounded-t-lg h-[50px] w-full border-b border-gray-600">
		<div className="relative flex-1 flex items-center p-2 rounded-tl-lg text-white h-full w-max hover:bg-blue-400 cursor-pointer">
			<img
				className="w-10 h-10 me-2 rounded-full object-cover"
				src={avtUrl}
				alt={`${chatName}'s avatar`}
			/>
			<img className="w-4 h-4 absolute top-8 left-8" src={onlineIcon} alt="online icon" />
			<div className='flex flex-col justify-center items-left'>
				<h3 className='font-semibold'>{chatName}</h3>
				<p className='text-gray-100 text-xs'>Đang hoạt động</p>
			</div>
			<IoIosArrowDown />
		</div>
	</div>

);

export default InfoBar;
