import CreatePost from "../post/CreatePost"
import GroupOverview from "./GroupOverview"
import { useEffect, useState } from "react"
import GroupPostItem from "../post/GroupPostItem"
import { getPostsByGroup } from "../../services/PostService"
import { Post, PostResponse } from "../../types/Post"
import PostPlaceholder from "../post/PostPlaceholder"

const GroupDiscussion = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const groupId = 8;

    useEffect(() => {
        const fetchPosts = async () => {
            try {

                const response = await getPostsByGroup(groupId, 0);
                if (!response || !response.result || !Array.isArray(response.result.content)) {
                    throw new Error('Invalid response structure');
                }
                const transformedPosts: Post[] = response.result.content.map((item: PostResponse) => {

                    const createdAtDate = new Date(item.createdAt);
                    const now = new Date();
                    const timeDifference = Math.floor((now.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60));

                    return {
                        id: item.id,
                        userId: item.userId,
                        userFullName: item.userFullName,
                        avatar: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
                        groupId: item.groupId,
                        groupName: item.groupName,
                        content: item.content,
                        privacy: item.privacy,
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                        likeNum: item.likeNum,
                        commentNum: item.commentNum,
                        time: timeDifference,
                        isLiked: false,
                        isFavourited: false,
                        publicIds: item.publicIds,
                        urls: item.urls,
                        imageError: false
                    }
                });

                setPosts(transformedPosts);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };

        fetchPosts();
    }, [groupId]);

    if (loading) {
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
                    <GroupOverview />
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
                    <GroupOverview />
                </div>
            </div>
    }


const handleLikeBtn = (index: number) => {
    setPosts(prevPosts =>
        prevPosts.map((post, i) =>
            i === index ? { ...post, isLiked: !post.isLiked } : post
        )
    );
};

const handleFavouriteBtn = (index: number) => {
    setPosts(prevPosts =>
        prevPosts.map((post, i) => {
            return (i === index ? { ...post, isFavourited: !post.isFavourited } : post)
        })
    )
}

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
                                        handleLikeBtn={handleLikeBtn}
                                        handleFavouriteBtn={handleFavouriteBtn}
                                    />
                                ))}</> :<></>}

                    </div>
                </div>
                <GroupOverview />
            </div>
        </div>
    </>
)
}

export default GroupDiscussion