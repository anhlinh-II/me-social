import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

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

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar chatName={"Ronaldo"} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
