import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Friends = () => {
     return (
          <div className="w-full border border-gray-300 rounded-xl drop-shadow-sm p-4">
               <div className="relative">
                    <IoIosSearch className="absolute left-2 top-2.5 text-gray-400" />
                    <input type="text" placeholder={"Search"} className="focus:outline-none border border-gray-300 rounded-xl indent-6 p-1 w-[300px]" />
               </div>
               {/* listfriend */}
               <div className="mt-4 grid grid-cols-3 gap-4">
                    {/* a friend */}
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <span className="cursor-pointer p-2 hover:bg-gray-100 rounded-[100%]"><BsThreeDots /></span>
                    </div>
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <span className="cursor-pointer p-2 hover:bg-gray-100 rounded-[100%]"><BsThreeDots /></span>
                    </div>
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <span className="cursor-pointer p-2 hover:bg-gray-100 rounded-[100%]"><BsThreeDots /></span>
                    </div>
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <span className="cursor-pointer p-2 hover:bg-gray-100 rounded-[100%]"><BsThreeDots /></span>
                    </div>
               </div>
          </div>
     )
}
export default Friends;
