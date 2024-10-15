import React from 'react';

import './Input.css';

interface InputProps {
  setMessage: (message: string) => void;
  sendMessage: (event: React.FormEvent<HTMLFormElement>) => void;
  message: string;
}

const Input: React.FC<InputProps> = ({ setMessage, sendMessage, message }) => {
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form className="form" onSubmit={sendMessage}>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={handleKeyPress}
      />
      <button className="sendButton" type="submit">Send</button>
    </form>
  );
};

export default Input;
