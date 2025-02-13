import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";

const NewGroup = () => {
     const [isImageUploading, setIsImageUploading] = useState<boolean>(false)
     const [groupName, setGroupName] = useState<string>("")
     return (
          <div className="w-full h-full">
               <div className="flex items-center space-x-10 bg-sky-700 text-white pt-16 px-10 pb-5">
                    <BsArrowLeft className="cursor-pointer text-2xl font-bold" />
                    <p className="text-xl font-semibold">Tạo nhóm</p>
               </div>
               <div className="flex flex-col justify-center items-center my-12">
                    <label htmlFor="imgInput" className="relative">
                         <img className="h-52 w-52" src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" />
                         {isImageUploading && <CircularProgress className="absolute top-[5rem] left-[6rem]" />}
                    </label>
                    <input type="file"
                         id="imgInput"
                         className="hidden"
                         onChange={() => console.log("imageonchange")}
                    />
               </div>
               <div className="w-full flex justify-between items-center py-2 px-5">
                    <input className="w-full outline-none border-b-2 border-sky-600 px-2 bg-transparent" placeholder="Tên nhóm" value={groupName} onChange={(e) => setGroupName(e.target.value)} type="text" />
               </div>

               {
                    groupName &&
                    <div className="py-10 bg-slate-200 flex items-center justify-center">
                         <Button>
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
