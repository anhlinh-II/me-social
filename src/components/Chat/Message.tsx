import React from 'react';


interface MessageProps {
  message: {
    text: string;
    user: string;
  };
  name: string;
}

const Message: React.FC<MessageProps> = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? (
      <div className="flex justify-end items-center mt-1 px-[5%]">
        <p className="text-[#828282] font-helvetica flex items-center pr-2">{trimmedName}</p>
        <div className="inline-block max-w-[80%] bg-[#2979FF] rounded-[20px] p-1.5 px-5">
          <p className="text-white text-[1.1em] break-words">{text}</p>
        </div>
      </div>
    ) : (
      <div className="flex justify-start items-center mt-1 px-[5%]">
        <div className="inline-block max-w-[80%] bg-[#F3F3F3] rounded-[20px] p-1.5 px-5">
          <p className="text-[#353535] text-[1.1em] break-words">{text}</p>
        </div>
        <p className="text-[#828282] font-helvetica flex items-center pl-2">{user}</p>
      </div>
    )
  );
};

export default Message;
