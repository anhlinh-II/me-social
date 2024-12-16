import { GoDash } from "react-icons/go";
import { io } from "socket.io-client";
import { IoClose } from "react-icons/io5";
import { UserChat } from "./ChatList"
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages, { MessageObject } from "./Messages";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";

const ENDPOINT = "http://localhost:8086";
let socket: any;

interface ChatProps {
    selectedChat: UserChat;
    position: string;
    setSelectedChat: () => void;
}

const Chat = ({ selectedChat, position, setSelectedChat }: ChatProps) => {
	const currentUser = useAppSelector(state => state.account.user);
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<MessageObject[]>([]);

	useEffect(() => {
		// Kết nối với backend
		socket = io(ENDPOINT);
	
		// Lắng nghe sự kiện nhận tin nhắn từ server
		socket.on("message", (newMessage: MessageObject) => {
		  setMessages((prevMessages) => [...prevMessages, newMessage]);
		});
	
		return () => {
		  // Ngắt kết nối khi component bị unmount
		  socket.disconnect();
		};
	  }, []);
	
	  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	
		if (message) {
		  socket.emit("sendMessage", { text: message, user: currentUser.name }, () => {
			setMessage(""); 
		  });
		}
	  };
			
	useEffect(() => {
		setMessages([
			{ text: "Hello everyone!", user: "alice" },
			{ text: "Hi Alice, how are you?", user: "john" },
			{ text: "I'm good, thanks for asking!", user: "alice" },
			{ text: "Great to hear that!", user: "john" },
			{ text: "What are you working on?", user: "alice" },
			{ text: "Just finishing up a project. What are you working on?", user: "john" },
			{ text: "I started a business in Chicago 3 months ago and its working well", user: "alice" },
			{ text: "Oh! Thats amazing girl", user: "john" },
		]);
	}, []);
		
    
    return <div className={`fixed bottom-0 ${position} z-10 flex flex-col justify-start h-[65vh] w-[340px] 
					bg-white rounded-t-lg`}
                style={{
                    boxShadow: '0 12px 28px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .1)',
                }}>
                <div className="absolute right-2 top-2 z-20 p-1 rounded-full hover:bg-gray-100">
                    <IoClose size={25} onClick={setSelectedChat} className="cursor-pointer text-[#0199FC]" />
                </div>
                <div className="absolute right-12 top-2 z-20 p-1 rounded-full hover:bg-gray-100">
                    <GoDash size={25} className="cursor-pointer text-[#0199FC]" />
                </div>
                <div className="flex flex-col justify-between bg-white rounded-lg h-full w-full">
                    <InfoBar chatName={selectedChat.name} avtUrl={selectedChat.avatar} />
                    <Messages messages={messages} name={'john'} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
}

export default Chat;