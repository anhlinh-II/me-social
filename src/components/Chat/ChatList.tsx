import React from 'react';
import UserChatCard from '../user/UserChatCard';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
//import { useAppSelector } from '../../redux/hook';

//const ENDPOINT = 'http://localhost:8080/';

export interface UserChat {
	id: number;
	name: string;
	avatar: string;
	lastChat: string;
	lastChatSince: string;
}

interface ChatListProps {
	chats: UserChat[];
    setSelectedChat: (chat: UserChat) => void;
	showChatList: boolean;
    setShowChatList: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatList: React.FC<ChatListProps> = ({ chats, setSelectedChat, showChatList, setShowChatList }) => {
	//const currentUser = USER

	return (
		<div>
			{showChatList ? (
				<div className="flex flex-col fixed top-[50px] right-[2%] z-20 justify-start h-[90vh] w-[360px] bg-white rounded-lg">
					{/* Tiêu đề đoạn chat */}
					<div className='flex justify-between items-center pe-4'>
						<p className="text-2xl ms-4 mt-2 mb-4 font-bold">Đoạn chat</p>
						<div className={`w-[32px] h-[32px] hover:bg-[#F3F4F6] rounded-full flex items-center justify-center`}>
							<PiDotsThreeOutlineFill style={{ fontSize: "22px", color: "black", cursor: "pointer" }} />
						</div>
					</div>
					<div className="flex items-center mx-4 mb-2 bg-gray-100 rounded-full">
						<button className="p-2 pe-0 text-xl text-gray-500 hover:text-gray-700">
							<IoIosSearch />
						</button>
						<input
							type="text"
							placeholder="Tìm kiếm liên hệ..."
							className="flex-grow bg-transparent text-md border-none outline-none p-2 text-gray-700 placeholder-gray-400"
						/>
					</div>

					{/* Danh sách các đoạn chat */}
					<ul className="items-center justify-center overflow-y-auto">
						{chats.length > 0 ? (
							chats.map((chat) => (
								<li key={chat.id} className="cursor-pointer" onClick={() => {
									setSelectedChat(chat);
									setShowChatList(false);
								}}>
									<UserChatCard
										id={chat.id}
										name={chat.name}
										avatar={chat.avatar}
										lastChat={chat.lastChat}
										lastChatSince={chat.lastChatSince}
									/>
								</li>
							))
						) : (
							<li className="p-2 text-center">Không có tin nhắn</li>
						)}
					</ul>
				</div>
			) : null}
		</div>

	);
};

export default ChatList;
