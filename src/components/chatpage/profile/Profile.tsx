import { useState } from "react";
import { BsArrowLeft, BsCheck2, BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface IProfileProps {
     handleCloseOpenProfile: () => void
}

const Profile = ({ handleCloseOpenProfile }: IProfileProps) => {
     const [flag, setFlag] = useState<boolean>(false)
     const navigate = useNavigate();
     const [username, setUsername] = useState<string>("");

     const handleNavigate = () => {
          navigate(-1);
     }

     const handleFlag = () => {
          setFlag(true)
     }

     const handleCheckClick = () => {
          setFlag(false)
     }

     const handleChange = (e: any) => {
          setUsername(e.target.value)
          console.log(username)
     }

     return (
          <div className="h-full w-full">
               <div className="flex items-center space-x-10 bg-sky-700 text-white pt-16 px-10 pb-5">
                    <BsArrowLeft className="cursor-pointer text-2xl font-bold" onClick={handleCloseOpenProfile} />
                    <p className="cursor-pointer font-semibold"> Profile</p>
               </div>
               {/* update profile pics section  */}
               <div className="flex flex-col justify-center items-center my-12">
                    <label htmlFor="">
                         <img className="rounded-full w-[15vw] h-[15vw] cursor-pointer" src="https://i.pinimg.com/474x/0c/6e/5f/0c6e5fd9d1c81dc0837305cce3344a19.jpg" alt="" />
                    </label>
                    <input type="file" name="" id="imgInput" className="hidden" />
               </div>
               {/* name section */}
               <div className="bg-white px-3">
                    <p className="py-3">Tên của bạn</p>
                    {
                         !flag && <div className="w-full flex justify-between items-center">
                              <p className="py-3">{username || "username"}</p>
                              <BsPencil onClick={handleFlag} className="cursor-pointer" />
                         </div>
                    }
                    {
                         flag &&
                         <div className="w-full flex justify-between items-center py-2">
                              <input onChange={handleChange} type="text" placeholder="Nhập tên của bạn" className="w-[80%] outline-none border-b-2 border-sky-700 p-2" />
                              <BsCheck2 className="cursor-pointer text-2xl" onClick={handleCheckClick} />
                         </div>
                    }
               </div>
               <div className="px-3 my-5">
                    <p className="py-10">Đây không phải là username của bạn, tên này sẽ chỉ hiện thị trong ứng dụng chat</p>
               </div>
          </div>
     )
};

export default Profile;
