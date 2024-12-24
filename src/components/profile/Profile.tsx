import ProfileInfo from "./ProfileInfo";
import PostGrid from "./PostGrid";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import ReelGrid from "./ReelGrid";
import { fakeReel, fakeStory } from "../fakeData";
import ProfileStory from "./ProfileStory";
import { LuDot } from "react-icons/lu";

const Profile = () => {
	const location = useLocation();
	const initialActive = location.pathname.includes("reels") ? "reels" : "posts";
	const [active, setActive] = useState<string>(initialActive);

	const posts = [
		{
			id: 1,
			imageUrl: 'https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg',
			altText: 'Post 1',
			content: '1 Billion follows on social medias!',
			likes: 9842138,
			commentNum: 128647,
			comments: [
				{ id: 1, username: 'john_doe', text: 'Beautiful!' },
				{ id: 2, username: 'jane_smith', text: 'Wish I was there!' },
			],
		},
		{
			id: 2,
			imageUrl: 'https://nld.mediacdn.vn/zoom/594_371/291774122806476800/2024/5/22/367665968-1043122716604056-338-6755-5396-1698222857-1716365427555912026234-126-0-595-750-crop-17163656793691494473476.jpg',
			altText: 'Post 2',
			content: 'First person to have 5 Champions Leagues',
			likes: 3842168,
			commentNum: 128647,
			comments: [
				{ id: 1, username: 'alex123', text: 'Looks amazing!' },
			],
		},
		{
			id: 3,
			imageUrl: 'https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg',
			altText: 'Post 3',
			content: 'Greatest player of Champions League',
			likes: 697231,
			commentNum: 87678,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
		{
			id: 4,
			imageUrl: 'http://localhost:5173/src/assets/jisoo.jpg',
			altText: 'Post 4',
			content: 'GOAT GOAT GOAT',
			likes: 468127,
			commentNum: 92432,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
		{
			id: 5,
			imageUrl: 'https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg',
			altText: 'Post 5',
			content: 'Helping children',
			likes: 295354,
			commentNum: 78673,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
		{
			id: 6,
			imageUrl: 'http://localhost:5173/src/assets/me1.jpg',
			altText: 'Post 6',
			content: 'Fighting for the country!',
			likes: 78925,
			commentNum: 47359,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
	];
	const reels = fakeReel.reels;
	const stories = fakeStory.stories;

	return (
		<>
			<div className="flex w-[80%] items-center justify-between mt-5 mb-[100px] ms-[-10%]">
				<div id="detail" className="w-[100%] flex flex-col items-center justify-center">
					<ProfileInfo />
					<ProfileStory stories={stories} />
					<hr className='w-[97%] h-[1.5px] bg-gray-500 mt-5'></hr>
					<div className="flex space-x-2">
						<Link to={`/profile`} onClick={() => setActive("posts")}>
							<button className={active === "posts"
								? "flex flex-row gap-2 items-center py-2 px-6 border-t-2 border-blue-300 font-bold"
								: "flex flex-row gap-2 items-center py-2 px-6 border-t-2 border-gray-100 rounded-md"}>
								<BsGrid3X3GapFill />
								Bài viết
							</button>
						</Link>

						<Link to={`/profile/reels`} onClick={() => setActive("reels")}>
							<button className={active === "reels"
								? "flex flex-row gap-2 items-center py-2 px-6 border-t-2 border-blue-300 font-bold"
								: "flex flex-row gap-2 items-center py-2 px-6 border-t-2 border-gray-100 rounded-md"}>
								<MdVideoLibrary />
								Reels
							</button>
						</Link>

					</div>
					{(active === "posts") ?
						<PostGrid posts={posts} />
						:
						<ReelGrid reels={reels} />
					}

					<div className="flex flex-wrap mt-20 text-gray-400 text-sm">
						<div className="flex  justify-center items-center">
							<span>About</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Help</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Press</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>API</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Jobs</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Privacy</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Terms</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Locations</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Language</span> <LuDot />
						</div>
						<div className="flex justify-center items-center">
							<span>Verified</span>
						</div>
					</div>

					<div className="mt-6 text-gray-400 text-sm">
						<span>© 2024 MeSocial from LL</span>
					</div>

				</div>
			</div>
		</>
	)
}

export default Profile;