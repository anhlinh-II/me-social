import MultiCarousel from "./MultiCarousel";

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
			background: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
		},
	];

	const carouselUsers = fakeData.map((item) => {
		return (
			<div key={item.id} className="story-container">
				{/* Background video or image */}
				<video className="story-background" controls>
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
	});

	return (
		<>
			<div>
				<MultiCarousel items={carouselUsers} />
			</div>

		</>
	)
}

export default Story;