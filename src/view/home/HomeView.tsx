import Header from "../../components/Header";
import Posts from "../../components/Posts";
import SideBar from "../../components/SideBar";
import SuggestFriends from "../../components/SuggestFriends";

const HomeView = () => {
  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-7xl items-center justify-between pt-5 lg:px-8">
        <div><SideBar /></div>
        <div><Posts /></div>
        <div>
          <SuggestFriends />
        </div>
      </div>
    </>
  );
};

export default HomeView;
