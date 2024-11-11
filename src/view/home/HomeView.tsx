import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/friends/SuggestFriends";

import "../../styles/App.scss"
import { useAppSelector } from "../../redux/hook";
import { useEffect } from "react";

const HomeView = () => {
  const location = useLocation();
  const hasProfile = location.pathname.includes("profile");
  const hasListFriends = location.pathname.includes("listFriends")
  const hasGroups = location.pathname.includes("group")
  const hasSeemore = location.pathname.includes("seemore")

  const navigate = useNavigate()

  const isAuthenticated = useAppSelector(state => state.account.isAuthenticated)
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate(`/login`)
    }
  }, [])

  const inHomeView: boolean = !hasListFriends && !hasProfile && !hasGroups && !hasSeemore ? true : false;
  return (
    <div className="bg-gray-50 flex flex-col">
      <Header />
      <div className="flex w-full top-[68px] fixed items-start justify-between">
        <div className="w-[22%] h-screen absolute top-0 bottom-0 left-0 border-r">
          <SideBar
            active={hasProfile ? "profile" : (inHomeView ? "home" : "")}
            setActive={() => null}
            isFullSiderBar={true}
            setIsFullSideBar={() => null}
          />
        </div>
        <div id="detail" className={!inHomeView ? "ml-auto h-screen scrollbar-hidden scrollbar-visible overflow-y-auto bg-[#F3F4F6] w-[80%] flex justify-center items-start" : "m-auto h-screen bg-[#F3F4F6] scrollbar-hidden scrollbar-visible overflow-y-auto w-[100%]"}>
          <Outlet />
        </div>
        {
          inHomeView && (
            <div className="bg-[#F3F4F6] absolute top-0 bottom-0 right-3 w-[20%] border-l">
              <div className="h-full scrollbar-hidden scrollbar-visible hover:overflow-auto">
                <SuggestFriends />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HomeView;
