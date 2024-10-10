import { Counter } from "../../redux/features/counter/Counter"
import CreatePost from "./CreatePost"
import ListPosts from "./ListPosts"
import Story from "../stories/Story"
import TestApi from "../TestApi"

const Posts = () => {
     return (
          <div className="flex bg-gray-100 flex-col justify-center items-center w-full">
               <Story />
               <div className="flex w-[38%] flex-col gap-4">
                    <CreatePost />
                    <TestApi />
                    <ListPosts />
                    <Counter />
               </div>
          </div>
     )
}

export default Posts