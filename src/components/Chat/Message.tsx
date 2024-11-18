import React from 'react';
import avt from '../../assets/me1.jpg';


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
			<div className="flex justify-end items-end my-2 me-1">
				<div className="inline-block max-w-[80%] bg-[#2979FF] rounded-[20px] p-2 px-3">
					<p className="text-white text-md break-words">{text}</p>
				</div>
			</div>
		) : (
			<div className="flex justify-start items-end my-2 gap-1">
				<img src={avt}
					className="border border-sky-600 rounded-[100%] h-8 w-8"
					alt="error"
				/>
				<div className="inline-block max-w-[80%] bg-[#F3F3F3] rounded-[20px] p-2 px-3">
					<p className="text-[#353535] text-md break-words">{text}</p>
				</div>
			</div>
		)
	);
};

export default Message;
