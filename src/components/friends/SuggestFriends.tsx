import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const SuggestFriends = () => {
     return (
          <div className="h-fit border-1 rounded-xl p-4">
               <div className=" text-sm ">
                    {/* title */}
                    <div className="flex justify-between font-bold ">
                         <span className="text-gray-600">Suggested for you</span>
                         <Link to={`/listFriends/suggestion`}><span className="cursor-pointer hover:text-gray-600 font-semibold">See All</span></Link>
                    </div>
                    {/* list suggest */}
                    <div className="flex flex-col mt-6">
                         <div className="mb-5 flex justify-between items-center">
                              <div className="flex justify-between">
                                   <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/458632275_418614794573295_2633384543465741474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UvdxpgBoLT0Q7kNvgHOh1n4&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AFNJnXuNp14Kj0-EzvTI1pv&oh=00_AYBbUGyCKi1w35uyT0xgmbl1dl3ZzOqHVQV65pTnFTnxsQ&oe=670C7E4F"
                                        alt="error"
                                        className="cursor-pointer rounded-[100%] text-base h-10 w-10 "
                                   />
                                   <div className="flex flex-col ml-3">
                                        <span className="font-semibold text-sm text-gray-700 cursor-pointer ">Thùy Vân</span>
                                        <span className="text-gray-400">Followed by <strong className="cursor-pointer font-semibold">Hoang Dung</strong></span>
                                   </div>
                              </div>
                              <span className="text-sky-600 cursor-pointer hover:text-gray-500 font-semibold text-sm">Add</span>
                         </div>
                         <div className="mb-5 flex justify-between items-center">
                              <div className="flex justify-between">
                                   <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/458632275_418614794573295_2633384543465741474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UvdxpgBoLT0Q7kNvgHOh1n4&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AFNJnXuNp14Kj0-EzvTI1pv&oh=00_AYBbUGyCKi1w35uyT0xgmbl1dl3ZzOqHVQV65pTnFTnxsQ&oe=670C7E4F"
                                        alt="error"
                                        className="cursor-pointer rounded-[100%] text-base h-10 w-10 "
                                   />
                                   <div className="flex flex-col ml-3">
                                        <span className="font-semibold text-sm text-gray-700 cursor-pointer ">Thùy Vân</span>
                                        <span className="text-gray-400">Followed by <strong className="cursor-pointer font-semibold">Hoang Dung</strong></span>
                                   </div>
                              </div>
                              <span className="text-sky-600 cursor-pointer hover:text-gray-500 font-semibold text-sm">Add</span>
                         </div>
                         <div className="mb-5 flex justify-between items-center">
                              <div className="flex justify-between">
                                   <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/458632275_418614794573295_2633384543465741474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UvdxpgBoLT0Q7kNvgHOh1n4&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AFNJnXuNp14Kj0-EzvTI1pv&oh=00_AYBbUGyCKi1w35uyT0xgmbl1dl3ZzOqHVQV65pTnFTnxsQ&oe=670C7E4F"
                                        alt="error"
                                        className="cursor-pointer rounded-[100%] text-base h-10 w-10 "
                                   />
                                   <div className="flex flex-col ml-3">
                                        <span className="font-semibold text-sm text-gray-700 cursor-pointer ">Thùy Vân</span>
                                        <span className="text-gray-400">Followed by <strong className="cursor-pointer font-semibold">Hoang Dung</strong></span>
                                   </div>
                              </div>
                              <span className="text-sky-600 cursor-pointer hover:text-gray-500 font-semibold text-sm">Add</span>
                         </div>
                    </div>
               </div>

               <div className="flex flex-wrap mt-20 text-gray-400 text-sm">
                    <div className="flex  justify-center items-center">
                         <span>About</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Help</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Press</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>API</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Jobs</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Privacy</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Terms</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Locations</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Language</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Meta</span> <LuDot />
                    </div>
                    <div className="flex justify-center items-center">
                         <span>Verified</span> <LuDot />
                    </div>
               </div>

               <div className="mt-6 text-gray-400 text-sm">
                    <span>© 2024 MeSocial from Meta</span>
               </div>

          </div>
     )
}

export default SuggestFriends;