import { BsBookmark } from "react-icons/bs";
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane, FaS } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoReload } from "react-icons/io5";
import ShowMoreText from "react-show-more-text";
import '../../styles/App.scss';
import { FaUserFriends } from "react-icons/fa";

import { useState } from "react";
import PostDetailModal from "../modal/Post.detail.modal";
import More from "../modal/More";

const ListPosts = () => {

     const [posts, setPosts] = useState<IPost[]>([
          {
               username: "Ahn Linhh",
               avatar: "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/435954116_122154793322083572_7316834210968533796_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ltTGED72vekQ7kNvgGXvVG2&_nc_ht=scontent.fhan14-5.fna&_nc_gid=APIQNqw7st0jEj1za9p8PPH&oh=00_AYAtznYh5bveJgn6SENDStETpzT_mTzj3AEZZ1JTWWQBsA&oe=670C7DDD",
               postStatus: "public",
               likes: 999,
               description: "Hôm nay đưa em bé nhà tôi đi chơi ở đường Phan Đình Phùng, chụp ảnh cho bé đăng bài sống ảo tí hihi",
               totalComments: 120,
               time: 2,
               isLiked: true,
               isFavourited: true,
               image: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/462239669_122152804478271357_6684104232712649501_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LbEgyzFHlsUQ7kNvgGl9r4q&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AkER3QhHmxud9rRMcNqsF63&oh=00_AYALG6PSaFuNVTMGZ_m_AwcV43-4NwUM-MUgLUpTgpg-Nw&oe=670C8544",
          },
          {
               username: "Thùy Vân",
               avatar: "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/447403309_122125640438271357_6612240292432676311_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mYhrx7oaxQUQ7kNvgEvZg8a&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AfMUfUw0B-gZS6yaVHFRIz0&oh=00_AYAgm4huQxhMb4tOxJxvrnC2h6r1LZ3vLRR-3cmIsb_EGw&oe=670C8C97",
               postStatus: "friends",
               likes: 10000000,
               description: "Chả hiểu sao nói đùa mà nó cũng phi xe từ Hà Nội lên tận Hạ Long luôn ạ",
               totalComments: 200,
               time: 6,
               isLiked: true,
               isFavourited: true,
               image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/453530783_122139111278271357_7821382139692007781_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGVYCrHea9BWuasolp3wxEepob1SPeef2mmhvVI955_aVq_K1dKTut4jiGP6RqFHvDCmz5bHEMx_1Vk1Z05Mw8H&_nc_ohc=X85O_LA4FDEQ7kNvgEbufUx&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AwTPZE99EqppBlK1EehgY-i&oh=00_AYCu4aytf_B1AKRr0KnLb2a0fRUms9fX4g5fXAsf6qwLzA&oe=67020306"
          },
          {
               username: "Khánh Linh",
               avatar: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/461669622_2070442183412162_7950140092646977056_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=hVPcayQUn-EQ7kNvgHsMdGZ&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AeGCDSiVp8YScZn6HtN7Zcn&oh=00_AYCSm0AFiiwvXam-BqMP2jKo20ho5W1MaJSkQ3qqrX8zbA&oe=670C8361",
               postStatus: "private",
               likes: 47,
               description: "Healing sau quãng thời gian chạy đua với deadline nhừ người hahahahahaha",
               totalComments: 12,
               time: 18,
               isLiked: undefined,
               isFavourited: true,
               image: "https://nld.mediacdn.vn/zoom/594_371/291774122806476800/2024/5/22/367665968-1043122716604056-338-6755-5396-1698222857-1716365427555912026234-126-0-595-750-crop-17163656793691494473476.jpg"
          }
     ])
     const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
     const [showMore, setShowMore] = useState<boolean>(false);

     interface IPost {

          username: string;
          avatar: string;
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
          <div className="flex justify-center items-center flex-col gap-5 w-full">
               {/* list post */}
               <div className=" w-full h-fit rounded flex flex-col gap-6">
                    {
                         posts.map((item: IPost, index: number) => {
                              return (
                                   <div key={`post-key-${index}`} className="w-[100%] bg-white border shadow-md rounded-lg">
                                        <div className="flex justify-start items-center px-4 py-4 gap-2">
                                             <img src={item.avatar}
                                                  className="border border-sky-600 rounded-[100%] h-10 w-10 cursor-pointer"
                                                  alt="error"
                                             />
                                             <div className="ml-2">
                                                  <span className="text-base font-bold text-sky-800 cursor-pointer hover:underline decoration-sky-700">{item.username}</span>
                                                  <div className="flex gap-2 justify-start items-center">
                                                       <span className="flex justify-center items-center text-gray-500 font-semibold align-center">{item.time}h <GoDotFill className="text-[10px]" /></span>
                                                       <span>{item.postStatus === "public" ? < FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" /> : (item.postStatus === "friends" ? <FaUserFriends className="text-gray-600 text-sm font-normal align-center" /> : <FaLock className="text-gray-600 text-sm font-normal align-center" />)}</span>
                                                  </div>
                                             </div>
                                             <span className="ml-auto cursor-pointer p-1 hover:bg-sky-200 duration-300 transition rounded" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
                                        </div>

                                        <img
                                             src={item.image}
                                             className="w-[100%] rounded h-auto cursor-pointer"
                                             alt="error"
                                             onClick={() => setShowDetailModal(true)}
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
                                                  <span
                                                       className="font-semibold text-gray-600 hover:underline hover:decoration-1.5 cursor-pointer transition duration-1 hover:text-gray-500 hover-decoraion-gray-500"
                                                       onClick={() => setShowDetailModal(true)}
                                                  >
                                                       view all 3 comments
                                                  </span>
                                                  <input type="text" className="block bg-transparent outline-none mt-1" placeholder="Add a comment..." />
                                             </div>
                                        </div>
                                        <PostDetailModal
                                             show={showDetailModal}
                                             setShow={setShowDetailModal}
                                        />
                                   </div>
                              )
                         })
                    }
                    {/* a post */}

               </div>
               <div className="px-4 py-2 bg-sky-400 w-[100px] justify-center text-center rounded-full flex items-center gap-2 cursor-pointer hover:bg-sky-600 hover:text-white transition duration-150"><IoReload className="text-2xl font-bold" /><span>Refresh</span></div>
               <More show={showMore} setShow={setShowMore}/>
          </div>
     )
};

export default ListPosts;
