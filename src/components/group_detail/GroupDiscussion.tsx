import { IoReload } from "react-icons/io5"
import CreatePost from "../post/CreatePost"
import GroupOverview from "./GroupOverview"
import { useEffect, useState } from "react"
import GroupPostItem from "../post/GroupPostItem"
import { getPostsByGroup } from "../../services/Entities/PostService"
import { Post, PostResponse } from "../../services/Types/Post"
import ListPosts from "../post/ListPosts"

const GroupDiscussion = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const groupId = 6;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5Njc3MjAzLCJpYXQiOjE3Mjk1OTA4MDMsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.07ImTPWKCUd_I6w18aTRDh0UpGit-ucHEm7QErxSD6RUmHyI6aIcKI_U4UI0FuJNIgEIYir1Rc4emRbuDUUkFg";
                // localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const data = await getPostsByGroup(groupId, 0, token);
                const transformedPosts: Post[] = data.result.content.map((item: PostResponse) => {

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
                        image: "https://bizweb.dktcdn.net/100/370/339/products/z4529778288710-9a538b8bcac451561af81cd240d963a1.jpg?v=1689758099500",
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
        return <></>;
    }

    if (error) {
        return <></>;
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
                            {posts.map((item, index) => (
                                <GroupPostItem
                                    key={`post-key-${index}`}
                                    post={item}
                                    index={index}
                                    handleLikeBtn={handleLikeBtn}
                                    handleFavouriteBtn={handleFavouriteBtn}
                                />
                            ))}
                        </div>
                        <ListPosts />
                    </div>
                    <GroupOverview />
                </div>

                <div className="px-4 py-2 bg-sky-400 w-[100px] justify-center text-center rounded-full flex items-center gap-2 cursor-pointer hover:bg-sky-600 hover:text-white transition duration-150">
                    <IoReload className="text-2xl font-bold" /><span>Refresh</span>
                </div>
            </div>
        </>
    )
}

export default GroupDiscussion