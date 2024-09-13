import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/SuggestFriends";

const HomeView = () => {
  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-7xl items-center justify-between pt-5 lg:px-8">
        <div><SideBar /></div>
        <div id="detail">
          <Outlet />
        </div>
        <div>
          <SuggestFriends />
        </div>
      </div>
    </>
  );
};

export default HomeView;
