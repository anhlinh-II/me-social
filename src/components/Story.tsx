import MultiCarousel from "./MultiCarousel";
import { useNavigate } from 'react-router-dom';

const Story = () => {

	const fakeData = [
		{
			id: 1,
			userName: "Story 1",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.w3schools.com/html/mov_bbb.mp4",
		},
		{
			id: 2,
			userName: "Story 2",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
		},
		{
			id: 3,
			userName: "Story 3",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
		},
		{
			id: 4,
			userName: "Story 4",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
		{
			id: 5,
			userName: "Story 5",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
		},
		{
			id: 6,
			userName: "Story 6",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
		{
			id: 7,
			userName: "Story 7",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
		},
		{
			id: 8,
			userName: "Story 8",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.w3schools.com/html/mov_bbb.mp4",
		},
		{
			id: 9,
			userName: "Story 9",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
		},
		{
			id: 10,
			userName: "Story 10",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
		{
			id: 11,
			userName: "Story 11",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4",
		},
		{
			id: 12,
			userName: "Story 12",
			img: "https://via.placeholder.com/100",
			avt: "https://via.placeholder.com/50",
			background: "https://www.w3schools.com/html/mov_bbb.mp4",
		},
	];

	const navigate = useNavigate();
	const carouselUsers = [ 
		(
			<div key="create-new-story" className="story-container create-new-story" 
				style={{ cursor: 'pointer' }} onClick={() => navigate('/stories', { state: { stories: fakeData, storyIndex: 2 } })}>
				{/* Placeholder for the 'Create New Story' item */}
				<div className="create-story flex flex-col items-center">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s" 
						alt="{user.userName}" className="w-100 h-40 object-cover" />
					<h5 className="text-black font-semibold text-center mt-2 mb-2">Tạo Tin</h5>
					<div className="create-story-btn">+</div>
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
					<h5 className="text-white font-semibold">{item.userName}</h5>
				</div>
			</div>
			);
		})
	];

	return (
		<>
			<div className="">
				<MultiCarousel items={carouselUsers} />
			</div>

		</>
	)
}

export default Story;