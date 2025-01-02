import { useState } from "react"
import { BsCameraVideoFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa6";
import CreatePostModal from "../modal/Post.create.modal";
import { SiGoogledocs } from "react-icons/si";
import { useUser } from "../../utils/CustomHook";
import { Avatar } from "antd";

const CreatePost = () => {

     const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
     const user = useUser();

     return (
          <div className="p-5 md:w-[600px] sm:w-full h-max border-solid border-[1px] align-center rounded-lg bg-white shadow-md text-sky-800">
               <div className="flex gap-4 justify-start items-center pb-4 border-b border-gray-200">
                    <Avatar
                         size="large"
                         src={user.avatarUrl ? user.avatarUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                         alt="error"
                         className="border-sky-400"
                    />
                    <input
                         onClick={() => setShowCreateModal(true)}
                         className="hover:bg-sky-500/25 duration-200 w-[90%] block p-2 cursor-pointer indent-4 text-gray-900 border border-sky-400 focus:ring-blue-500 rounded-3xl bg-zinc-100 text-base focus:outline-sky-600 focus:border-blue-500 dark:bg-zinc-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         type="text"
                         placeholder={`Bạn đang nghĩ gì vậy, ${user.username}?`}
                    />
               </div>
               <div className="flex gap-10 justify-center items-center mt-4">
                    <div onClick={() => setShowCreateModal(true)} className="flex justify-center items-center gap-2 text-base cursor-pointer" ><FaImage /> <span>Hình ảnh</span></div>
                    <div onClick={() => setShowCreateModal(true)} className="flex justify-center items-center gap-2 text-base cursor-pointer"><BsCameraVideoFill /><span>Video</span></div>
                    <div onClick={() => setShowCreateModal(true)} className="flex justify-center items-center gap-2 text-base cursor-pointer"><SiGoogledocs /> <span>Đề tài</span></div>
               </div>
               <CreatePostModal
                    show={showCreateModal}
                    setShow={setShowCreateModal}
               />
          </div>

     )
};

export default CreatePost;
