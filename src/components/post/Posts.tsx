import { Counter } from "../../redux/features/counter/Counter"
import CreatePost from "./CreatePost"
import ListPosts from "./ListPosts"
import Story from "../stories/Story"

const Posts = () => {
     return (
          <div className="flex flex-col justify-center items-center">
               <Story />
               <div className="flex w-full flex-col gap-4">
                    <CreatePost />
                    <ListPosts />
                    <Counter />
               </div>
          </div>
     )
}

export default Posts