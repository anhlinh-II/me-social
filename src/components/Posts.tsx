import CreatePost from "./CreatePost"
import Story from "./Story"

const Posts = () => {
     return (
          <>
               <div className="flex flex-col gap-4">
                    <Story />
                    <CreatePost />
                    <span>I'm a posts</span>
               </div>
          </>
     )
}

export default Posts