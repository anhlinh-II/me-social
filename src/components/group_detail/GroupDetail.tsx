import { useState, useEffect } from "react";
import { getGroupById } from "../../services/Entities/GroupService";
import { GroupResponse } from "../../services/Types/Group";
import Header from "../Header";
import GroupHeader from "./GroupHeader";
import { Outlet } from "react-router-dom";


const GroupDetail: React.FC = () => {
    const [group, setGroup] = useState<GroupResponse | null>(null);
    const id  = 7;//useParams<{ id: string }>();

    useEffect(() => {
        const fetchGroupData = async () => {
            if (id) {
                try {
                    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5OTUzNjYzLCJpYXQiOjE3Mjk4NjcyNjMsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.0UTslqMuHAvys8ZWf71autLq9LVheMQmnAAhlJwGEA9tWC2R_BpVXh4VJNI_K2k9-8YBCvelK5vVtkeWGLvmeg";
                    const data = await getGroupById(Number(id), token);
                    setGroup(data);
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