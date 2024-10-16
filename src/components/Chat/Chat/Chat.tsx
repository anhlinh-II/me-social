import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import { IoClose } from 'react-icons/io5';

const ENDPOINT = 'http://localhost:8080/';

let socket: any;

// Define an interface for the message object
interface Message {
  text: string;
  user: string;
}

// Define an interface for the user object
interface User {
  name: string;
}

const Chat: React.FC = () => {
  const location = useLocation();
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]); // Specify type for users
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]); // Specify type for messages
  const [onClose, setOnClose] = useState<boolean>(true);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search) as { name: string; room: string };

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error: any) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message: Message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }: { users: User[] }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const handleClose = () => {
    setOnClose(false);
  };

  if (!onClose) {
    return null; // Không render component nếu đã đóng
  }

  return (
    <div className="flex absolute bottom-0 right-[10%] z-10 justify-center items-center h-[60vh] w-[360px] bg-[#1A1A1D]">
      <div className="absolute right-4 top-3">
        <IoClose size={25} onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="flex flex-col justify-between bg-white rounded-[8px] h-full w-full">
        <InfoBar chatName={"Ronaldo"} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>

  );
};

export default Chat;
