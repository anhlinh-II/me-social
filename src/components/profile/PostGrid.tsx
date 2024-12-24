// PostGrid.tsx
import React, { useState } from 'react';
import PostItem from './items/ProfilePostItem';
import { PiPlusLight } from 'react-icons/pi';
import CreatePostModal from '../modal/Post.create.modal';
import PostDetailModal from '../modal/Post.detail.modal';

interface Comment {
	id: number;
	username: string;
	text: string;
}

interface Post {
	id: number;
	imageUrl: string;
	altText: string;
	content: string;
	likes: number;
	commentNum: number;
	comments: Comment[];
}

interface PostGridProps {
	posts: Post[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);
	const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);

    
	const handlePostClick = (post: Post) => {
		setSelectedPost(post);
	};

	const Posts = [
		(
			<div key="createPost" className="w-full h-80 bg-gray-200 overflow-hidden cursor-pointer p-6 border border-gray-500 relative group" onClick={() => setShowCreateModal(true)}>
				<div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/gta6.jpg')", backgroundPosition: "center bottom" }}></div>
				<div className="relative h-full p-4 pt-12 border border-white flex flex-col gap-y-4 items-center justify-center z-10 transition-transform duration-300 transform group-hover:scale-105">
					<p className="text-xl text-center text-white" style={{
						textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
					}}>Chia sẻ với mọi người khoảng khắc tuyệt vời của bạn!</p>
					<div className='flex flex-row items-center justify-center gap-2 px-4 py-2'>
						<div className='p-2 rounded-full border border-white'>
							<PiPlusLight className="text-4xl text-white" />
						</div>
						<p className='text-white text-2xl'>Tạo</p>
					</div>
				</div>
			</div>

		),
		...posts.map(post => (
			<PostItem
				key={post.id}
				id={post.id}
				imageUrl={post.imageUrl}
				altText={post.altText}
				likeNum={post.likes} 
				commentNum={post.commentNum}
				onClick={() => handlePostClick(post)}/>
		))
	];

	return (
		<div className="relative">
			{(posts.length > 1) ?
				<div className="grid grid-cols-3 gap-1 p-4 w-[100%]" onClick={() => setShowDetailModal(true)}>
					{Posts}
				</div>
				: (
				<div key="createPost" className="w-full h-80 bg-gray-200 overflow-hidden cursor-pointer p-6 border border-gray-500 relative group">
					<div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/gta6.jpg')", backgroundPosition: "center bottom" }}></div>
					<div className="relative h-full p-4 pt-12 border border-white flex flex-col gap-y-4 items-center justify-center z-10 transition-transform duration-300 transform group-hover:scale-105">
						<p className="text-lg text-center text-white" style={{
							textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
						}}>Chia sẻ với mọi người khoảng khắc tuyệt vời của bạn!</p>
						<PiPlusLight className="text-8xl text-white" />
					</div>
				</div>
				)}

			{selectedPost && (
				<div className="relative">
                <PostDetailModal
                    show={showDetailModal}
                    setShow={setShowDetailModal}
                />
            </div>
			)}
			<CreatePostModal
                    show={showCreateModal}
                    setShow={setShowCreateModal}
               />
		</div>
	);
};

export default PostGrid;
