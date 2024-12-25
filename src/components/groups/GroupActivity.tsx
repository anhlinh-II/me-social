import React, { useEffect } from 'react';
import GroupPostItem from '../post/GroupPostItem';
import ListPosts from '../post/ListPosts';
import GroupJoinedSideBar from './GroupJoinedSideBar';
import PostPlaceholder from '../post/PostPlaceholder';
import GroupSidebarPlaceholder from './placeholder/GroupJoinedSideBarPlaceholder';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchGroupActivities } from '../../redux/slice/postsSlice';
import { RootState } from '../../redux/store';
import { useUser } from '../../utils/CustomHook';

const GroupActivity: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useUser();
    const { posts, isLoading, error } = useAppSelector((state: RootState) => state.posts);


    useEffect(() => {
        // const fetchPosts = async () => {
        //     try {
        //         const response = await getPostsForGroupActivities(userId, 0);
        //         if (!response || !response.result || !Array.isArray(response.result.content)) {
        //             throw new Error('Invalid response structure');
        //         }
        //         const transformedPosts: Post[] = response.result.content.map((item: PostResponse) => {

        //             const createdAtDate = new Date(item.createdAt);
        //             const now = new Date();
        //             const timeDifference = Math.floor((now.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60));

        //             return {
        //                 id: item.id,
        //                 userId: item.userId,
        //                 userFullName: item.userFullName,
        //                 avatar: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
        //                 groupId: item.groupId,
        //                 groupName: item.groupName,
        //                 content: item.content,
        //                 privacy: item.privacy,
        //                 createdAt: item.createdAt,
        //                 updatedAt: item.updatedAt,
        //                 likeNum: item.likeNum,
        //                 commentNum: item.commentNum,
        //                 time: timeDifference,
        //                 isLiked: false,
        //                 isFavourited: false,
        //                 publicIds: item.publicIds,
        //                 urls: item.urls,
        //                 imageError: false
        //             }
        //         });

        //         setPosts(transformedPosts);
        //         setLoading(false);
        //     } catch (err: any) {
        //         setError(err.message || 'Something went wrong');
        //         setLoading(false);
        //     }
        // };

        // fetchPosts();

        const res = dispatch(fetchGroupActivities({ userId: Number(user.id), pageNum: 0 }));

    }, [user.id, dispatch]);

    if (isLoading) {
        return <div className='flex flex-row'>
            <div className="flex justify-center items-center flex-col gap-5 md:w-[600px] sm:w-full">
                <div className=" w-full h-fit rounded">
                    <PostPlaceholder /><PostPlaceholder /><PostPlaceholder />
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-[#F3F4F6] absolute top-0 bottom-0 right-3 w-[24%] border-l'>
                <div className="h-full scrollbar-hidden scrollbar-visible hover:overflow-auto">
                    <GroupSidebarPlaceholder />
                </div>
            </div>
        </div>;
    }

    if (error) {
        return <div className='flex flex-row'>
            <div className="flex justify-center items-center flex-col gap-5 md:w-[600px] sm:w-full">
                <div className=" w-full h-fit rounded">
                    <PostPlaceholder /><PostPlaceholder /><PostPlaceholder />
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-[#F3F4F6] absolute top-0 bottom-0 right-3 w-[24%] border-l'>
                <div className="h-full scrollbar-hidden scrollbar-visible hover:overflow-auto">
                    <GroupSidebarPlaceholder />
                </div>
            </div>
        </div>;
    }

    // const handleLikeBtn = (index: number) => {
    //     setListPosts(prevPosts =>
    //         prevPosts.map((post, i) =>
    //             i === index ? { ...post, isLiked: !post.isLiked } : post
    //         )
    //     );
    // };

    // const handleFavouriteBtn = (index: number) => {
    //     setListPosts(prevPosts =>
    //         prevPosts.map((post, i) => {
    //             return (i === index ? { ...post, isFavourited: !post.isFavourited } : post)
    //         })
    //     )
    // }

    return (
        <div className='flex flex-row'>
            <div className="flex justify-center items-center flex-col gap-5 md:w-[600px] sm:w-full">
                <div className=" w-full h-fit rounded">
                    {posts.map((item, index) => (
                        <GroupPostItem
                            key={`post-key-${index}`}
                            post={item}
                            index={index}
                            error={error}
                            // handleLikeBtn={handleLikeBtn}
                            // handleFavouriteBtn={handleFavouriteBtn}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-[#F3F4F6] absolute top-0 bottom-0 right-3 w-[24%] border-l'>
                <div className="h-full scrollbar-hidden scrollbar-visible hover:overflow-auto">
                    <GroupJoinedSideBar />
                </div>
            </div>
        </div>
    );
};

export default GroupActivity;
