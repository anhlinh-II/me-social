import React, { useState } from 'react';
import { IoReload } from 'react-icons/io5';
import GroupPostItem from '../post/GroupPostItem';

const GroupActivity: React.FC = () => {

    interface IPost {
        username: string;
        avatar: string;
        groupName: string;
        postStatus: string;
        likes: number;
        description: string;
        totalComments: number;
        time: number;
        isLiked: boolean | undefined;
        isFavourited: boolean | undefined;
        image: string;
    }
    
    const [posts, setPosts] = useState<IPost[]>([
        {
            username: "Cristiano Ronaldo",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
            groupName: "GOAT Football Player",
            postStatus: "public",
            likes: 977797779,
            description: "The First to have 5 Champions Leagues!",
            totalComments: 1945277,
            time: 2,
            isLiked: true,
            isFavourited: true,
            image: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
        },
        {
            username: "Lionel Messi",
            avatar: "https://images.mykhel.com/img/2024/07/lionel-messi-crying1-1721013787.jpg",
            groupName: "FIFA Favorite Son",
            postStatus: "friends",
            likes: 120865050,
            description: "Congratulations on your victorius!",
            totalComments: 782777,
            time: 6,
            isLiked: true,
            isFavourited: true,
            image: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg"
        },
        {
            username: "Neymar",
            avatar: "https://tmssl.akamaized.net//images/foto/galerie/neymar-brazil-2023-1694521247-116480.jpg?lm=1694521259",
            groupName: "Party All Life",
            postStatus: "private",
            likes: 44956056,
            description: "GOAT GOAT GOAT",
            totalComments: 124895,
            time: 18,
            isLiked: undefined,
            isFavourited: true,
            image: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg"
        }
    ]);

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
        <div className="flex justify-center items-center flex-col gap-5 w-[70%]">
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
            <div className="px-4 py-2 bg-sky-400 w-[100px] justify-center text-center rounded-full flex items-center gap-2 cursor-pointer hover:bg-sky-600 hover:text-white transition duration-150">
                <IoReload className="text-2xl font-bold" /><span>Refresh</span>
            </div>
        </div>
    );
};

export default GroupActivity;
