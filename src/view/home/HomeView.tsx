import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/friends/SuggestFriends";

const HomeView = () => {
  const location = useLocation();
  const hasProfile = location.pathname.includes("profile");
  const hasListFriends = location.pathname.includes("listFriends")
  const hasGroups = location.pathname.includes("listGroup")
  const hasSeemore = location.pathname.includes("seemore")

  const inHomeView: boolean = !hasListFriends && !hasProfile && !hasGroups && !hasSeemore ? true : false;
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="flex w-full items-start gap-52 pt-5">
        <div className="w-[20%]"><SideBar
          active={hasProfile ? "profile" : (inHomeView ? "home" : "")}
          setActive={() => null}
          isFullSiderBar={false}
          setIsFullSideBar={() => null}
        /></div>
        <div id="detail" className={!inHomeView ? "w-[60%]" : "w-[34%]"}>
          <Outlet />
        </div>
        {
          inHomeView && (
            <div className="w-[20%]">
              <SuggestFriends />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HomeView;
