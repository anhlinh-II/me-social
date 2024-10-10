import { BsBookmark } from "react-icons/bs";
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane } from "react-icons/fa6";
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
               avatar: "https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/451418121_1493503281258736_1067539081919969742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Zd01_0VGpYQ7kNvgGeWDHD&_nc_ht=scontent.fhph1-1.fna&oh=00_AYBHEAthlGeQj62ElU3i3-wL8Pg2Yne60mzoift-ZQxEKw&oe=66F439A4",
               postStatus: "public",
               likes: 999,
               description: "Hôm nay đưa em bé nhà tôi đi chơi ở đường Phan Đình Phùng, chụp ảnh cho bé đăng bài sống ảo tí hihi",
               totalComments: 120,
               time: 2,
               isLiked: true,
               isFavourited: true,
               image: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/438804782_1493180808269191_794376572904014893_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lTxR81NaTf4Q7kNvgFzm-S-&_nc_ht=scontent.fhph1-2.fna&oh=00_AYDAhKVXDXWRQG-Mh7sccB6jZ3ycM328lsE2XtLyp7YZ8w&oe=66F4962C",
          },
          {
               username: "Thùy Vân",
               avatar: "https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/455247901_1566647544255850_2979140626005352086_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4-KFw0tZwUcQ7kNvgGumm25&_nc_ht=scontent.fhph1-2.fna&_nc_gid=Asbht8uRsRLY2BRiW23YGVl&oh=00_AYDM0qHWcYLmyQMBgVWgdSZrq18-BfCkiSVM48uxu2J4qA&oe=66F4AD8A",
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
               avatar: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/449159350_1997633627359685_3033974697510613913_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bxRqxaMid2wQ7kNvgHATpZV&_nc_ht=scontent.fhph2-1.fna&_nc_gid=AHEGGND76WGF-xDKG-J38eH&oh=00_AYA93jCpdrlbdmG2Rb17SPhdqG4gYE0mdrh595lfGFcw9w&oe=66F4BAE6",
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
		<>
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
								</div>
							)
						})
					}
					{/* a post */}

				</div>
				<div className="px-4 py-2 bg-sky-400 w-[100px] justify-center text-center rounded-full flex items-center gap-2 cursor-pointer hover:bg-sky-600 hover:text-white transition duration-150"><IoReload className="text-2xl font-bold" /><span>Refresh</span></div>
				<More show={showMore} setShow={setShowMore} />
			</div>
			<PostDetailModal
				show={showDetailModal}
				setShow={setShowDetailModal}
			/>
		</>
	)
}

export default ListPosts;
