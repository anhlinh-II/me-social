import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/SuggestFriends";

const HomeView = () => {
  const location = useLocation();
  const hasProfile = location.pathname.includes("profile");
  return (
    <>
      <Header />
      <div className="flex w-full items-start gap-52 pt-5">
        <div className="w-[20%]"><SideBar /></div>
        <div id="detail" className={hasProfile ? "w-[60%]" : "w-[34%]"}>
          <Outlet />
        </div>
        {
          !hasProfile && (
            <div className="w-[20%]">
              <SuggestFriends />
            </div>
          )
        }
      </div>
    </>
  );
};

export default HomeView;
