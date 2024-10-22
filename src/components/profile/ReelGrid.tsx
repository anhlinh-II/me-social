import { useState } from "react";
import PostModal from "./PostModal";
import ReelItem from "./ProfileReelItem";

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
    likes: number;
    comments: Comment[];
}

export interface ReelGridProps {
    reels: Reel[];
}

const ReelGrid: React.FC<ReelGridProps> = ({ reels }) => {
    const [selectedPost, setSelectedPost] = useState<Reel | null>(null);

    const handlePostClick = (post: Reel) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <div className="relative">
            <div className="grid grid-cols-3 gap-1 p-4 w-[100%]">
                {reels.map(reel => (
                    <ReelItem
                        key={reel.id}
                        posterUrl={reel.posterUrl}
                        altText={reel.altText}
                        onClick={() => handlePostClick(reel)}
                    />
                ))}
            </div>

            {selectedPost && (
                <PostModal
                    imageUrl={selectedPost.videoUrl}
                    altText={selectedPost.altText}
                    content={selectedPost.content}
                    likes={selectedPost.likes}
                    comments={selectedPost.comments}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ReelGrid;