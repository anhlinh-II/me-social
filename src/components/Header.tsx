import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiChatCircle, PiChatCircleDotsFill } from "react-icons/pi";
import { IoHome, IoHomeOutline, IoPersonAdd, IoPersonAddOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../styles/Header.scss';
import { GoBell } from "react-icons/go";
import { useState } from "react";
import SearchFriends from "./friends/SearchFriends";
import NotificationDropdown from "./notification/Notification";
import { FaBell, FaMoon, FaSun } from "react-icons/fa6";
import { chats, notifications } from "./fakeData";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { useAppSelector } from "../redux/hook";
import avt from '../assets/me1.jpg';
import ChatList, { UserChat } from "./Chat/ChatList";
import Chat from "./Chat/Chat";

const Header = () => {

	const isAuthenticated = useAppSelector(state => state.account.isAuthenticated);

	const [openSearch, setOpenSearch] = useState<boolean>(false);

	const [showNotifications, setShowNotifications] = useState<boolean>(false);
	const [showChatList, setShowChatList] = useState<boolean>(false);
	const [selectedChats, setSelectedChats] = useState<UserChat[]>([]);

    const handleSelectChat = (chat: UserChat) => {
        setSelectedChats(prevChats => {
            // If Chat exists in the selected list, no change
            if (prevChats.some(c => c.id === chat.id)) {
                return prevChats;
            }
            // If selected list is not full of 2, add a new one
            if (prevChats.length < 2) {
                return [...prevChats, chat];
            }
            // If there are 2, replace the first one
            return [prevChats[1], chat];
        });
    };
	
	const location = useLocation();
	const navigate = useNavigate();

	const handleOpenSearch = () => {
		setOpenSearch(true);
	};

	const toggleNotifications = () => {
		setShowNotifications(!showNotifications);
		if (showChatList) {
			setShowChatList(false);
		}
	};

	const toggleChats = () => {
		setShowChatList(!showChatList);
		if (showNotifications) {
			setShowNotifications(false);
		}
	};

	const [activeTheme, setActiveTheme] = useState<'Moon' | 'Sun' | null>(null);

	const handleToggleMoon = (button: 'Moon' | 'Sun') => {
		if (activeTheme === button) {
			setActiveTheme(null);
			return;
		}

		if (button === 'Moon') {
			setActiveTheme('Moon');
		} else if (button === 'Sun') {
			setActiveTheme('Sun');
		}
	};


	return (
		<>
			<header className="bg-sky-600 w-full top-0 fixed z-10 right-0 left-0">
				<nav
					className="mx-0 flex max-w-8xl items-center justify-between p-1 lg:px-10 shadow-lg"
					aria-label="Global"
				>
					<div className="flex w-[20%] lg:flex-1">
						<a href="/" className="-m-1.5 p-1.5">
							<img className="h-10 w-auto" src="/logo.png" alt="" />
						</a>
						{/* <div className="relative ml-10">
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
								className="block cursor-pointer w-full p-2 ps-10 text-sm text-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-outline-none focus:border-sky-500 dark:bg-sky-500 dark:border-sky-600 dark:placeholder-white dark:text-white dark:focus:ring-white-500 dark:focus:border-blue-500"
								placeholder="Find Friends..."
								required
								autoComplete="off"
								onClick={() => handleOpenSearch()}
							/>
						</div> */}
						<div className="w-[240px] ps-4 flex flex-row items-center">
							<input
								id="searchQueryInput"
								type="text"
								name="searchQueryInput"
								placeholder="Tìm bạn bè, nhóm, ..."
								className="w-full h-10 bg-[#0EA5E9] placeholder-white outline-none border-none rounded-full pl-4 pr-10 text-white text-base"
								onClick={() => handleOpenSearch()}
							/>
							<button
								id="searchQuerySubmit"
								type="submit"
								name="searchQuerySubmit"
								className="w-14 h-10 -ml-10 bg-none border-none outline-none hover:cursor-pointer"
							>
								<svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
									<path
										fill="#666666"
										d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex justify-between w-[38%] ">
						<Link
							to={`/`}
							className={`group/item relative cursor-pointer transition duration-200 p-4 px-10 h-max mt-0 hover:bg-sky-500 rounded-lg ${location.pathname === "/" ? "border-b-4 border-sky-500" : ""
								}`}>
							{location.pathname === "/" ? <IoHome style={{ fontSize: "28px", color: "white" }} /> : <IoHomeOutline style={{ fontSize: "28px", color: "white" }} />}
							<div className="absolute z-50 top-[65px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Home
							</div>
						</Link>
						<Link
							to={`/listFriends/friends`}
							className={`group/item relative cursor-pointer transition duration-200 p-4 px-10 mt-0 hover:bg-sky-500 rounded-lg ${location.pathname.includes("/listFriends") ? "border-b-4 border-sky-500" : ""
								}`}>
							{location.pathname.includes("/listFriends") ? <IoPersonAdd style={{ fontSize: "28px", color: "white" }} /> : <IoPersonAddOutline style={{ fontSize: "28px", color: "white" }} />}
							<div className="absolute z-50 top-[65px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Friends
							</div>
						</Link>

						<Link
							to={`/reels`}
							className="group/item relative cursor-pointer transition duration-200 p-4 px-10 mt-0 hover:bg-sky-500 rounded-lg"
						>
							<MdOutlineOndemandVideo style={{ fontSize: "28px", color: "white" }} />
							<div className="absolute z-50 top-[65px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Video
							</div>
						</Link>

						<Link
							to={`/groups/feed`}
							className={`group/item relative cursor-pointer transition duration-200 p-4 px-10 mt-0 hover:bg-sky-500 rounded-lg ${location.pathname.includes("/groups") ? "border-b-4 border-sky-500" : ""
								}`}>
							{location.pathname.includes("/groups") ? <HiUserGroup style={{ fontSize: "28px", color: "white" }} /> : <HiOutlineUserGroup style={{ fontSize: "28px", color: "white" }} />}
							<div className="absolute z-50 top-[65px] left-6 invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Groups
							</div>
						</Link>
					</div>

					<div className="w-[20%] lg:flex lg:flex-1 lg:justify-end flex gap-4 justify-center align-center">
						<button
							className={`w-[40px] h-[40px] bg-[#05A5FB] hover:bg-[#35B5FF] rounded-full flex items-center justify-center ${showChatList ? 'bg-[#0EA5E9]' : ''}`}
							onClick={() => {
								toggleChats()
							}}
						>
							{showChatList ? (
								<PiChatCircleDotsFill style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
							) : (
								<PiChatCircle style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
							)}
						</button>
						<button
							className={`w-[40px] h-[40px] bg-[#05A5FB] hover:bg-[#35B5FF] rounded-full flex items-center justify-center `}
							onClick={() => handleToggleMoon('Moon')}
						>
							{activeTheme === 'Moon' ? (
								<FaMoon style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
							) : (
								<FaSun style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
							)}
						</button>
						<button
							className={`relative w-[40px] h-[40px] bg-[#05A5FB] hover:bg-[#35B5FF] rounded-full flex items-center justify-center ${showNotifications ? 'bg-[#0EA5E9]' : ''}`}
							onClick={() => {
								toggleNotifications()
							}}
						>
							{showNotifications ? (
								<FaBell style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
							) : (
								<GoBell style={{ fontSize: "24px", color: "white", cursor: "pointer" }} />
							)}
						</button>
						{
							isAuthenticated ?
								<img src={avt}
									className="border border-sky-600 rounded-[100%] h-10 w-10 cursor-pointer"
									alt="error"
									onClick={() => navigate(`/profile`)}
								/>
								:
								<button
									style={{ cursor: "pointer" }}
									onClick={() => navigate("login")}
									className="mb-2 text-lg font-semibold leading-6 text-white mt-2 ml-2"
								>
									Log in <span aria-hidden="true">&rarr;</span>
								</button>
						}
					</div>
				</nav>
			</header>
			<SearchFriends
				show={openSearch}
				setShow={setOpenSearch}
			/>
			{showNotifications && (
				<NotificationDropdown
					notifications={notifications}
					onClose={() => setShowNotifications(false)}
				/>
			)}
			{showChatList && (
				<ChatList chats={chats} setSelectedChat={handleSelectChat} showChatList setShowChatList={setShowChatList}/>
			)}
			{selectedChats.map((chat, index) => (
                <Chat
                    key={chat.id}
                    selectedChat={chat}
					position={index === 0 ? "right-[5%]" : "right-[28%]"}
                    setSelectedChat={() =>
                        setSelectedChats(prevChats =>
                            prevChats.filter(c => c.id !== chat.id)
                        )
                    }
                />
            ))}
		</>
	);
};

export default Header;
