import { Counter } from "../redux/features/counter/Counter"
import CreatePost from "./CreatePost"
import ListPosts from "./ListPosts"
import Story from "./Story"

const Posts = () => {
     return (
          <div className="flex flex-col justify-center items-center mt-16">
               <Story />
               <div className="flex flex-col gap-4">
                    <CreatePost />
                    <ListPosts />
                    <Counter />
               </div>
          </div>
     )
}

export default Posts