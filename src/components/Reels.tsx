import { useState } from "react"
import SideBar from "./SideBar"
import ListVideos from "./ListVideos";


const Reels = () => {
     // const [activeReel, setActiveReel] = useState<string>("reels")
     const [isReel, setIsReel] = useState<boolean>(true);
     return (
          <div className="flex flex-row w-full h-screen items-center">
               <div className="">
                    <SideBar
                         active="reels"
                         setActive={() => null}
                         isFullSiderBar={isReel}
                         setIsFullSideBar={setIsReel}
                    />
               </div>
               <div className="ml-auto h-[650px] border-2 border-sky-600 border-dashed w-[75%]">
                    <ListVideos />
               </div>
          </div>
     )
}

export default Reels