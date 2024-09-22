import logo from "../assets/react.svg";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdPersonAdd, IoIosSearch, IoMdNotifications } from "react-icons/io";
import { MdGroups, MdOutlineDarkMode, MdOutlineGroups, MdOutlineOndemandVideo } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { PiChatCircle, PiVideoFill } from "react-icons/pi";
import { IoHome, IoHomeOutline, IoMoonSharp, IoPersonAddOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Header.scss';
import { FaRegBell } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { BsMoon } from "react-icons/bs";

const Header = () => {
     const navigate = useNavigate();
     return (
          <>
               <header className="bg-sky-600 fixed top-0 right-0 left-0 z-10">
                    <nav
                         className="mx-0 flex max-w-8xl items-center justify-between p-2 lg:px-8"
                         aria-label="Global"
                    >
                         <div className="flex lg:flex-1">
                              <a href="#" className="-m-1.5 p-1.5">
                                   <img className="h-8 w-auto" src={logo} alt="" />
                              </a>
                              <div className="relative ml-10">
                                   <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <IoIosSearch
                                             style={{
                                                  fontSize: "20px",
                                                  color: "white",
                                                  fontWeight: "bold",
                                             }}
                                        />
                                   </div>
                                   <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-2 ps-10 text-sm text-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-outline-none focus:border-sky-500 dark:bg-sky-500 dark:border-sky-600 dark:placeholder-white dark:text-white dark:focus:ring-white-500 dark:focus:border-blue-500"
                                        placeholder="Find Friends..."
                                        required
                                   />
                              </div>

                         </div>
                         <div className="flex justify-around gap-x-12">
                              <Link
                                   to={``}
                                   className="group/item relative cursor-pointer p-4 px-px-4 h-max mt-0 hover:bg-sky-500 rounded"
                              >
                                   <IoHomeOutline style={{ fontSize: "24px", color: "white" }} />
                                   <div className="absolute top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
                                        Home
                                   </div>
                              </Link>
                              <Link
                                   to={`/listfriends`}
                                   className="group/item relative cursor-pointer p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
                              >
                                   <IoPersonAddOutline style={{ fontSize: "24px", color: "white" }} />
                                   <div className="absolute top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
                                        Friends
                                   </div>
                              </Link>

                              <Link
                                   to={`reels`}
                                   className="group/item relative cursor-pointer p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
                              >
                                   <MdOutlineOndemandVideo style={{ fontSize: "24px", color: "white" }} />
                                   <div className="absolute top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
                                        Video
                                   </div>
                              </Link>

                              <Link
                                   to={`listgroup`}
                                   className="group/item relative cursor-pointer p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
                              >
                                   <MdOutlineGroups style={{ fontSize: "24px", color: "white" }} />
                                   <div className="absolute top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
                                        Groups
                                   </div>
                              </Link>

                              <Link
                                   to={`seemore`}
                                   className="group/item relative cursor-pointer p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
                              >
                                   <VscThreeBars style={{ fontSize: "24px", color: "white" }} />
                                   <div className="absolute top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
                                        More
                                   </div>
                              </Link>
                         </div>

                         <div className="hidden lg:flex lg:flex-1 lg:justify-end flex justify-center align-center">
                              <div className="mr-4 mt-1">
                                   <PiChatCircle style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
                              </div>
                              <div className="mr-4 mt-1">
                                   <BsMoon style={{ fontSize: "22px", color: "white", cursor: "pointer" }} />
                              </div>
                              <div className="mr-4 mt-1">
                                   <GoBell style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
                              </div>
                              <div
                                   style={{ cursor: "pointer" }}
                                   onClick={() => navigate("login")}
                                   className="mb-2 text-lg font-semibold leading-6 text-white mt-1 ml-2"
                              >
                                   Log in <span aria-hidden="true">&rarr;</span>
                              </div>
                         </div>
                    </nav>
               </header>
          </>
     );
};

export default Header;