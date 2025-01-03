import { IoIosSearch } from "react-icons/io";
import { useUser } from "../../utils/CustomHook";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { fetchSuggestedFriend, handleSendFriendRequest } from "../../redux/slice/friendSlice";
import { UserDTO } from "../../types/User";
import { DEFAULT_AVATAR } from "../../utils/Constant";
import { Spin } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Suggestion = () => {
  const user = useUser();
  const { suggestedFriend, isLoading, error } = useAppSelector((state) => state.friend);
  const dispatch = useAppDispatch();

  // Lưu trạng thái của các yêu cầu đã gửi
  const [sentRequests, setSentRequests] = useState<number[]>([]);

  useEffect(() => {
    dispatch(fetchSuggestedFriend({ userId: Number(user.id), pageNum: 0 }));
  }, [dispatch, user.id]);

  const handleOnlickAdd = (receiverId: number) => {
    dispatch(handleSendFriendRequest({ requesterId: Number(user.id), receiverId }));
    setSentRequests((prev) => [...prev, receiverId]); // Thêm ID vào danh sách đã gửi
  };

  return (
    <div className="p-4 border border-sky-500 rounded-lg drop-shadow-md">
      <div className="relative">
        <IoIosSearch className="absolute left-2 top-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none border border-gray-300 rounded-xl indent-6 p-1 w-[300px]"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {suggestedFriend.map((friend: UserDTO, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 drop-shadow-lg border border-sky-200 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <img
                src={friend.avatarUrl ? friend.avatarUrl : DEFAULT_AVATAR}
                alt="error"
                className="w-[100px] h-[100px] rounded-lg object-cover object-center"
              />
              <div className="flex flex-col ml-4">
                <span className="font-semibold text-lg">
                  {friend.firstName} {friend.lastName}
                </span>
                <span className="text-gray-500">
                  {friend.mutualFriendsNum
                    ? `${friend.mutualFriendsNum} bạn chung`
                    : "Chưa có bạn chung nào"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {sentRequests.includes(friend.id) ? (
                <div className="flex items-center gap-2 text-sky-500 font-semibold">
                  <AiOutlineCheckCircle className="animate-bounce" /> Đã gửi lời mời
                </div>
              ) : (
                <button
                  onClick={() => handleOnlickAdd(friend.id)}
                  disabled={isLoading}
                  className={`px-4 py-2 text-white rounded-lg ${isLoading ? "bg-sky-600/50 cursor-not-allowed" : "bg-sky-600"
                    }`}
                >
                  {isLoading ? <Spin size="small" /> : "Kết bạn"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
