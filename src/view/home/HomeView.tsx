import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/SuggestFriends";

const HomeView = () => {
  return (
    <>
      <Header />
      <div className=" flex max-w-7xl items-center justify-between pt-5 ">
        <div><SideBar /></div>
        <div id="detail" className="w-[40%] ms-[9.5%]">
          <Outlet />
        </div>
        <div className="w-[10%]">
          <SuggestFriends />
        </div>
      </div>
    </>
  );
};

export default HomeView;
