import React from 'react';

import onlineIcon from '../../assets/img/icons/onlineIcon.png';
import { IoIosArrowDown } from 'react-icons/io';


interface InfoBarProps {
	chatName: string;
	avtUrl: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ chatName, avtUrl }) => (
	<div className="bg-white rounded-t-lg h-[50px] w-full"
		style={{
			boxShadow: '0 1px 2px rgba(0, 0, 0, .1), 0 -1px rgba(0, 0, 0, .1) inset, 0 2px 1px -1px rgba(255, 255, 255, .5) inset'
			}}>
		<div className="relative flex-1 flex items-center p-1 rounded-tl-lg 
				h-full w-max hover:bg-gray-100 cursor-pointer gap-1">
			<div className="p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={avtUrl}
					alt={`${chatName}'s avatar`}
				/>
				<img className="w-4 h-4 absolute top-8 left-8" src={onlineIcon} alt="online icon" />
			</div>
			<div className='flex flex-col justify-center items-left'>
				<h3 className='text-gray-800 font-semibold'>{chatName}</h3>
				<p className='text-gray-500 text-xs'>Đang hoạt động</p>
			</div>
			<IoIosArrowDown />
		</div>
	</div>

);

export default InfoBar;
