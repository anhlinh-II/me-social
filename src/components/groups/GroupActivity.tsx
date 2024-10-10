import React, { useState } from 'react';
import { IoReload } from 'react-icons/io5';
import PostItem from './GroupPostItem';

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
            image: "https://instagram.fhan14-4.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35_tt6&_nc_cb=dae8a7dc-ddb356e0&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlLmpwZWdsaV84MDA5MjMifQ&_nc_ht=instagram.fhan14-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MC4dvRbcTRsQ7kNvgHhPd6g&_nc_gid=b83b65bc4581446f8d65f7e5fce9619e&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYDi8si6GL8NH0FVGuPITq9PGT7Nk6oqN-DRa86YvGwkCw&oe=670C196E&_nc_sid=22de04",
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
            image: "https://instagram.fhan14-4.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35_tt6&_nc_cb=dae8a7dc-ddb356e0&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlLmpwZWdsaV84MDA5MjMifQ&_nc_ht=instagram.fhan14-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MC4dvRbcTRsQ7kNvgHhPd6g&_nc_gid=b83b65bc4581446f8d65f7e5fce9619e&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYDi8si6GL8NH0FVGuPITq9PGT7Nk6oqN-DRa86YvGwkCw&oe=670C196E&_nc_sid=22de04"
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
            image: "https://instagram.fhan14-4.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35_tt6&_nc_cb=dae8a7dc-ddb356e0&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlLmpwZWdsaV84MDA5MjMifQ&_nc_ht=instagram.fhan14-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MC4dvRbcTRsQ7kNvgHhPd6g&_nc_gid=b83b65bc4581446f8d65f7e5fce9619e&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYDi8si6GL8NH0FVGuPITq9PGT7Nk6oqN-DRa86YvGwkCw&oe=670C196E&_nc_sid=22de04"
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
                    <PostItem
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
