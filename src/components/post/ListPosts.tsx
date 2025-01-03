import { BsBookmark } from "react-icons/bs";
import { FaBookmark, FaEarthAmericas, FaHeart, FaLock, FaRegComment, FaRegHeart, FaRegPaperPlane } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoReload } from "react-icons/io5";
import ShowMoreText from "react-show-more-text";
import '../../styles/App.scss';
import { FaUserFriends } from "react-icons/fa";
import avt from '../../assets/me1.jpg';
import jisoo from '../../assets/jisoo.jpg'
import { useState } from "react";
import PostDetailModal from "../modal/Post.detail.modal";
import More from "../modal/More";
import { useAppSelector } from "../../redux/hook";

const ListPosts = () => {

	const user = useAppSelector(state => state.account.user)
	const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
	const [showMore, setShowMore] = useState<boolean>(false);
	const [posts, setPosts] = useState<IPost[]>([
		{
			username: "Ahn Linhh",
			avatar: avt,
			postStatus: "public",
			likes: 999,
			description: "Hôm nay đưa em bé nhà tôi đi chơi ở đường Phan Đình Phùng, chụp ảnh cho bé đăng bài sống ảo tí hihi",
			totalComments: 120,
			time: 2,
			isLiked: true,
			isFavourited: true,
			image: jisoo,
			imageError: false
		},
		{
			username: "Thùy Vân",
			avatar: avt,
			postStatus: "friends",
			likes: 10000000,
			description: "Chả hiểu sao nói đùa mà nó cũng phi xe từ Hà Nội lên tận Hạ Long luôn ạ",
			totalComments: 200,
			time: 6,
			isLiked: true,
			isFavourited: true,
			image: jisoo,
			imageError: false
		},
		{
			username: "Khánh Linh",
			avatar: avt,
			postStatus: "private",
			likes: 47,
			description: "Healing sau quãng thời gian chạy đua với deadline nhừ người hahahahahaha",
			totalComments: 12,
			time: 18,
			isLiked: undefined,
			isFavourited: true,
			image: "https://nld.mediacdn.vn/zoom/594_371/291774122806476800/2024/5/22/367665968-1043122716604056-338-6755-5396-1698222857-1716365427555912026234-126-0-595-750-crop-17163656793691494473476.jpg",
			imageError: false
		}
	])

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
		imageError: boolean;
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

	const handleImageError = (index: number) => {
		setPosts(prevPosts =>
			prevPosts.map((post, i) =>
				i === index ? { ...post, imageError: true } : post
			)
		);
	};

	return (
		<>
			<div className="flex justify-center items-center flex-col gap-5 w-full">
				{/* list post */}
				<div className=" w-full h-fit rounded flex flex-col gap-4">
					{
						posts.map((item: IPost, index: number) => {
							return (
								<div key={`post-key-${index}`} className="md:w-[600px] sm:w-full bg-white border shadow-md rounded-lg">
									<div className="flex justify-start items-center px-3 py-2 gap-2">
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
										<span className="ml-auto w-[36px] h-[36px] text-xl cursor-pointer p-2 hover:bg-sky-200 duration-300 transition rounded-full" onClick={() => setShowMore(true)}><HiOutlineDotsVertical /></span>
									</div>
									{item.imageError ? (
										<div className="flex justify-center items-center w-full h-64 bg-gray-200">
											<div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
										</div>
									) : (
										<img
											src={item.image}
											className="w-[100%] rounded h-auto cursor-pointer"
											alt="Post"
											onError={() => handleImageError(index)}
											onClick={() => setShowDetailModal(true)}
										/>
									)}
									<div className="flex flex-col p-3">
										<div className="flex justify-between  cursor-pointer text-sky-600 mb-2">
											<div className="flex gap-1 font-bold text-2xl">
												<button
													onClick={() => handleLikeBtn(index)}
													className={item.isLiked ? "w-[34px] h-[34px] text-[red] rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] rounded-full flex items-center justify-center"}
												>
													{item.isLiked ? <FaHeart /> : <FaRegHeart />}
												</button>
												<button className={`w-[34px] h-[34px] hover:text-gray-600 rounded-full flex items-center justify-center`}>
													<FaRegComment />
												</button>
												<button className={`w-[34px] h-[34px] hover:text-gray-600 rounded-full flex items-center justify-center pe-1`}>
													<FaRegPaperPlane />
												</button>
											</div>
											<button
												onClick={() => handleFavouriteBtn(index)}
												className={item.isFavourited ? "w-[34px] h-[34px] text-[blue-600] text-2xl rounded-full flex items-center justify-center" : "hover:text-gray-600 w-[34px] h-[34px] text-2xl rounded-full flex items-center justify-center"}
											>
												{item.isFavourited ? <FaBookmark /> : <BsBookmark />}
											</button>
										</div>
										<span className="font-medium text-sky-800">{item.likes} likes</span>
										<div className="w-[100%] border-t-[1.5px] border-gray-300 mt-2">
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
												View all 3 comments
											</span>
											<div className='flex flex-row mt-2'>
												<img src={item.avatar}
													className="rounded-[100%] h-10 w-10 me-2"
													alt="error"
												/>
												<input type="text" className="block bg-transparent outline-none mt-1" placeholder={`comment as ${user.username}`} />
											</div>
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
			<div className="relative">
				<PostDetailModal
					show={showDetailModal}
					setShow={setShowDetailModal}
				/>
			</div>

		</>
	)
}

export default ListPosts;
