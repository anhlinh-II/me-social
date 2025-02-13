interface IMessageCardProps {
     isReqUserMessage: boolean;
     content: string;
}

const MessageCard = ({ isReqUserMessage, content }: IMessageCardProps) => {
     return (
          <div className={`py-2 px-2 rounded-md max-w-[50%] ${isReqUserMessage ? "self-start bg-white" : "self-end bg-sky-300"}`}>
               <p>{content}</p>
          </div>
     )
};

export default MessageCard;
