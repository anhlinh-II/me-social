import CreatePost from "../post/CreatePost"
import GroupOverview from "./GroupOverview"
import { useEffect } from "react"
import PostItem from "../post/PostItem"
import PostPlaceholder from "../post/PostPlaceholder"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { fetchPostByGroup } from "../../redux/slice/postsSlice"
import { useOutletContext, useParams } from "react-router-dom"
import { GroupResponse } from "../../types/Group"
import { useUser } from "../../utils/CustomHook"

const GroupDiscussion = () => {
    const { groupId } = useParams();

    const { group } = useOutletContext<{ group: GroupResponse | undefined }>();

    const { groupPost, isLoading, error } = useAppSelector(state => state.posts)
    // const { group } = useAppSelector(state => state.group.group)

    const dispatch = useAppDispatch();
    const user = useUser();

    useEffect(() => {
        console.log("userId >> ",user.id)
        dispatch(fetchPostByGroup({ userId: Number(user.id), groupId: Number(groupId), pageNum: 0 }))
    }, [dispatch]);

    if (isLoading) {
        return <div className="flex justify-center items-center flex-col gap-5 w-[70%]">
            <div className="flex gap-5">
                <div className="flex flex-col gap-4 w-[60%]">
                    <CreatePost />
                    <div className=" w-full h-fit rounded">
                        <div>
                            <PostPlaceholder />
                            <PostPlaceholder />
                        </div>
                    </div>
                </div>
                <GroupOverview group={group} />
            </div>
        </div>
    }

    if (error) {
        return <div className="flex justify-center items-center flex-col gap-5 w-[70%]">
            <div className="flex gap-5">
                <div className="flex flex-col gap-4 w-[60%]">
                    <CreatePost />
                    <div className=" w-full h-fit rounded">
                        <div>
                            <PostPlaceholder />
                            <PostPlaceholder />
                        </div>
                    </div>
                </div>
                <GroupOverview group={group} />
            </div>
        </div>
    }

    console.log("group post >> ", groupPost)

    return (
        <>
            <div className="flex z-auto justify-center items-center flex-col gap-5 w-[70%]">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-4 w-[60%]">
                        <CreatePost />
                        <div className=" w-full h-fit rounded">
                            {groupPost ?
                                <>
                                    {groupPost.map((item, index) => (
                                        <PostItem
                                            key={`post-key-${index}`}
                                            post={item}
                                            index={index}
                                            error={null}
                                        />
                                    ))}</>
                                : <>
                                    <PostPlaceholder />
                                </>}

                        </div>
                    </div>
                    <GroupOverview group={group} />
                </div>
            </div>
        </>
    )
}

export default GroupDiscussion