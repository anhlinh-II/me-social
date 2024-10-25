import { useState } from "react";
import PostModal from "./PostModal";
import ReelItem from "./items/ProfileReelItem";
import { PiPlusLight } from "react-icons/pi";
import CreateReelModal from "../modal/Reel.create.modal";

interface Comment {
    id: number;
    username: string;
    text: string;
}

interface Reel {
    id: number;
    videoUrl: string;
    posterUrl: string; 
    altText: string;
    content: string;
    views: number;
    likeCount: number;
    commentCount: number;
    comments: Comment[];
}

export interface ReelGridProps {
    reels: Reel[];
}

const ReelGrid: React.FC<ReelGridProps> = ({ reels }) => {
    const [selectedPost, setSelectedPost] = useState<Reel | null>(null);
    const [showCreateReelModal, setShowCreateReelModal] = useState<boolean>(false);

    const openAddReelModal = () => {
         setShowCreateReelModal(true);
    }

    const handlePostClick = (post: Reel) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const Reels = [
        (
			<div key="createReel" className="w-56 h-96 bg-gray-200 overflow-hidden cursor-pointer p-6 border border-gray-500 relative group" 
                onClick={() => openAddReelModal()}>
				<div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/gta6.jpg')", backgroundPosition: "center bottom" }}></div>
				<div className="relative h-full p-4 pt-12 border border-white flex flex-col gap-y-4 items-center justify-center z-10 transition-transform duration-300 transform group-hover:scale-105">
					<p className="text-xl text-center text-white" style={{
						textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
					}}>Chia sẻ với mọi người video của bạn!</p>
					<div className='flex flex-col items-center justify-center gap-2 px-4 py-2'>
						<div className='p-2 rounded-full border border-white'>
							<PiPlusLight className="text-4xl text-white" />
						</div>
						<p className='text-white text-2xl'>Tạo Reel</p>
					</div>
				</div>
			</div>

		),
            ...reels.map(reel => (
                <ReelItem
                    key={reel.id}
                    posterUrl={reel.posterUrl}
                    altText={reel.altText}
                    views={reel.views}
                    likeCount={reel.likeCount} 
                    commentCount={reel.commentCount}
                    onClick={() => handlePostClick(reel)}
                />
            ))
    ]

    return (
        <div className="relative">
            <div className="grid grid-cols-4 gap-1 p-4 w-[100%]">
                {Reels}
            </div>

            {selectedPost && (
                <PostModal
                    imageUrl={selectedPost.videoUrl}
                    altText={selectedPost.altText}
                    content={selectedPost.content}
                    likes={selectedPost.likeCount}
                    comments={selectedPost.comments}
                    onClose={handleCloseModal}
                />
            )}
            <CreateReelModal
                show={showCreateReelModal}
                setShow={setShowCreateReelModal}
            />
        </div>
    );
};

export default ReelGrid;