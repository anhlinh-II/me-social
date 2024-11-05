import { Link } from "react-router-dom";
import UserSimpleCard from "../user/UserSimpleCard";

const SuggestFriends = () => {

     const users = [
          {
               id: 1,
               name: 'Alice Johnson',
               avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
               description: 'Graphic Designer',
               mutualFriends: 12,
               location: 'New York, USA',
               joinedSince: 'June 2018'
          },
          {
               id: 2,
               name: 'Mark Stevenson',
               avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
               description: 'Full-Stack Developer',
               mutualFriends: 8,
               location: 'London, UK',
               joinedSince: 'March 2019'
          },
          {
               id: 3,
               name: 'Clara Rodriguez',
               avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
               description: 'Marketing Specialist',
               mutualFriends: 20,
               location: 'Madrid, Spain',
               joinedSince: 'January 2020'
          },
          {
               id: 4,
               name: 'David Kim',
               avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
               description: 'Software Engineer',
               mutualFriends: 15,
               location: 'Seoul, South Korea',
               joinedSince: 'October 2017'
          },
          {
               id: 5,
               name: 'Emma Wong',
               avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
               description: 'Data Analyst',
               mutualFriends: 9,
               location: 'Singapore',
               joinedSince: 'April 2019'
          },
          {
               id: 6,
               name: 'Liam O\'Brien',
               avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
               description: 'Project Manager',
               mutualFriends: 7,
               location: 'Dublin, Ireland',
               joinedSince: 'August 2020'
          },
          {
               id: 7,
               name: 'Sophia Garcia',
               avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
               description: 'UX/UI Designer',
               mutualFriends: 18,
               location: 'Mexico City, Mexico',
               joinedSince: 'May 2018'
          },
          {
               id: 8,
               name: 'James Patel',
               avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
               description: 'Cloud Architect',
               mutualFriends: 14,
               location: 'Mumbai, India',
               joinedSince: 'February 2017'
          },
     ];

     return (
          <div className="h-fit border-1 rounded-xl p-2 me-2 hover:me-0">
               <div className=" text-sm ">
                    {/* title */}
                    <div className="flex justify-between font-bold ">
                         <span className="text-gray-600">Suggested for you</span>
                         <Link to={`/listFriends/suggestion`}><span className="cursor-pointer hover:text-gray-600 font-semibold">See All</span></Link>
                    </div>
                    {/* list suggest */}
                    <div className="flex flex-col mt-6">
                         <div className="mb-5 flex justify-between items-center">
                              <div className="flex justify-between">
                                   <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                        alt="error"
                                        className="cursor-pointer rounded-[100%] text-base h-10 w-10 "
                                   />
                                   <div className="flex flex-col ml-3">
                                        <span className="font-semibold text-sm text-gray-700 cursor-pointer ">Thùy Vân</span>
                                        <span className="text-gray-400">Followed by <strong className="cursor-pointer font-semibold">Hoang Dung</strong></span>
                                   </div>
                              </div>
                              <span className="text-sky-600 cursor-pointer hover:text-gray-500 font-semibold text-sm">Add</span>
                         </div>
                         <div className="mb-5 flex justify-between items-center">
                              <div className="flex justify-between">
                                   <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                        alt="error"
                                        className="cursor-pointer rounded-[100%] text-base h-10 w-10 "
                                   />
                                   <div className="flex flex-col ml-3">
                                        <span className="font-semibold text-sm text-gray-700 cursor-pointer ">Thùy Vân</span>
                                        <span className="text-gray-400">Followed by <strong className="cursor-pointer font-semibold">Hoang Dung</strong></span>
                                   </div>
                              </div>
                              <span className="text-sky-600 cursor-pointer hover:text-gray-500 font-semibold text-sm">Add</span>
                         </div>
                         <div className="mb-5 flex justify-between items-center">
                              <div className="flex justify-between">
                                   <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                        alt="error"
                                        className="cursor-pointer rounded-[100%] text-base h-10 w-10 "
                                   />
                                   <div className="flex flex-col ml-3">
                                        <span className="font-semibold text-sm text-gray-700 cursor-pointer ">Thùy Vân</span>
                                        <span className="text-gray-400">Followed by <strong className="cursor-pointer font-semibold">Hoang Dung</strong></span>
                                   </div>
                              </div>
                              <span className="text-sky-600 cursor-pointer hover:text-gray-500 font-semibold text-sm">Add</span>
                         </div>
                    </div>

                    <div className="flex justify-between font-bold mb-2">
                         <span className="text-gray-600">Contacts</span>
                    </div>
                    <div className="flex flex-col w-full items-start mb-[25%]">
                         {users.map((user) => (
                              <UserSimpleCard
                                   key={user.id}
                                   userId={user.id}
                                   userFullName={user.name}
                                   avatarUrl={user.avatar}
                              />
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default SuggestFriends;