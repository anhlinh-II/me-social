import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

interface MessageObject {
  text: string;
  user: string;
}

interface MessagesProps {
  messages: MessageObject[];
  name: string;
}

const Messages: React.FC<MessagesProps> = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
