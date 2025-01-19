import { useEffect } from "react";
import Header from "../Header";
import GroupHeader from "./GroupHeader";
import { Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchGroupById } from "../../redux/slice/groupSlice";
import HeaderGroup from "../HeaderGroup";


const GroupDetail: React.FC = () => {
    // const [group, setGroup] = useState<GroupResponse>();
    const { groupId } = useParams();
    const dispatch = useAppDispatch();
    const { group } = useAppSelector(state => state.group)

    useEffect(() => {
        dispatch(fetchGroupById(Number(groupId)))
    }, [groupId, dispatch]);

    return (
        <>
            <div className="z-10">
            <HeaderGroup />
            </div>
            <div className="flex flex-col z-0 bg-[#F3F4F6] items-center justify-center">
                <GroupHeader group={group} />
                <Outlet context={{ group }} />
            </div>
        </>
    )
}




export default GroupDetail;