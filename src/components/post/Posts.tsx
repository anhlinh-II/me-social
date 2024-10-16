import { Counter } from "../../redux/features/counter/Counter"
import CreatePost from "./CreatePost"
import ListPosts from "./ListPosts"
import Story from "../stories/Story"
import PostList from "../TestNewsFeed"

const Posts = () => {
     const userId = 3;
     
     return (
          <div className="flex bg-gray-100 flex-col justify-center items-center w-full">
               <Story />
               <div className="flex w-[40%] flex-col gap-4">
                    <CreatePost />
                    <PostList userId={userId} />
                    <ListPosts />
                    <Counter />
               </div>
          </div>
     )
}

export default Posts