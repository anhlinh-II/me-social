import { useState } from "react"
import { BsCameraVideoFill } from "react-icons/bs";
import {  FaImage } from "react-icons/fa6";
import CreatePostModal from "../modal/Post.create.modal";
import { SiGoogledocs } from "react-icons/si";

const CreatePost = () => {

     const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

     return (
          <div className="p-5 w-full h-max border-solid border-[1px] mt-2 align-center rounded-lg bg-white shadow-md text-sky-800">
               <div className="flex gap-4 justify-start items-center">
                    <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/458632275_418614794573295_2633384543465741474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UvdxpgBoLT0Q7kNvgHOh1n4&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AFNJnXuNp14Kj0-EzvTI1pv&oh=00_AYBbUGyCKi1w35uyT0xgmbl1dl3ZzOqHVQV65pTnFTnxsQ&oe=670C7E4F"
                         className="rounded-[100%] text-base h-10 w-10 "
                         alt="error"
                    />
                    <input
                         onClick={() => setShowCreateModal(true)}
                         className="hover:bg-sky-500/25 duration-200 block w-full p-2 cursor-pointer indent-4 text-gray-900 border border-sky-400 focus:ring-blue-500 rounded-3xl bg-zinc-100 text-base focus:outline-sky-600 focus:border-blue-500 dark:bg-zinc-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         type="text"
                         placeholder="What's on your mind, bro...?"
                    />
               </div>
               <div className="flex gap-10 justify-center items-center mt-6">
                    <div className="flex justify-center items-center gap-2 text-base cursor-pointer"><FaImage /> <span>Media</span></div>
                    <div className="flex justify-center items-center gap-2 text-base cursor-pointer"><BsCameraVideoFill /><span>Video</span></div>
                    <div className="flex justify-center items-center gap-2 text-base cursor-pointer"><SiGoogledocs /> <span>Write Artical</span></div>
               </div>
               <CreatePostModal
                    show={showCreateModal}
                    setShow={setShowCreateModal}
               />
          </div>

     )
};

export default CreatePost;
