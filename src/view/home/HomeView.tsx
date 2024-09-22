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
      <div className="flex max-w-7xl items-center justify-between pt-5">
        <div><SideBar /></div>
        <div id="detail" className={hasProfile ? "ms-[9.5%] w-[60%]" : "ms-[9.5%] w-[40%]"}>
          <Outlet />
        </div>
        {
          !hasProfile && (
            <div className="w-[10%]">
              <SuggestFriends />
            </div>
          )
        }
      </div>
    </>
  );
};

export default HomeView;
