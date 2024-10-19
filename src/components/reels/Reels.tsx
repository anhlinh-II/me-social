import { useState } from "react"
import SideBar from "../SideBar"
import ListVideos from "./ListVideos";


const Reels = () => {
     // const [activeReel, setActiveReel] = useState<string>("reels")
     const [isReel, setIsReel] = useState<boolean>(true);
     return (
          <div className="flex flex-row w-full h-full items-center">
               <div className="">
                    <SideBar
                         active="reels"
                         setActive={() => null}
                         isFullSiderBar={isReel}
                         setIsFullSideBar={setIsReel}
                    />
               </div>
               <div className="ml-auto h-[100vh] w-[78%]">
                    <ListVideos />
               </div>
          </div>
     )
}

export default Reels