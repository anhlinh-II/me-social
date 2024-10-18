import { Counter } from "../../redux/features/counter/Counter"
import CreatePost from "./CreatePost"
import ListPosts from "./ListPosts"
import Story from "../stories/Story"
import PostList from "./TestNewsFeed"
import ImageUploader from "../test/ImageUploader"
import VideoUploader from "../test/VideoUploader"

const Posts = () => {
     const userId = 3;
     
     return (
          <div className="flex bg-gray-100 flex-col justify-center items-center w-full mb-[5%]">
               <Story />
               <div className="flex w-[40%] flex-col gap-4">
                    <CreatePost />
                    <ImageUploader />
                    <VideoUploader />
                    <PostList userId={userId} />
                    <ListPosts />
                    <Counter />
               </div>
          </div>
     )
}

export default Posts