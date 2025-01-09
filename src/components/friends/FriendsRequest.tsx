import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { FriendshipResponse } from "../../types/Friendship";
import { useUser } from "../../utils/CustomHook";
import { fetchFriendRequestByUser } from "../../redux/slice/friendSlice";
import { editFriendshipStatus } from "../../services/FriendshipService";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { DEFAULT_AVATAR } from "../../utils/Constant";

const FriendsRequest = () => {

     const user = useUser();
     const dispatch = useAppDispatch();
     const { friendRequest } = useAppSelector(state => state.friend)

     const [acceptedList, setAcceptedList] = useState<number[]>([]);

     useEffect(() => {
          dispatch(fetchFriendRequestByUser({ userId: Number(user.id), pageNum: 0 }))
     }, [dispatch, user.id])

     const handleAcceptRequest = async (friendShipId: number) => {
          console.log(friendShipId)
          const response = await editFriendshipStatus(friendShipId, "ACCEPTED")
          if (response && response.code === 1000) {
               setAcceptedList((prev) => [...prev, friendShipId]);
          }
     }

     return (
          <div className="p-4 border border-sky-500 rounded-lg drop-shadow-md">
               <div className="grid grid-cols-2 gap-8">
                    {
                         friendRequest.map((friendship: FriendshipResponse) => (
                              <div className="flex justify-between items-center p-4 drop-shadow-lg border border-sky-300 rounded-lg">
                                   <div className="flex justify-between items-center">
                                        <img src={friendship.requesterAvatar ? friendship.requesterAvatar : DEFAULT_AVATAR}
                                             alt="error"
                                             className="w-[60px] h-[60px] rounded-lg object-cover object-center"
                                        />
                                        <div className="flex flex-col ml-4">
                                             <span className="font-semibold text-lg">{friendship.requesterName}</span>
                                             <span className="text-gray-500">{friendship.mutualFriend ? `${friendship.mutualFriend} bạn chung` : "Chưa có bạn chung nào"}</span>
                                        </div>
                                   </div>
                                   {
                                        acceptedList.includes(friendship.friendshipId) ? (
                                             <div className="flex items-center gap-1 text-sky-500 font-semibold">
                                                  <AiOutlineCheckCircle className="animate-bounce" /> Đã kêt bạn
                                             </div>

                                        ) : (
                                             <div className="flex flex-col gap-4">
                                                  <button onClick={() => handleAcceptRequest(Number(friendship.friendshipId))} className="py-1 px-4 bg-sky-600 text-white rounded-lg">Accept</button>
                                                  <button className="py-1 px-4 bg-rose-500 text-white rounded-lg">Decline</button>
                                             </div>
                                        )
                                   }
                              </div>
                         ))
                    }
               </div>
               {
                    friendRequest.length === 0 && <div className="font-bold text-md text-center text-sky-800">Bạn chưa có lời mời kết bạn nào</div>
               }
          </div>
     )
};

export default FriendsRequest;
