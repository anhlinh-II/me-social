import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

const ListGroups = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const initialActive = location.pathname.includes("joined") ? "joined" : "recentlyActivity";
	const [active, setActive] = useState<string>(initialActive);

	useEffect(() => {
		if (location.pathname === '/listGroup') {
			navigate('/listGroup/recentlyActivity');
		}
	}, [location.pathname, navigate]);

	return (
		<>
			<div>
				<div className="mt-[72px] border-b border-gray-300">
					<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
						<li className="me-2">
							<Link to={`/listGroup/recentlyActivity`}
								className={active === "recentlyActivity" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("recentlyActivity")}
							>
								Bảng Feed Nhóm
							</Link>
						</li>
						<li className="me-2">
							<Link to={`/listGroup/joined`}
								className={active === "joined" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 border-b-2 text-base border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("joined")}
							>
								Nhóm của bạn
							</Link>
						</li>
						<li className="me-2">
							<Link to={`/listGroup/suggestion`}
								className={active === "suggestion" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("suggestion")}
							>
								Nhóm gợi ý
							</Link>
						</li>
						<li className="me-2">
							<Link to={`/listGroup/create`}
								className={active === "create" ? "inline-flex items-center justify-center p-4 text-base text-sky-600 border-b-2 border-sky-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500 group" : "inline-flex items-center justify-center p-4 text-base border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}
								onClick={() => setActive("create")}
							>
								Tạo nhóm của bạn
							</Link>
						</li>
					</ul>
				</div>
			</div>
			
			<div className="mt-5">
                    <Outlet />
            </div>
		</>
	)
}

export default ListGroups