import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/friends/SuggestFriends";

const HomeView = () => {
  const location = useLocation();
  const hasProfile = location.pathname.includes("profile");
  const hasListFriends = location.pathname.includes("listFriends")
  const hasGroups = location.pathname.includes("group")
  const hasSeemore = location.pathname.includes("seemore")

  const inHomeView: boolean = !hasListFriends && !hasProfile && !hasGroups && !hasSeemore ? true : false;
  return (
    <div className="bg-gray-50 flex flex-col">
      <Header />
      <div className="flex w-full top-[72px] fixed items-start justify-between">
        <div className="w-[22%] h-screen absolute top-0 bottom-0 left-0 shadow-lg border-r">
          <SideBar
            active={hasProfile ? "profile" : (inHomeView ? "home" : "")}
            setActive={() => null}
            isFullSiderBar={true}
            setIsFullSideBar={() => null}
          />
        </div>
        <div id="detail" className={!inHomeView ? "ml-auto h-screen overflow-y-auto no-scrollbar w-[80%] flex justify-center items-start" : "m-auto h-screen no-scrollbar overflow-y-auto w-[100%]"}>
          <Outlet />
        </div>
        {
          inHomeView && (
            <div className="bg-white absolute top-0 bottom-0 right-0 w-[20%] border-l shadow-lg">
              <SuggestFriends />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HomeView;
