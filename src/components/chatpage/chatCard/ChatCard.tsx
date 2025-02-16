import { Avatar } from "antd";

interface IChatCardProps {
     avatarUrl: string;
     username: string;
}
const ChatCard = ({avatarUrl, username}: IChatCardProps) => {
     return (
          <div className="flex items-center justify-center py-2 group cursor-pointer">
               <div className="w-[20%]">
                    <Avatar className="h-14 w-14 rounded-full" src={avatarUrl} alt="" />
               </div>
               <div className="w-[80%]">
                    <div className="flex justify-between items-center">
                         <p className="text-lg">{username}</p>
                         <p className="text-sm"> timestamp</p>
                    </div>
                    <div className="flex justify-between items-center">
                         <p>message...</p>
                         <div className="flex space-x-2 items-center">
                              <p className="text-xs py-1 px-2 text-white bg-sky-500 rounded-full">5</p>
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default ChatCard;
