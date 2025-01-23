import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchFavoritePost } from "../../redux/slice/postsSlice";
import { useUser } from "../../utils/CustomHook";
import PostPlaceholder from "./PostPlaceholder";
import { PostResponse } from "../../types/Post";
import PostItem from "./PostItem";

const FavoritePost = () => {
     const [page, setPage] = useState(0);
     const [size] = useState(10);

     const user = useUser();

     const containerRef = useRef<HTMLDivElement | null>(null);

     const dispatch = useAppDispatch();
     const { favoritePost, isLoading, error, hasMore } = useAppSelector((state) => state.posts);

     useEffect(() => {
          if (hasMore) {
               console.log("Fetching page:", page);
               dispatch(fetchFavoritePost({ userId: Number(user.id), page, size }));
          }
     }, [page, dispatch]);

     useEffect(() => {
          const container = containerRef.current
          const handleScroll = () => {
               if (
                    container &&
                    container.scrollHeight - container.scrollTop <= container.clientHeight + 100
               ) {
                    setPage((prev) => prev + 1);
               }
          };

          container?.addEventListener('scroll', handleScroll);

          return () => {
               container?.removeEventListener('scroll', handleScroll);
          };
     }, [hasMore, isLoading, page]);


     if (isLoading && favoritePost.length === 0) {
          return (
               <div className="w-[75%] md:w-[600px] sm:w-full">

               </div>
          );
     }

     if (error) {
          return <div>Error loading posts</div>;
     }
     return (
          <div ref={containerRef} id='post-list-container' className="w-[75%] h-fit rounded flex flex-col justify-around">
               {favoritePost.map((post: PostResponse, index: number) => (
                    <PostItem index={index} post={post} error={error} isLoading={isLoading} />
               ))}
               {
                    isLoading && (
                         <>
                              <PostPlaceholder />
                              <PostPlaceholder />
                         </>
                    )
               }
          </div>
     );
};

export default FavoritePost;
