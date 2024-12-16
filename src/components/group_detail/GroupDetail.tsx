import { useState, useEffect } from "react";
import { getGroupById } from "../../services/GroupService";
import { GroupResponse } from "../../types/Group";
import Header from "../Header";
import GroupHeader from "./GroupHeader";
import { Outlet } from "react-router-dom";


const GroupDetail: React.FC = () => {
    const [group, setGroup] = useState<GroupResponse >();
    const id  = 8;//useParams<{ id: string }>();

    useEffect(() => {
        const fetchGroupData = async () => {
            if (id) {
                try {
                    const response = await getGroupById(Number(id));
                    setGroup(response.result);
                } catch (error) {
                    console.error("Failed to fetch group data:", error);
                }
            }
        };
        fetchGroupData();
    }, [id]);

    return (
        <>
            <div className="flex flex-col bg-[#F3F4F6] items-center justify-center">
                <Header />
                <GroupHeader group={group}/>
                <Outlet />
            </div>
        </>
    )
}




export default GroupDetail;