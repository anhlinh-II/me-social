import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import queryString from 'query-string';
import { IoClose } from 'react-icons/io5';
import UserChatCard from '../../user/UserChatCard';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

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
	const [messages, setMessages] = useState<Message[]>([]);
	const [showChatList, setShowChatList] = useState<boolean>(true);
	const [selectedChat, setSelectedChat] = useState<UserChat | null>(null);

	useEffect(() => {
		// Lấy name và room từ query string trong URL
		const { name, room } = queryString.parse(location.search) as { name: string; room: string };

		// Kết nối với socket
		socket = io(ENDPOINT);

		setRoom(room);
		setName(name);

		// Emit sự kiện "join" để tham gia phòng chat
		socket.emit('join', { name, room }, (error: any) => {
			if (error) {
				alert(error);
			}
		});

		// Cleanup socket khi component unmount
		return () => {
			socket.disconnect();
		};
	}, [location.search]);

	useEffect(() => {
		// Lắng nghe sự kiện "message" từ server
		socket.on('message', (message: Message) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		});

		// Lắng nghe sự kiện "roomData" để nhận danh sách người dùng trong phòng
		socket.on('roomData', ({ users }: { users: User[] }) => {
			setUsers(users);
		});
	}, []);

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (message) {
			// Emit sự kiện "sendMessage" để gửi tin nhắn
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	return (
		<div>
			{showChatList ? (
				<div className="flex flex-col absolute top-[72px] right-[5%] z-10 justify-start h-[85vh] w-[360px] bg-white rounded-lg">
					{/* Tiêu đề đoạn chat */}
					<p className="text-2xl ms-4 mt-2 mb-4 font-bold">Đoạn chat</p>

					{/* Danh sách các đoạn chat */}

					<ul className="items-center justify-center">
						{chats.length > 0 ? (
							chats.map((chat) => (
								<li key={chat.id} className="cursor-pointer" onClick={() => {
									setSelectedChat(chat);
									setShowChatList(false); // Ẩn danh sách đoạn chat
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
				<div className="absolute bottom-0 right-[5%] z-10 flex flex-col justify-start h-[60vh] w-[360px] bg-white rounded-lg">
					<div className="absolute right-4 top-3">
						<IoClose size={25} onClick={() => setSelectedChat(null)} className="cursor-pointer" />
					</div>
					<div className="flex flex-col justify-between bg-white rounded-[8px] h-full w-full">
						<InfoBar chatName={selectedChat.name} />
						<Messages messages={messages} name={name} />
						<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
					</div>
				</div>
			)}
		</div>

	);
};

export default Chat;
