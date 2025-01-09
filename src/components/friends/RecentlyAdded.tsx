import { List } from "lodash";
import { useEffect, useState } from "react";
import { FriendshipResponse } from "../../types/Friendship";
import { useUser } from "../../utils/CustomHook";
import { getCurrentAcceptedFriend } from "../../services/FriendshipService";
import { DEFAULT_AVATAR } from "../../utils/Constant";

const RecentlyAdded = () => {

     const user = useUser();

     const [currentAcceptedList, setCurrentAcceptedList] = useState<FriendshipResponse[] | undefined>([]);

     useEffect(() => {
          fetchCurrentAcceptedFriends(Number(user.id))
     }, [user.id])

     const fetchCurrentAcceptedFriends = async (userId: number) => {
          const response = await getCurrentAcceptedFriend(userId);
          if (response && response.data.code === 1000) {
               setCurrentAcceptedList(response?.data?.result)
          }
     }

     const formatTimeAgo = (timestamp: string): string | null => {
          const now = new Date(); // Thời gian hiện tại
          const date = new Date(timestamp); // Chuyển đổi timestamp thành Date
          const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000); // Chênh lệch theo giây

          if (diffInSeconds < 60) return `${diffInSeconds} giây trước`;

          const diffInMinutes = Math.floor(diffInSeconds / 60);
          if (diffInMinutes < 60) return `${diffInMinutes} phút trước`;

          return null;
     };

     return (
          <div className="p-4 border border-sky-500 rounded-lg drop-shadow-none">
               <div className="grid grid-cols-2 gap-4">
                    {currentAcceptedList?.map(friendship => {
                         const friendName = friendship.receiverId === Number(user.id) ? friendship.requesterName : friendship.receiverName;
                         const friendAvatar = friendship.receiverId === Number(user.id) ? friendship.requesterAvatar : friendship.receiverAvatar;
                         return (
                              <div className="flex justify-between items-center p-4 drop-shadow-lg border border-sky-300 rounded-lg">
                                   <div className="flex justify-between items-center">
                                        <img src={friendAvatar ? friendAvatar : DEFAULT_AVATAR}
                                             alt="error"
                                             className="w-[60px] h-[60px] rounded-lg object-cover object-center"
                                        />
                                        <div className="flex flex-col ml-4">
                                             <span className="font-semibold text-lg">{friendName}</span>
                                             <span className="text-gray-500">{friendship.mutualFriend} bạn chung</span>
                                        </div>
                                   </div>
                                   <div className="flex flex-col gap-4">
                                        <span className="font-bold text-gray-400">{formatTimeAgo(friendship.acceptedAt)}</span>
                                   </div>
                              </div>
                         )
                    })}
               </div>
               {
                    currentAcceptedList?.length === 0 && (
                         <div className="font-bold text-md text-center text-sky-800">Chưa có bạn bè nào được thêm gần đây!</div>
                    )
               }
          </div>
     )
};

export default RecentlyAdded;
