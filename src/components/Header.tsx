import logo from "../assets/react.svg";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineGroups, MdOutlineOndemandVideo } from "react-icons/md";
import { PiChatCircle, PiChatCircleDotsFill } from "react-icons/pi";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Header.scss';
import { GoBell } from "react-icons/go";
import { BsSun } from "react-icons/bs";
import { useState } from "react";
import SearchFriends from "./friends/SearchFriends";
import NotificationDropdown from "./Notification";
import Chat from "./Chat/Chat";
import { FaBell, FaMoon } from "react-icons/fa6";
import { chats, notifications } from "./fakeData";

const Header = () => {
	const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [showNotifications, setShowNotifications] = useState<boolean>(false);
    const [showChats, setChats] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        if (showChats) {
            setChats(false); 
        }
    };

    const toggleChats = () => {
        setChats(!showChats);
        if (showNotifications) {
            setShowNotifications(false); 
        }
    };

    const [activeButton, setActiveButton] = useState<'chat' | 'notification' | null>(null);
	const [activeTheme, setActiveTheme] = useState<'Moon' | 'Sun' | null>(null);

    const handleToggle = (button: 'chat' | 'notification') => {
        if (activeButton === button) {
            setActiveButton(null);
            return; 
        }

        setActiveButton(button);
        if (button === 'chat') {
            setShowNotifications(false);
        } else if (button === 'notification') {
            setChats(false); 
        }
    };

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
			<header className="bg-sky-600 w-full top-0 fixed z-10 right-0 left-0 shadow-md">
				<nav
					className="mx-0 flex max-w-8xl items-center justify-between p-2 lg:px-8"
					aria-label="Global"
				>
					<div className="flex w-[20%] lg:flex-1">
						<a href="/" className="-m-1.5 p-1.5">
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
								className="block cursor-pointer w-full p-2 ps-10 text-sm text-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-outline-none focus:border-sky-500 dark:bg-sky-500 dark:border-sky-600 dark:placeholder-white dark:text-white dark:focus:ring-white-500 dark:focus:border-blue-500"
								placeholder="Find Friends..."
								required
								autoComplete="off"
								onClick={() => handleOpenSearch()}
							/>
						</div>

					</div>
					<div className="flex justify-between w-[36%] gap-x-12">
						<Link
							to={`/`}
							className="group/item relative cursor-pointer transition duration-200 p-4 px-px-4 h-max mt-0 hover:bg-sky-500 rounded"
						>
							<IoHomeOutline style={{ fontSize: "24px", color: "white" }} />
							<div className="absolute z-50 top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Home
							</div>
						</Link>
						<Link
							to={`/listFriends/friends`}
							className="group/item relative cursor-pointer transition duration-200 p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
						>
							<IoPersonAddOutline style={{ fontSize: "24px", color: "white" }} />
							<div className="absolute z-50 top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Friends
							</div>
						</Link>

						<Link
							to={`/reels`}
							className="group/item relative cursor-pointer transition duration-200 p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
						>
							<MdOutlineOndemandVideo style={{ fontSize: "24px", color: "white" }} />
							<div className="absolute z-50 top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Video
							</div>
						</Link>

						<Link
							to={`/groups/feed`}
							className="group/item relative cursor-pointer transition duration-200 p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
						>
							<MdOutlineGroups style={{ fontSize: "24px", color: "white" }} />
							<div className="absolute z-50 top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								Groups
							</div>
						</Link>

						<Link
							to={`/seemore`}
							className="group/item relative cursor-pointer transition duration-200 p-4 px-px-4 mt-0 hover:bg-sky-500 rounded"
						>
							<VscThreeBars style={{ fontSize: "24px", color: "white" }} />
							<div className="absolute z-50 top-[60px] left-[0] invisible group-hover/item:delay-200 group-hover/item:visible px-2 py-1 decoration-blue-100 bg-gray-100 rounded">
								More
							</div>
						</Link>
					</div>

					<div className="w-[20%] lg:flex lg:flex-1 lg:justify-end flex gap-4 justify-center align-center">
						<button
							className={`w-[44px] h-[44px] hover:bg-[#0EA5E9] rounded-full flex items-center justify-center ${activeButton === 'chat' ? 'bg-[#0EA5E9]' : ''}`}
							onClick={() => {
								handleToggle('chat')
								toggleChats()
							}}
						>
							{activeButton === 'chat' ? (
								<PiChatCircleDotsFill style={{ fontSize: "28px", color: "white", cursor: "pointer" }} />
							) : (
								<PiChatCircle style={{ fontSize: "28px", color: "white", cursor: "pointer" }} />
							)}
						</button>
						<button
							className={`w-[44px] h-[44px] hover:bg-[#0EA5E9] rounded-full flex items-center justify-center ${activeTheme === 'Moon' ? 'bg-[#0EA5E9]' : ''}`}
							onClick={() => handleToggleMoon('Moon')}
						>
							{activeTheme === 'Moon' ? (
								<FaMoon style={{ fontSize: "26px", color: "white", cursor: "pointer" }} />
							) : (
								<BsSun style={{ fontSize: "26px", color: "white", cursor: "pointer" }} />
							)}
						</button>
						<button
							className={`relative w-[44px] h-[44px] hover:bg-[#0EA5E9] rounded-full flex items-center justify-center ${activeButton === 'notification' ? 'bg-[#0EA5E9]' : ''}`}
							onClick={() => {
								handleToggle('notification')
								toggleNotifications()
							}}
						>
							{activeButton === 'notification' ? (
								<FaBell style={{ fontSize: "28px", color: "white", cursor: "pointer" }} />
							) : (
								<GoBell style={{ fontSize: "28px", color: "white", cursor: "pointer" }} />
							)}
						</button>
						<button
							style={{ cursor: "pointer" }}
							onClick={() => navigate("login")}
							className="mb-2 text-lg font-semibold leading-6 text-white mt-2 ml-2"
						>
							Log in <span aria-hidden="true">&rarr;</span>
						</button>
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
			{showChats && (
				<Chat chats={chats} />
			)}
		</>
	);
};

export default Header;
