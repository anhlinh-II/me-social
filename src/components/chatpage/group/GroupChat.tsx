import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SelectedMember from "./SelectedMember";
import ChatCard from "../chatCard/ChatCard";
import NewGroup from "./NewGroup";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { queryUser } from "../../../redux/slice/accountSlice";
import { UserDTO } from "../../../types/User";

interface IProps {
     setIsGroup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateGroupChat = ({setIsGroup}: IProps) => {
     const [newGroup, setNewGroup] = useState<boolean>(false);
     const [query, setQuery] = useState<string>("");
     const [groupMember, setGroupMember] = useState<Set<UserDTO>>(new Set());
     const { account } = useAppSelector(state => state);
     const dispatch = useAppDispatch();

     const handleRemoveMember = (item: any) => {
          groupMember.delete(item)
          setGroupMember(groupMember);
     }

     const handleSearch = (value: any) => {
          dispatch(queryUser(value));
     }

     return (
          <div className="w-full h-full">
               {
                    !newGroup && (
                         <div>
                              <div className="flex items-center space-x-10 bg-sky-700 text-white pt-16 px-10 pb-5">
                                   <BsArrowLeft className="cursor-pointer text-2xl font-bold" />
                                   <p>Thêm thành viên</p>
                              </div>
                              <div className="relative bg-white py-4 px-3">
                                   <div className="flex space-x-2 flex-wrap space-y-1">
                                        {
                                             groupMember.size > 0 && Array.from(groupMember).map(item => <SelectedMember handleRemoveMember={() => handleRemoveMember(item)} member={item} />)
                                        }
                                   </div>
                                   <input
                                        type="text"
                                        onChange={(e) => {
                                             handleSearch(e.target.value)
                                             setQuery(e.target.value)
                                        }}
                                        className="outline-none border-b border-[#8888] p-2 w-[93%]"
                                        placeholder="Tìm kiếm bạn chat"
                                        value={query}
                                   />

                              </div>
                              <div className="bg-white overflow-y-scroll h-[50.2vh]">
                                   {
                                        query && account.searchUsers.map((item) =>
                                             <div onClick={() => {
                                                  groupMember.add(item)
                                                  setGroupMember(groupMember)
                                                  setQuery("")
                                             }}
                                                  key={item?.id}
                                             >
                                                  <hr />
                                                  <ChatCard username={item.username} avatarUrl={item.avatarUrl} />
                                             </div>
                                        )
                                   }

                              </div>
                              <div className="bottom-10 py-10 bg-slate-200 items-center flex justify-center">
                                   <div className="bg-sky-600 rounded-full p-4 cursor-pointer" onClick={() => {
                                        setNewGroup(true)
                                   }}>
                                        <BsArrowRight className="text-white font-bold text-3xl" />
                                   </div>
                              </div>
                         </div>
                    )
               }
               {
                    newGroup && <NewGroup setIsGroup={setIsGroup} groupMember={Array.from(groupMember)} />
               }
          </div>
     )
};

export default CreateGroupChat;
