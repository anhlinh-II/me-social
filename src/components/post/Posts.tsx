import CreatePost from "./CreatePost"
import ListPosts from "./ListPosts"
import Story from "../stories/Story"
import TestNewsFeed from "./TestNewsFeed"
import { useAppSelector } from "../../redux/hook"
import { useUser } from "../../utils/Constant"

const Posts = () => {
     const user = useUser();
     
     return (
		<>
		<div className="flex bg-gray-100 flex-col justify-center items-center w-full mb-[5%]">
               <Story />
               <div className="flex w-[40%] flex-col gap-4">
                    <CreatePost />
                    <TestNewsFeed userId={Number(user.id)} />
                    <ListPosts />
               </div>
          </div>
		</>
          
     )
}

export default Posts