import { useState } from "react";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchFriends = (props: IProps) => {
     const { show, setShow } = props;

     return (
          <>
               {show && (
                    <>
                         {/* Overlay */}
                         <div
                              className="fixed inset-0 bg-black bg-opacity-50 z-40"
                              onClick={() => setShow(false)} // Close modal if clicking outside
                         ></div>

                         {/* Modal */}
                         <div className="fixed inset-0 z-50 flex justify-center items-center">
                              <div className="bg-white shadow-lg rounded-lg w-full max-w-md mx-4 p-6">
                                   <div className="text-lg font-semibold text-gray-700 mb-4">
                                        Find your friends
                                   </div>

                                   {/* Search Input */}
                                   <div className="flex items-center bg-gray-200 rounded-md mb-4">
                                        <div className="pl-2">
                                             <svg
                                                  className="fill-current text-gray-500 w-6 h-6"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       className="heroicon-ui"
                                                       d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                                  />
                                             </svg>
                                        </div>
                                        <input
                                             className="w-full bg-gray-200 text-gray-700 rounded-md py-2 px-2 focus:outline-none"
                                             type="text"
                                             placeholder="Search teams or members"
                                        />
                                   </div>

                                   {/* List of Suggestions */}
                                   <div className="space-y-2 mb-4">
                                        {[
                                             { name: "Tighten Co.", type: "Team", color: "gray" },
                                             { name: "Taylor Otwell", type: "Member", color: "green" },
                                             { name: "Adam Wathan", type: "Member", color: "gray" },
                                             { name: "Duke Street Studio Inc.", type: "Team", color: "gray" },
                                             { name: "Jeffrey Wey", type: "Member", color: "green" },
                                        ].map((item, idx) => (
                                             <div
                                                  key={idx}
                                                  className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2"
                                             >
                                                  <span
                                                       className={`bg-${item.color}-400 h-2 w-2 m-2 rounded-full`}
                                                  ></span>
                                                  <div className="flex-grow font-medium px-2">
                                                       {item.name}
                                                  </div>
                                                  <div className="text-sm font-normal text-gray-500 tracking-wide">
                                                       {item.type}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>

                                   {/* Buttons */}
                                   <div className="flex justify-end space-x-2">
                                        <button
                                             onClick={() => setShow(false)}
                                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                             Cancel
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </>
               )}
          </>
     );
};

export default SearchFriends;
