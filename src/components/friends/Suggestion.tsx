import { IoIosSearch } from "react-icons/io";

const Suggestion = () => {
  return (
    <div className="p-4 border rounded-lg drop-shadow-md">
      <div className="relative">
        <IoIosSearch className="absolute left-2 top-2.5 text-gray-400" />
        <input type="text" placeholder={"Search"} className="focus:outline-none border border-gray-300 rounded-xl indent-6 p-1 w-[300px]" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* a friend */}
        <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <img src="http://localhost:5173/src/assets/jisoo.jpg"
              alt="error"
              className="w-[100px] h-[100px] rounded-lg"
            />
            <div className="flex flex-col ml-4">
              <span className="font-semibold text-lg">Thùy Vân</span>
              <span className="text-gray-500">21 mutual friends</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-1 bg-sky-600 text-white rounded-lg">Add friend</button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <img src="http://localhost:5173/src/assets/jisoo.jpg"
              alt="error"
              className="w-[100px] h-[100px] rounded-lg"
            />
            <div className="flex flex-col ml-4">
              <span className="font-semibold text-lg">Thùy Vân</span>
              <span className="text-gray-500">21 mutual friends</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-1 bg-sky-600 text-white rounded-lg">Add friend</button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <img src="http://localhost:5173/src/assets/jisoo.jpg"
              alt="error"
              className="w-[100px] h-[100px] rounded-lg"
            />
            <div className="flex flex-col ml-4">
              <span className="font-semibold text-lg">Thùy Vân</span>
              <span className="text-gray-500">21 mutual friends</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-1 bg-sky-600 text-white rounded-lg">Add friend</button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 drop-shadow-lg border border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <img src="http://localhost:5173/src/assets/jisoo.jpg"
              alt="error"
              className="w-[100px] h-[100px] rounded-lg"
            />
            <div className="flex flex-col ml-4">
              <span className="font-semibold text-lg">Thùy Vân</span>
              <span className="text-gray-500">21 mutual friends</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-1 bg-sky-600 text-white rounded-lg">Add friend</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Suggestion;
