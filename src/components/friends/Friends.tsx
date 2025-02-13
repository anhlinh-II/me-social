import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useUser } from "../../utils/CustomHook";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useRef, useState } from "react";
import { fetchFriendByUser } from "../../redux/slice/friendSlice";
import { FriendshipResponse } from "../../types/Friendship";
import { DEFAULT_AVATAR } from "../../utils/Constant";
import { deleteFriendship, editFriendshipStatus } from "../../services/FriendshipService";
import { message } from "antd";

const Friends = () => {
     const user = useUser();
     const dispatch = useAppDispatch();
     const { friends } = useAppSelector((state) => state.friend);

     const [openOptionsFriendId, setOpenOptionsFriendId] = useState<number | null>(null);

     const wrapperRef = useRef(null);

     useOutsideAlerter(wrapperRef);

     function useOutsideAlerter(ref: any) {
          useEffect(() => {
               function handleClickOutside(event: any) {
                    if (ref.current && !ref.current.contains(event.target)) {
                         setOpenOptionsFriendId(null)
                    }
               }
               if (openOptionsFriendId) {
                    // Bind the event listener
                    document.addEventListener("mousedown", handleClickOutside);
                    return () => {
                         // Unbind the event listener on clean up
                         document.removeEventListener("mousedown", handleClickOutside);
                    };
               }

          }, [ref, openOptionsFriendId]);
     }

     useEffect(() => {
          dispatch(fetchFriendByUser({ userId: Number(user.id), page: 0, size: 10 }));
     }, [dispatch, user.id]);

     const handleOnClickOptions = (friendId: number) => {
          setOpenOptionsFriendId((prev) => (prev === friendId ? null : friendId));
     };

     const handleOnlickUnfriend = async (friendShipId: number, friendName: string) => {
          const response = await deleteFriendship(friendShipId);
          if (response && response.data.code === 1000) {
               message.success(`Hủy kết bạn với ${friendName} thành công!`)
               dispatch(fetchFriendByUser({ userId: Number(user.id), page: 0, size: 10 }))
          }
     }

     const handleBlockFriend = async (friendShipId: number, status: string, friendName: string) => {
          const response = await editFriendshipStatus(friendShipId, status)
          if (response && response.code === 1000) {
               message.success(`Đã chặn ${friendName}`)
          }
     }

     return (
          <div className="w-full border border-gray-300 rounded-xl drop-shadow-sm p-4">
               <div>
                    {
                         friends.length > 0 && (
                              <div className="relative mb-4">
                                   <IoIosSearch className="absolute left-2 top-2.5 text-gray-400" />
                                   <input
                                        type="text"
                                        placeholder={"Search"}
                                        className="focus:outline-none border border-gray-300 rounded-xl indent-6 p-1 w-[300px]"
                                   />
                              </div>
                         )
                    }
                    {/* listfriend */}
                    <div className="grid grid-cols-3 gap-4">
                         {friends.map((friendship: FriendshipResponse, index: number) => {
                              const friendName =
                                   friendship.receiverId === Number(user.id)
                                        ? friendship.requesterName
                                        : friendship.receiverName;
                              const friendAvatar =
                                   friendship.receiverId === Number(user.id)
                                        ? friendship.requesterAvatar
                                        : friendship.receiverAvatar;
                              const friendId =
                                   friendship.receiverId === Number(user.id)
                                        ? friendship.requesterId
                                        : friendship.receiverId;

                              return (
                                   <div key={friendId} className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                                        <div className="flex justify-between items-center">
                                             <img
                                                  src={friendAvatar ? friendAvatar : DEFAULT_AVATAR}
                                                  alt="error"
                                                  className="w-[60px] h-[60px] rounded-lg object-cover object-center"
                                             />
                                             <div className="flex flex-col ml-4">
                                                  <span className="font-semibold text-lg">{friendName}</span>
                                                  <span className="text-gray-500">{friendship.mutualFriend} bạn chung</span>
                                             </div>
                                        </div>
                                        <span
                                             onClick={() => handleOnClickOptions(friendId)}
                                             className="cursor-pointer p-2 hover:bg-gray-100 rounded-[100%]"
                                        >
                                             <BsThreeDots />
                                        </span>
                                        {openOptionsFriendId === friendId && (
                                             <div ref={wrapperRef} className="absolute top-12 right-[-100px] bg-white border border-gray-300 rounded-lg shadow-lg p-2">
                                                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleOnlickUnfriend(friendship.friendshipId, friendName)}>Hủy kết bạn</button>
                                                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleBlockFriend(friendship.friendshipId, "BLOCKED", friendName)}>Chặn</button>
                                             </div>
                                        )}
                                   </div>
                              );
                         })}
                    </div>
               </div>
               {
                    friends.length === 0 && <div className="font-bold text-md text-center text-sky-800">Bạn chưa có bạn bè, hãy kết bạn nào!</div>
               }
          </div>
     );
};

export default Friends;
