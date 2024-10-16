import { useRef, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaBookmark } from 'react-icons/fa6';
import { IoPause, IoPlay } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { PiSpeakerSimpleSlashFill, PiSpeakerSimpleHighFill } from 'react-icons/pi';
import ShowMoreText from "react-show-more-text";

const ListVideos = () => {
	const [isMuted, setIsMuted] = useState(false);
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
	const [isPlaying, setIsPlaying] = useState(true);
	const [progress, setProgress] = useState(0);
	const [showPlayButton, setShowPlayButton] = useState(false);

	const handlePlay = () => {
		const videoElement = videoRefs.current[currentVideoIndex];
		if (videoElement) {
			if (videoElement.paused) {
				videoElement.play();
				setIsPlaying(true);
			} else {
				videoElement.pause();
				setIsPlaying(false);
			}
		}
	};

	const handleMuteVideo = () => {
		const videoElement = videoRefs.current[currentVideoIndex];
		if (videoElement) {
			videoElement.muted = !videoElement.muted;
			setIsMuted(videoElement.muted);
		}
	};

	const handleVideoTimeUpdate = () => {
		const videoElement = videoRefs.current[currentVideoIndex];
		if (videoElement) {
			const progress = (videoElement.currentTime / videoElement.duration) * 100; // Tính phần trăm tiến trình
			setProgress(progress);
		}
	};

	interface IFakeReelsData {
		username: string;
		avatar: string;
		likes: number;
		description: string;
		totalComments: number;
		isLiked: boolean;
		isFavourited: boolean;
		video: string;
		isFriend: boolean;
	}
	const fakeReelsData: IFakeReelsData[] = [
		{
			username: "Ahn Linhh",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/451418121_1493503281258736_1067539081919969742_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=FLRvjd8ljSwQ7kNvgF2lgaM&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AzWBNGZrTZ6JzlLGz23NluW&oh=00_AYA_j8m04FT-WgZpTpMJx4PuUAdsjuksB85D_5yeYVS-3Q&oe=66F8B1E2",
			likes: 56,
			description: "video này là một video vớ vẩn mà tôi nhờ chat gpa bê về hộ, cái đụ má nó test mãi không được cái showmoretext này, cuối cùng lỗi là tại vị mình viết liền tù tì 1 chữ không có dấu cách",
			totalComments: 12,
			isLiked: true,
			isFavourited: true,
			video: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
			isFriend: false
		},
		{
			username: "Khánh Linh",
			avatar: "https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/449159350_1997633627359685_3033974697510613913_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bxRqxaMid2wQ7kNvgHATpZV&_nc_ht=scontent.fhph2-1.fna&_nc_gid=AHEGGND76WGF-xDKG-J38eH&oh=00_AYA93jCpdrlbdmG2Rb17SPhdqG4gYE0mdrh595lfGFcw9w&oe=66F4BAE6",
			likes: 47,
			description: "Healing sau quãng thời gian chạy đua với deadline nhừ người hahahahahaha",
			totalComments: 12,
			isLiked: true,
			isFavourited: true,
			video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
			isFriend: true
		},
		{
			username: "Hồng Phấn",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
			likes: 284,
			description: "ava i do se thich hon (my mom😔)!",
			totalComments: 53,
			isLiked: false,
			isFavourited: true,
			video: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
			isFriend: false
		},
		{
			username: "Hồng Phấn",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
			likes: 284,
			description: "ava i do se thich hon (my mom😔)!",
			totalComments: 53,
			isLiked: false,
			isFavourited: true,
			video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
			isFriend: false
		},
		{
			username: "Hồng Phấn",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
			likes: 284,
			description: "ava i do se thich hon (my mom😔)!",
			totalComments: 53,
			isLiked: false,
			isFavourited: true,
			video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
			isFriend: false
		},
		{
			username: "Hồng Phấn",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
			likes: 284,
			description: "ava i do se thich hon (my mom😔)!",
			totalComments: 53,
			isLiked: false,
			isFavourited: true,
			video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
			isFriend: false
		},
		{
			username: "Hồng Phấn",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
			likes: 284,
			description: "ava i do se thich hon (my mom😔)!",
			totalComments: 53,
			isLiked: false,
			isFavourited: true,
			video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
			isFriend: false
		},
		{
			username: "Hồng Phấn",
			avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/450060036_2206890346344715_5629840112055867382_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=d1HRxqoc9RoQ7kNvgFGnzuh&_nc_ht=scontent.fhan2-5.fna&oh=00_AYBex4CJfA1Yhbv2uQXCH-iROeI1iBIdaq4F-pRE-vH7lw&oe=66F8A893",
			likes: 284,
			description: "ava i do se thich hon (my mom😔)!",
			totalComments: 53,
			isLiked: false,
			isFavourited: true,
			video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
			isFriend: false
		}
	]

	const handleNextVideo = () => {
		const currentVideoElement = videoRefs.current[currentVideoIndex];
		if (currentVideoElement) {
			currentVideoElement.currentTime = 0;
			setIsPlaying(true);
		}
		setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % fakeReelsData.length);
	};

	const handlePrevVideo = () => {
		const currentVideoElement = videoRefs.current[currentVideoIndex];
		if (currentVideoElement) {
			currentVideoElement.currentTime = 0;
			setIsPlaying(true);
		}
		setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + fakeReelsData.length) % fakeReelsData.length);
	};

	const currentVideo = fakeReelsData[currentVideoIndex]; // Get the current video

	return (
		<div className='w-full h-full mx-auto relative flex-1 flex justify-center items-center bg-black'>
			<div className="relative w-full h-full flex items-center justify-center border border-black rounded-xl z-5">
				{/* Video Navigation Buttons */}
				<button
					onClick={handlePrevVideo}
					className="text-white bg-gray-700 p-2 me-7 w-[40px] h-[40px] rounded-[100%] hover:bg-gray-600 cursor-pointer"
					disabled={currentVideoIndex === 0}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				{/* Main video */}
				<div className="w-[360px] h-[650px] cursor-pointer relative bg-[#18191A]"
					onMouseEnter={() => setShowPlayButton(true)}
					onMouseLeave={() => setShowPlayButton(false)}>
					<video
						key={currentVideoIndex}
						ref={(el) => (videoRefs.current[currentVideoIndex] = el)}
						autoPlay
						muted={isMuted}
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full"
						onClick={handlePlay}
						onTimeUpdate={handleVideoTimeUpdate}
					>
						<source src={currentVideo.video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					{/* Play Icon */}
					{showPlayButton && !isPlaying && (
						<span
							className='text-md absolute top-[47%] right-[44%] p-3 rounded-full bg-black/50 text-white cursor-pointer'
							onClick={handlePlay}
						>
							<IoPlay />
						</span>
					)}

					{/* Pause Icon */}
					{showPlayButton && isPlaying && (
						<span
							className='text-md absolute top-[47%] right-[44%] p-3 rounded-full bg-black/50 text-white cursor-pointer'
							onClick={handlePlay}
						>
							<IoPause />
						</span>
					)}

					{/* Video Info */}
					<div className='absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent'>
						<div className='flex items-center mb-2 text-white'>
							<img src={currentVideo.avatar} className="rounded-full h-10 w-10 mr-2" alt="avatar" />
							<span className='text-sm font-bold'>{currentVideo.username}</span>
							{!currentVideo.isFriend && (
								<>
									<LuDot className='text-xl ml-2' />
									<button className='ml-2 px-2 py-1 border border-white rounded-md'>Add friend</button>
								</>
							)}
						</div>
						<ShowMoreText
							lines={2}
							more="more"
							less="less"
							className='text-white/80 mb-5'
							anchorClass="text-slate-300 cursor-pointer font-bold hover:text-slate-100"
						>
							<p>{currentVideo.description}</p>
						</ShowMoreText>
					</div>

					{/* Video Controls */}
					<div className="absolute bottom-6 right-[-65px] flex flex-col items-center gap-5 text-white text-center">
						<span className='cursor-pointer text-3xl'><FaRegHeart /><span className='text-sm'>{currentVideo.likes}</span></span>
						<span className='cursor-pointer text-3xl'><FaRegComment /><span className='text-sm'>{currentVideo.totalComments}</span></span>
						<span className='cursor-pointer text-3xl'><FaRegPaperPlane /></span>
						{currentVideo.isFavourited ? <FaBookmark className=' text-3xl' /> : <BsBookmark className='cursor-pointer text-3xl' />}
					</div>

					{/* Video Progress Bar */}
					<div className="absolute bottom-4 left-0 w-[90%] ms-[5%] rounded-lg h-1 bg-gray-600">
						<div
							className="h-full bg-white"
							style={{ width: `${progress}%` }}
						></div>
					</div>

					{/* Mute Icon */}
					<div
						className='absolute top-2 right-2 p-2 bg-gray-800/50 rounded-full cursor-pointer'
						onClick={handleMuteVideo} // Mute/unmute the current video
					>
						{isMuted ? <PiSpeakerSimpleSlashFill /> : <PiSpeakerSimpleHighFill />}
					</div>
				</div>
				{/* Video Navigation Buttons */}
				<button
					onClick={handleNextVideo}
					className="text-white bg-gray-700 p-2 ms-7 rounded-[100%] w-[40px] h-[40px] hover:bg-gray-600"
					disabled={currentVideoIndex === fakeReelsData.length - 1}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</div>
	);

};

export default ListVideos;
