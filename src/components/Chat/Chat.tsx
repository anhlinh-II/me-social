import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import queryString from 'query-string';
import { IoClose } from 'react-icons/io5';
import UserChatCard from '../user/UserChatCard';
import InfoBar from './InfoBar';
import Messages, { MessageObject } from './Messages';
import Input from './Input';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';

const ENDPOINT = 'http://localhost:8080/';
let socket: any;

// Định nghĩa Message và User
interface Message {
	text: string;
	user: string;
}

interface User {
	name: string;
}

interface UserChat {
	id: number;
	name: string;
	avatar: string;
	lastChat: string;
	lastChatSince: string;
}

interface ChatProps {
	chats: UserChat[];
}

const Chat: React.FC<ChatProps> = ({ chats }) => {
	const location = useLocation();
	const [name, setName] = useState<string>('');
	const [room, setRoom] = useState<string>('');
	const [users, setUsers] = useState<User[]>([]);
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<MessageObject[]>([]);
	const [showChatList, setShowChatList] = useState<boolean>(true);
	const [selectedChat, setSelectedChat] = useState<UserChat | null>(null);

	// useEffect(() => {
	// 	// Lấy name và room từ query string trong URL
	// 	const { name, room } = queryString.parse(location.search) as { name: string; room: string };

	// 	// Kết nối với socket
	// 	socket = io(ENDPOINT);

	// 	setRoom(room);
	// 	setName(name);

	// 	// Emit sự kiện "join" để tham gia phòng chat
	// 	socket.emit('join', { name, room }, (error: any) => {
	// 		if (error) {
	// 			alert(error);
	// 		}
	// 	});

	// 	// Cleanup socket khi component unmount
	// 	return () => {
	// 		socket.disconnect();
	// 	};
	// }, [location.search]);

	// useEffect(() => {
	// 	// Lắng nghe sự kiện "message" từ server
	// 	socket.on('message', (message: Message) => {
	// 		//setMessages((prevMessages) => [...prevMessages, message]);
	// 	});

	// 	// Lắng nghe sự kiện "roomData" để nhận danh sách người dùng trong phòng
	// 	socket.on('roomData', ({ users }: { users: User[] }) => {
	// 		setUsers(users);
	// 	});
	// }, []);

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (message) {
			// Emit sự kiện "sendMessage" để gửi tin nhắn
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	
	useEffect(() => {
		setMessages([
		  { text: "Hello everyone!", user: "alice" },
		  { text: "Hi Alice, how are you?", user: "john" },
		  { text: "I'm good, thanks for asking!", user: "alice" },
		  { text: "Great to hear that!", user: "john" },
		  { text: "What are you working on?", user: "alice" },
		  { text: "Just finishing up a project.", user: "john" },
		  { text: "What are you working on?", user: "alice" },
		  { text: "Just finishing up a project.", user: "john" },
		  { text: "What are you working on?", user: "alice" },
		  { text: "Just finishing up a project. What are you working on?", user: "john" },
		]);
	  }, []);
	  

	return (
		<div>
			{showChatList ? (
				<div className="flex flex-col fixed top-[72px] right-[2%] z-10 justify-start h-[85vh] w-[360px] bg-white rounded-lg">
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
			{selectedChat && (
				<div className="fixed bottom-0 right-[5%] z-10 flex flex-col justify-start h-[65vh] w-[360px] 
					bg-white rounded-t-lg"
					style={{
						boxShadow: '0 12px 28px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .1)',
					}}>
					<div className="absolute right-2 top-2 z-20 p-1 rounded-full hover:bg-blue-400">
						<IoClose size={25} onClick={() => setSelectedChat(null)} className="cursor-pointer text-gray-200" />
					</div>
					<div className="flex flex-col justify-between bg-white rounded-lg h-full w-full">
						<InfoBar chatName={selectedChat.name} avtUrl={selectedChat.avatar} />
						<Messages messages={messages} name={'john'} />
						<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
					</div>
				</div>
			)}
		</div>

	);
};

export default Chat;
