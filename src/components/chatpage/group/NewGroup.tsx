import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";
import { useAppDispatch } from "../../../redux/hook";
import { handleCreateGroup } from "../../../redux/slice/chatSlice";
import { UserDTO } from "../../../types/User";
import { Avatar } from "antd";
import { uploadGroupChatImage } from "../../../services/ImagesService";

interface INewGroupProps {
     groupMember: UserDTO[];
     setIsGroup: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewGroup = ({groupMember, setIsGroup}: INewGroupProps) => {
     const [isImageUploading, setIsImageUploading] = useState<boolean>(false)
     const [groupName, setGroupName] = useState<string>("")
     const [groupImage, setGroupImage] = useState<File | null>(null);
     const dispatch = useAppDispatch();

     const createGroupChat = async () => {
          setIsImageUploading(true);
          const userIds = groupMember.map(member => member.id);
          let chatImageUrl: string = "";
          if(groupImage) {
               const response  = await uploadGroupChatImage(groupImage);
               chatImageUrl = response.url;
          }
          dispatch(handleCreateGroup({chatName: groupName, chatImage: chatImageUrl ? chatImageUrl : "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png", userIds: userIds}));
          setIsGroup(false);
          setIsImageUploading(false)
     }

     return (
          <div className="w-full h-full">
               <div className="flex items-center space-x-10 bg-sky-700 text-white pt-16 px-10 pb-5">
                    <BsArrowLeft className="cursor-pointer text-2xl font-bold" />
                    <p className="text-xl font-semibold">Tạo nhóm</p>
               </div>
               <div className="flex flex-col justify-center items-center my-12">
                    <label htmlFor="imgInput" className="relative">
                         <Avatar className={`h-52 w-52 ${isImageUploading ? "opacity-40" : ''}`} src={groupImage ? URL.createObjectURL(groupImage) : "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"} />
                         {isImageUploading && <CircularProgress className="absolute top-[5rem] left-[6rem]" />}
                    </label>
                    <input type="file"
                         id="imgInput"
                         className="hidden"
                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              if (e.target.files && e.target.files.length > 0) {
                                   setGroupImage(e.target.files[0]);
                               }
                         }}
                    />
               </div>
               <div className="w-full flex justify-between items-center py-2 px-5">
                    <input className="w-full outline-none border-b-2 border-sky-600 px-2 bg-transparent" placeholder="Tên nhóm" value={groupName} onChange={(e) => setGroupName(e.target.value)} type="text" />
               </div>

               {
                    groupName &&
                    <div className="py-10 bg-slate-200 flex items-center justify-center">
                         <Button onClick={createGroupChat}>
                              <div className="bg-sky-600 rounded-full p-4">
                                   <BsCheck2 className="text-white font-bold text-3xl" />
                              </div>
                         </Button>
                    </div>
               }

          </div>
     )
};

export default NewGroup;
