import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import ChatCard from "./chatCard/ChatCard";
import { useEffect, useState } from "react";
import chatimage from '../../assets/chatapplogo.png';
import MessageCard from "./messageCard/MessageCard";
import { IoMdAttach } from "react-icons/io";
import '../../styles/ChatPage.scss';
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import { GoPlusCircle } from "react-icons/go";
import CreateGroupChat from "./group/GroupChat";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { queryUser } from "../../redux/slice/accountSlice";
import { fetchUsersChat, handleCreateChat } from "../../redux/slice/chatSlice";
import { DEFAULT_AVATAR } from "../../utils/Constant";
import { ChatResponse } from "../../types/Chat";
import { Avatar } from "antd";
import { fetchChatMessages, handleCreateMessage } from "../../redux/slice/messageSlice";
import { getChatByUserIds } from "../../services/ChatService";

const HomePage = () => {

     const [querys, setQuerys] = useState<string | undefined>("");
     const [currentChat, setCurrentChat] = useState<ChatResponse>();
     const [content, setContent] = useState<string>("");
     const [isProfile, setIsProfile] = useState<boolean>(false);
     const navigate = useNavigate();
     const [isGroup, setIsGroup] = useState<boolean>(false);

     const { account, chat, message } = useAppSelector(state => state);
     const dispatch = useAppDispatch();

     useEffect(() => {
          dispatch(fetchUsersChat());
     }, [chat.createdChat, chat.createdGroup])

     useEffect(() => {
          if (currentChat) {
               dispatch(fetchChatMessages(currentChat.id))
          }
     }, [currentChat, message.newMessage])

     const handleSearch = (value: string) => {
          dispatch(queryUser(value));
     }

     const handleClickOnSearchedChatCard = async (userId: number) => {
          // setCurrentChat(true)
          dispatch(handleCreateChat({ userId }))
          const res = await getChatByUserIds(Number(account.user.id), userId);
          if(res && res.data && res.data.result) {
               setCurrentChat(res.data.result);
          }
          setQuerys("")
     }

     const handleCreateNewMessage = () => {
          if (currentChat) {
               dispatch(handleCreateMessage({ chatId: currentChat.id, content: content, userId: Number(account.user.id) }))
          }
     }

     const handleNavigate = () => {
          setIsProfile(true)
     }

     const handelCloseProfile = () => {
          setIsProfile(false)
     }

     const handleCreateGroup = () => {
          setIsGroup(true)
     }

     const handleCurrentChat = (chat: ChatResponse) => {
          setCurrentChat(chat);
     }

     return (
          <div className="relative">
               <div className="py-14 bg-sky-600 w-full"></div>
               <div className="flex absolute bg-[#f0f2f5] h-[90vh] top-[2vw] left-[2vw] w-[96vw]">
                    {/* left part */}
                    <div className="left w-[30%] bg-white h-full">
                         {
                              isGroup && <CreateGroupChat setIsGroup={setIsGroup} />
                         }

                         {/* profile */}
                         {isProfile && <div className="w-full h-full"><Profile handleCloseOpenProfile={handelCloseProfile} /></div>}

                         {/* list message */}
                         {!isProfile && !isGroup &&
                              <div className="w-full">
                                   <div className="flex justify-between items-center p-3">
                                        <div onClick={handleNavigate} className="flex items-center space-x-3">
                                             <Avatar className="rounded-full w-10 h-10 cursor-pointer" src={account.user.avatarUrl} alt="" />
                                             <p>{account.user.username}</p>
                                        </div>
                                        <div className="space-x-3 text-2xl flex">
                                             <GoPlusCircle onClick={handleCreateGroup} className="cursor-pointer" />
                                             <TbCircleDashed className="cursor-pointer" onClick={() => { navigate(`/stories`) }} />
                                             <BiCommentDetail />
                                        </div>
                                   </div>
                                   <div className="relative flex justify-center items-center bg-white py-4 px-3">
                                        <input
                                             className="border-none outline-none bg-slate-200 rounded-md w-[93%] py-2 pl-9"
                                             type="text"
                                             placeholder="Tìm kiếm hoặc bắt đầu đoạn chat mới"
                                             onChange={(e) => {
                                                  setQuerys(e.target.value)
                                                  handleSearch(e.target.value)
                                             }}
                                             value={querys}
                                        />
                                        <AiOutlineSearch className="left-5 top-7 absolute" />
                                        <div>
                                             <BsFilter className="ml-4 text-3xl" />
                                        </div>
                                   </div>
                                   {/* all user */}
                                   <div className="bg-white overflow-y-scroll h-[71vh]">
                                        {querys && account.searchUsers.map(user =>
                                             <div className="mx-4" onClick={() => handleClickOnSearchedChatCard(user.id)}>
                                                  {" "} <hr /> <ChatCard avatarUrl={user.avatarUrl} username={user.username} /> {" "}
                                             </div>
                                        )}
                                        {chat.chats.length > 0 && !querys && chat.chats.map(chat =>
                                             <div className="mx-4" onClick={() => handleCurrentChat(chat)}>
                                                  <hr />
                                                  {
                                                       chat.group ?
                                                            <ChatCard
                                                                 avatarUrl={chat.chatImage || DEFAULT_AVATAR}
                                                                 username={chat.chatName}
                                                            />
                                                            : <ChatCard
                                                                 avatarUrl={Number(account.user.id) === Number(chat.users[0].id) ? chat.users[1].avatarUrl || DEFAULT_AVATAR : chat.users[0].avatarUrl || DEFAULT_AVATAR}
                                                                 username={Number(account.user.id) === Number(chat.users[0].id) ? chat.users[1].username : chat.users[0].username}
                                                            />
                                                  }
                                                  {" "}
                                             </div>
                                        )}
                                   </div>
                              </div>
                         }




                    </div>

                    {/* right part */}

                    {/* default page */}
                    {!currentChat && <div className="w-[70%] flex flex-col items-center justify-center h-full ">
                         <div className="max-w-[70%] text-center flex flex-col">
                              <img src={chatimage} alt="" />
                              <h1 className="text-4xl text-gray-600">Chat cùng bạn bè với MeSocial</h1>
                              <p className="my-9">MeSocial – Kết nối bạn bè mọi lúc, chia sẻ cảm xúc mọi nơi, trò chuyện không giới hạn!</p>
                         </div>
                    </div>}

                    {/* message part */}
                    {

                         currentChat &&
                         <div className="w-[70%] relative h-full bg-sky-50">
                              <div className="header absolute top-0 w-full bg-[#f0f2f5] ">
                                   <div className="flex justify-between">
                                        <div className="py-3 space-x-4 items-center px-3 flex">
                                             <Avatar
                                                  className="w-10 h-10 rounded-full object-center"
                                                  src={
                                                       currentChat.group ? currentChat.chatImage :
                                                            (Number(account.user.id) === Number(currentChat.users[0].id) ? currentChat.users[1].avatarUrl || DEFAULT_AVATAR : currentChat.users[0].avatarUrl || DEFAULT_AVATAR)
                                                  }
                                                  alt=""
                                             />
                                             <p>
                                                  {currentChat.group ? currentChat.chatName : (Number(account.user.id) === currentChat.users[0].id ? currentChat.users[1].username : currentChat.users[0].username)}
                                             </p>
                                        </div>
                                        <div className="py-3 space-x-4 items-center px-3 flex">
                                             <AiOutlineSearch />
                                             <BsThreeDotsVertical />
                                        </div>
                                   </div>
                              </div>
                              {/* message section */}
                              <div className="px-10 overflow-y-scrol ">
                                   <div className="space-y-1 flex flex-col justify-center mt-20 py-2">
                                        {message.messages.length > 0 && message.messages.map((item, i) => <MessageCard isReqUserMessage={item.sender.username !== account.user.username} content={item.content} />)}
                                   </div>
                              </div>

                              {/* footer part */}
                              <div className="footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl">
                                   <div className="flex justify-between items-center px-5 relative" >
                                        <div className="flex">
                                             <BsEmojiSmile className="cursor-pointer" />
                                             <IoMdAttach />
                                        </div>
                                        <input
                                             className="py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]"
                                             type="text"
                                             onChange={(e) => setContent(e.target.value)}
                                             value={content}
                                             placeholder="Nhập tin nhắn"
                                             onKeyPress={(e) => {
                                                  if (e.key === "Enter") {
                                                       handleCreateNewMessage();
                                                       setContent("");
                                                  }
                                             }}
                                        />
                                        <BsMicFill />
                                   </div>

                              </div>
                         </div>
                    }

               </div>
          </div>
     )
};

export default HomePage;
