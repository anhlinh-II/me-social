

const FriendsRequest = () => {
     return (
          <div className="p-4 border rounded-lg drop-shadow-md">
               <div className="mt-4 grid grid-cols-3 gap-4">
                    {/* a friend */}
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <div className="flex flex-col gap-4">
                              <button className="py-1 px-4 bg-sky-600 text-white rounded-lg">Accept</button>
                              <button className="py-1 px-4 bg-rose-500 text-white rounded-lg">Decline</button>
                         </div>
                    </div>
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <div className="flex flex-col gap-4">
                              <button className="py-1 px-4 bg-sky-600 text-white rounded-lg">Accept</button>
                              <button className="py-1 px-4 bg-rose-500 text-white rounded-lg">Decline</button>
                         </div>
                    </div>
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <div className="flex flex-col gap-4">
                              <button className="py-1 px-4 bg-sky-600 text-white rounded-lg">Accept</button>
                              <button className="py-1 px-4 bg-rose-500 text-white rounded-lg">Decline</button>
                         </div>
                    </div>
                    <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
                         <div className="flex justify-between items-center">
                              <img src="http://localhost:5173/src/assets/jisoo.jpg"
                                   alt="error"
                                   className="w-[60px] h-[60px] rounded-lg"
                              />
                              <div className="flex flex-col ml-4">
                                   <span className="font-semibold text-lg">Thùy Vân</span>
                                   <span className="text-gray-500">21 mutual friends</span>
                              </div>
                         </div>
                         <div className="flex flex-col gap-4">
                              <button className="py-1 px-4 bg-sky-600 text-white rounded-lg">Accept</button>
                              <button className="py-1 px-4 bg-rose-500 text-white rounded-lg">Decline</button>
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default FriendsRequest;
