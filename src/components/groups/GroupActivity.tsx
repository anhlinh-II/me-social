import React, { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoReload } from 'react-icons/io5';
import ShowMoreText from "react-show-more-text";

const GroupActivity: React.FC = () => {

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
            image: "https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04",
        },
        {
            username: "Lionel Messi",
            avatar: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/455247901_1566647544255850_2979140626005352086_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4-KFw0tZwUcQ7kNvgGumm25&_nc_ht=scontent.fhph1-2.fna&_nc_gid=Asbht8uRsRLY2BRiW23YGVl&oh=00_AYDM0qHWcYLmyQMBgVWgdSZrq18-BfCkiSVM48uxu2J4qA&oe=66F4AD8A",
            groupName: "FIFA Favorite Son",
            postStatus: "friends",
            likes: 108650000,
            description: "Congratulations on your victorius!",
            totalComments: 782777,
            time: 6,
            isLiked: true,
            isFavourited: true,
            image: "https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04"
        },
        {
            username: "Neymar",
            avatar: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/449159350_1997633627359685_3033974697510613913_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bxRqxaMid2wQ7kNvgHATpZV&_nc_ht=scontent.fhph2-1.fna&_nc_gid=AHEGGND76WGF-xDKG-J38eH&oh=00_AYA93jCpdrlbdmG2Rb17SPhdqG4gYE0mdrh595lfGFcw9w&oe=66F4BAE6",
            groupName: "Party All Life",
            postStatus: "private",
            likes: 8494956056,
            description: "GOAT GOAT GOAT",
            totalComments: 124895,
            time: 18,
            isLiked: undefined,
            isFavourited: true,
            image: "https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04"
        }
    ])

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
                {
                    posts.map((item: IPost, index: number) => {
                        return (
                            <div key={`post-key-${index}`} className="w-[100%] bg-sky-100 rounded border-b-2 border-sky-800">
                                <div className="flex justify-start items-center px-4 py-4 gap-2">
                                    <img src={item.avatar}
                                        className="rounded-[100%] h-10 w-10 "
                                        alt="error"
                                    />
                                    <div className="ml-2">
                                        <h4 className='font-bold text-black-500'>{item.groupName}</h4>
                                        <span className="text-base font-bold text-gray-600">{item.username}</span>
                                        <div className="flex gap-2 justify-start items-center">
                                            <span className="flex justify-center items-center text-gray-500 font-semibold align-center">{item.time}h <GoDotFill className="text-[10px]" /></span>
                                            <span>{item.postStatus === "public" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (item.postStatus === "friends" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                        </div>
                                    </div>
                                    <span className="ml-auto cursor-pointer p-1 hover:bg-sky-200 duration-300 transition rounded"><HiOutlineDotsVertical /></span>
                                </div>

                                <img
                                    src={item.image}
                                    className="w-[100%] rounded h-auto"
                                    alt="error"
                                />
                                <div className="flex flex-col p-3">
                                    <div className="flex justify-between  cursor-pointer text-sky-600 mb-2">
                                        <div className="flex gap-4 font-bold text-lg">
                                            <div
                                                onClick={() => handleLikeBtn(index)}
                                                className={item.isLiked ? "" : "hover:text-gray-600"}
                                            >
                                                {item.isLiked ? <FaHeart /> : <FaRegHeart />}
                                            </div>
                                            <FaRegComment className="hover:text-gray-600" />
                                            <FaRegPaperPlane className="hover:text-gray-600" />
                                        </div>
                                        <div
                                            onClick={() => handleFavouriteBtn(index)}
                                            className={item.isFavourited ? "" : "hover:text-gray-600"}
                                        >
                                            {item.isFavourited ? <FaBookmark /> : <BsBookmark />}
                                        </div>
                                    </div>
                                    <span className="font-medium text-sky-800">{item.likes} likes</span>
                                    <div className="w-[100%]">
                                        <span className="font-bold text-sky-700">{item.username}</span>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more="more"
                                            less="less"
                                            className="text-gray-700 w-[100%] text-base leading-relaxed"
                                            anchorClass="text-blue-500 cursor-pointer font-bold hover:text-blue-600 transition-colors duration-300"
                                            // onClick={executeOnClick}
                                            expanded={false}
                                            truncatedEndingComponent={"..."}
                                        >
                                            {item.description}
                                        </ShowMoreText>
                                        <span className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500">view all 3 comments</span>
                                        <input type="text" className="block bg-transparent outline-none mt-1" placeholder="Add a comment..." />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* a post */}

            </div>
            <div className="px-4 py-2 bg-sky-400 w-[100px] justify-center text-center rounded-full flex items-center gap-2 cursor-pointer hover:bg-sky-600 hover:text-white transition duration-150"><IoReload className="text-2xl font-bold" /><span>Refresh</span></div>
        </div>
    );
};

export default GroupActivity;
