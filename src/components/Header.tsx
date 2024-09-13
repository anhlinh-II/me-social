import logo from "../assets/react.svg";
import { IoMdPersonAdd, IoIosSearch, IoMdNotifications } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoHome, IoMoonSharp } from "react-icons/io5";

const Header = () => {
     return (
          <>
               <header className="bg-sky-600">
                    <nav
                         className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                         aria-label="Global"
                    >
                         <div className="flex lg:flex-1">
                              <a href="#" className="-m-1.5 p-1.5">
                                   <span className="sr-only">hello</span>
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
                                        className="block w-full p-3 ps-10 text-sm text-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-sky-500 dark:bg-sky-500 dark:border-sky-600 dark:placeholder-white dark:text-white dark:focus:ring-white-500 dark:focus:border-blue-500"
                                        placeholder="Find Friends..."
                                        required
                                   />
                              </div>
                              <div className="ml-4 p-1 mt-2">
                                   <IoHome style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                              </div>
                              <div className="ml-4 p-1 mt-2">
                                   <IoMdPersonAdd style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                              </div>
                         </div>
                         <div className="hidden lg:flex lg:flex-1 lg:justify-end flex justify-center align-center">
                              <div className="mr-4 mt-1">
                                   <BiSolidMessageRounded style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                              </div>
                              <div className="mr-4 mt-1">
                                   <IoMoonSharp style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                              </div>
                              <div className="mr-4 mt-1">
                                   <IoMdNotifications style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                              </div>
                              <a
                                   href="#"
                                   className="mb-2 text-base font-semibold leading-6 text-white"
                              >
                                   Log in <span aria-hidden="true">&rarr;</span>
                              </a>
                         </div>
                    </nav>
               </header>
          </>
     );
};

export default Header;
