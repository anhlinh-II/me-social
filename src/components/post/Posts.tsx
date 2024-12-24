import CreatePost from "./CreatePost"
import Story from "../stories/Story"
import NewsFeed from "./NewsFeed"
import { useUser } from "../../utils/CustomHook"

const Posts = () => {
     const user = useUser();
     
     return (
		<>
		<div className="flex bg-gray-100 flex-col justify-center items-center w-full mb-[5%]">
               <Story />
               <div className="flex w-[40%] flex-col gap-4">
                    <CreatePost />
                    <NewsFeed userId={Number(user.id)} />
               </div>
          </div>
		</>
          
     )
}

export default Posts