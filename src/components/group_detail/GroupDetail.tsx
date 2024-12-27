import { useEffect } from "react";
import Header from "../Header";
import GroupHeader from "./GroupHeader";
import { Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchGroupById } from "../../redux/slice/groupSlice";


const GroupDetail: React.FC = () => {
    // const [group, setGroup] = useState<GroupResponse>();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { group } = useAppSelector(state => state.group)

    useEffect(() => {
        dispatch(fetchGroupById(Number(id)))
    }, [id, dispatch]);

    return (
        <>
            <div className="flex flex-col bg-[#F3F4F6] items-center justify-center">
                <Header />
                <GroupHeader group={group} />
                <Outlet context={{group}} />
            </div>
        </>
    )
}




export default GroupDetail;