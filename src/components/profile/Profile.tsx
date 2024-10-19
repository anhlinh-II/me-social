import ProfileInfo from "./ProfileInfo";
import PostGrid from "./PostGrid";

const Profile = () => {
	const posts = [
		{
			id: 1,
			imageUrl: 'https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg',
			altText: 'Post 1',
			content: '1 Billion follows on social medias!',
			likes: 120,
			comments: [
				{ id: 1, username: 'john_doe', text: 'Beautiful!' },
				{ id: 2, username: 'jane_smith', text: 'Wish I was there!' },
			],
		},
		{
			id: 2,
			imageUrl: 'https://icdn.24h.com.vn/upload/1-2019/images/2019-03-14/1552480900_562316_1552484248_noticia_normal_recorte1-660-1552564223-710-width660height440.jpg',
			altText: 'Post 2',
			content: 'First person to have 5 Champions Leagues',
			likes: 95,
			comments: [
				{ id: 1, username: 'alex123', text: 'Looks amazing!' },
			],
		},
		{
			id: 3,
			imageUrl: 'https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg',
			altText: 'Post 3',
			content: 'Greatest player of Champions League',
			likes: 45,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
		{
			id: 4,
			imageUrl: 'https://icdn.24h.com.vn/upload/1-2019/images/2019-03-14/1552480900_562316_1552484248_noticia_normal_recorte1-660-1552564223-710-width660height440.jpg',
			altText: 'Post 4',
			content: 'GOAT GOAT GOAT',
			likes: 45,
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
			likes: 45,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
		{
			id: 6,
			imageUrl: 'https://icdn.24h.com.vn/upload/1-2019/images/2019-03-14/1552480900_562316_1552484248_noticia_normal_recorte1-660-1552564223-710-width660height440.jpg',
			altText: 'Post 6',
			content: 'Fighting for the country!',
			likes: 45,
			comments: [
				{ id: 1, username: 'mike_b', text: 'Agreed!' },
				{ id: 2, username: 'susan_w', text: 'GOAT' },
			],
		},
	];

	return (
		<>
			<div className="flex w-[78%] items-center justify-between mt-5 mb-[100px]">
				<div id="detail" className="flex flex-col items-center justify-center">
					<div>
						<ProfileInfo
							profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s"
							username="Cristiano Ronaldo"
							posts={3749}
							likes={1639607594}
							mutual_friends={777}
							bio="GOAT! No.1 in the world! SIUUUbscribe to my Youtube Channel!"
						/>
					</div>
					<hr className='w-[80%] h-[1.5px] bg-gray-500 ms-[-6%] mb-5 mt-5'></hr>
					
						<PostGrid posts={posts} />
					
				</div>
			</div>
		</>
	)
}

export default Profile;