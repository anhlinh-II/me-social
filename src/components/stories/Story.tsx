import { FaCirclePlus } from "react-icons/fa6";
import MultiCarousel from "./MultiCarousel";
import { useNavigate } from 'react-router-dom';

const Story = () => {

	const fakeData = [
		{
			id: 1,
			userName: "Cristiano Ronaldo",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.w3schools.com/html/mov_bbb.mp4",
		},
		{
			id: 2,
			userName: "Lionel Messi",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
		},
		{
			id: 3,
			userName: "Neymar Jr",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
		},
		{
			id: 4,
			userName: "Antony 2008",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
		{
			id: 5,
			userName: "Story 5",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
		},
		{
			id: 6,
			userName: "Story 6",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
		{
			id: 7,
			userName: "Story 7",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
		},
		{
			id: 8,
			userName: "Story 8",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.w3schools.com/html/mov_bbb.mp4",
		},
		{
			id: 9,
			userName: "Story 9",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
		},
		{
			id: 10,
			userName: "Story 10",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
		{
			id: 11,
			userName: "Story 11",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
		},
		{
			id: 12,
			userName: "Story 12",
			img: "https://via.placeholder.com/100",
			avt: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg",
			background: "https://www.w3schools.com/html/mov_bbb.mp4",
		},
	];

	const navigate = useNavigate();
	const carouselUsers = [
		(
			<div key="create-new-story" className="story-container create-new-story hover:opacity-90"
				style={{ cursor: 'pointer' }} onClick={() => navigate('/stories', { state: { stories: fakeData, storyIndex: 0 } })}>
				<div className="create-story flex flex-col items-center bg-gray-400">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s"
						alt="{user.userName}" className="w-100 h-[120px] object-cover" />
					<h5 className="text-white font-semibold w-full text-center mt-1">Tạo Tin</h5>
					<div className="w-full h-full px-2 pb-2 pt-1 text-3xl flex items-center justify-center">
						<FaCirclePlus className="create-story-btn"/>
					</div>
				</div>
			</div>
		),

		...fakeData.map((item, index) => {


			const handleClick = () => {
				navigate('/stories', { state: { stories: fakeData, storyIndex: index } });
			};

			return (
				<div key={item.id} className="story-container hover:opacity-90" onClick={handleClick} style={{ cursor: 'pointer' }}>
					{/* Background video or image */}
					<video className="story-background">
						<source src={item.background} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					{/* Avatar and username */}
					<div className="story-info">
						<img src={item.avt} alt={item.userName} className="story-avatar" />
						<img className="absolute bottom-0 left-7 w-3 h-3 rounded-full object-cover" 
                    		src="../src/assets/img/icons/onlineIcon.png"></img> 
					</div>
					<div className="absolute bottom-[0.5rem] left-[0.5rem]">
						<h5 className="text-white text-sm font-semibold">{item.userName}</h5>
					</div>
				</div>
			);
		})
	];

	return (
		<>
			<div className="mt-2 mb-2">
				<MultiCarousel items={carouselUsers} />
			</div>

		</>
	)
}

export default Story;