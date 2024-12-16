import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';


export interface MessageObject {
	text: string;
	user: string;
}

interface MessagesProps {
	messages: MessageObject[];
	name: string;
}

const Messages: React.FC<MessagesProps> = ({ messages, name }) => (
	<ScrollToBottom className="flex-auto overflow-auto ps-2">
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Messages;
