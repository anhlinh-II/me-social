import Header from "../Header";
import GroupHeader from "./GroupHeader";
import { Outlet } from "react-router-dom";


const GroupDetail: React.FC = () => {

    return (
        <>
            <div className="flex flex-col bg-[#F3F4F6] items-center justify-center">
                <Header />
                <GroupHeader />
                <Outlet />
            </div>
        </>
    )
}




export default GroupDetail;