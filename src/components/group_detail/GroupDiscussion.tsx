import CreatePost from "../post/CreatePost"
import GroupOverview from "./GroupOverview"
import { useEffect } from "react"
import GroupPostItem from "../post/GroupPostItem"
import PostPlaceholder from "../post/PostPlaceholder"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { fetchPostByGroup } from "../../redux/slice/postsSlice"
import { useOutletContext, useParams } from "react-router-dom"
import { GroupResponse } from "../../types/Group"

const GroupDiscussion = () => {
    const { id } = useParams();

    const { group } = useOutletContext<{ group: GroupResponse | undefined }>();

    const { posts, isLoading, error } = useAppSelector(state => state.posts)
    // const { group } = useAppSelector(state => state.group.group)

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchPostByGroup({ groupId: Number(id), pageNum: 0 }))
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


    // const handleLikeBtn = (index: number) => {
    //     setPosts(prevPosts =>
    //         prevPosts.map((post, i) =>
    //             i === index ? { ...post, isLiked: !post.isLiked } : post
    //         )
    //     );
    // };

    // const handleFavouriteBtn = (index: number) => {
    //     setPosts(prevPosts =>
    //         prevPosts.map((post, i) => {
    //             return (i === index ? { ...post, isFavourited: !post.isFavourited } : post)
    //         })
    //     )
    // }

    return (
        <>
            <div className="flex justify-center items-center flex-col gap-5 w-[70%]">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-4 w-[60%]">
                        <CreatePost />
                        <div className=" w-full h-fit rounded">
                            {posts ?
                                <>
                                    {posts.map((item, index) => (
                                        <GroupPostItem
                                            key={`post-key-${index}`}
                                            post={item}
                                            index={index}
                                            error={null}
                                        // handleLikeBtn={handleLikeBtn}
                                        // handleFavouriteBtn={handleFavouriteBtn}
                                        />
                                    ))}</> : <></>}

                        </div>
                    </div>
                    <GroupOverview group={group} />
                </div>
            </div>
        </>
    )
}

export default GroupDiscussion