import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ProfileInfo from "../../components/profile/ProfileInfo";

const Profile = () => {
    return (
        <>
            <Header />
            <div className="mx-auto flex max-w-7xl items-center justify-between pt-5 lg:px-8">
                <div><SideBar /></div>
                <div id="detail">
                    <Outlet />
                    <ProfileInfo
                        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s"
                        username="Cristiano Ronaldo"
                        posts={3749}
                        followers={639607594}
                        following={579}
                        bio="GOAT! No.1 in the world! SIUUUbscribe to my Youtube Channel!"
                    />
                </div>
            </div>
        </>
    )
}

export default Profile;