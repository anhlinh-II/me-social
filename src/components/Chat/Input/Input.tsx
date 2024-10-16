import React from 'react';


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
    <form className="flex border-t-2 border-[#D3D3D3] h-[48px]" onSubmit={sendMessage}>
  <input
    className="border-none rounded-none p-[2%] w-[80%] text-base focus:outline-none"
    type="text"
    placeholder="Type a message..."
    value={message}
    onChange={({ target: { value } }) => setMessage(value)}
    onKeyPress={handleKeyPress}
  />
  <button className="text-white uppercase bg-[#2979FF] p-[10px] inline-block border-none w-[20%]" type="submit">
    Send
  </button>
</form>

  );
};

export default Input;
