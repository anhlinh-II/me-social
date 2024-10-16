import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const Groups = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const initialActive = location.pathname.includes("joined") ? "joined" : "recentlyActivity";
	const [active, setActive] = useState<string>(initialActive);


	return (
		<div className="w-[80%]">
			<div>
				<div className="border-b border-gray-300 flex items-center">
					<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-600">
						<li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
							<Link to={`/groups/recentlyActivity`}
								className={active === "recentlyActivity" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("recentlyActivity")}
							>
								Bảng Feed Nhóm
							</Link>
						</li>
						<li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
							<Link to={`/groups/joined`}
								className={active === "joined" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 border-b-2 text-base border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("joined")}
							>
								Nhóm của bạn
							</Link>
						</li>
						<li className="me-2 hover:bg-sky-200 transition duration-300 rounded-t-md">
							<Link to={`/groups/suggestion`}
								className={active === "suggestion" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("suggestion")}
							>
								Nhóm gợi ý
							</Link>
						</li>

					</ul>
					<button 
					onClick={() => navigate('/groups/create')}
					className="border ml-auto hover:bg-sky-600 transition duration-300 px-5 rounded-lg h-2/3 py-2 bg-sky-500 text-white flex justify-center items-center">
						<span className="text-xl pr-2 font-bold"><IoAddOutline /></span>
						<span className="font-semibold">
							Create Your Group
						</span>
					</button>
				</div>
			</div>

			<div className="mt-5">
				<Outlet />
			</div>
		</div>
	)
}

export default Groups