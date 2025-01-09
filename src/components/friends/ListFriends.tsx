import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom"

const ListFriends = () => {
     const location = useLocation();
     const initialActive = location.pathname.includes("suggestion") ? "suggestion" : "friends"
     const [active, setActive] = useState<string>(initialActive);

     return (
          <div className="w-4/5 flex justify-center flex-col">
               <div className=" border-b border-gray-300">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                         <li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
                              <Link to={`/listFriends/friends`}
                                   className={active === "friends" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
                                   onClick={() => setActive("friends")}
                              >
                                   Bạn bè
                              </Link>
                         </li>
                         <li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
                              <Link to={`/listFriends/friendsRequest`}
                                   className={active === "friendsRequest" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
                                   onClick={() => setActive("friendsRequest")}
                              >
                                   Yêu cầu kết bạn
                              </Link>
                         </li>
                         <li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
                              <Link to={`/listFriends/recentlyAdded`}
                                   className={active === "recentlyAdded" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
                                   onClick={() => setActive("recentlyAdded")}
                              >
                                   Thêm gần đây
                              </Link>
                         </li>
                         <li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
                              <Link to={`/listFriends/suggestion`}
                                   className={active === "suggestion" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
                                   onClick={() => setActive("suggestion")}
                              >
                                   Đề xuất kết bạn
                              </Link>
                         </li>
                    </ul>
               </div>
               <div className="mt-5">
                    <Outlet />
               </div>
          </div>
     )
}

export default ListFriends