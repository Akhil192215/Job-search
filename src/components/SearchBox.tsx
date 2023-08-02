import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const SearchBox = () => {
  return (
    <div className=" grid gap-10  bg-grayIsh p-[3rem] rounded-[10px ]">
      <form action="">
        <div
          className=" flex justify-between items-center rounded-[8px]
        bg-white p-5 shadow-lg shadow-grayIsh-700"
        >
          <div className="flex items-center gap-2">
            <AiOutlineSearch size={25} />
            <input
              type="text"
              className="bg-transparent focus:outline-none text-blueColor w-[100%]"
              placeholder="Search your job . . ."
            />
              <AiOutlineCloseCircle size={25} className="text-[#a5a6a6] cursor-pointer hover:text-textColor"/>
          </div>
          <div className="flex items-center gap-2">
            <BsHouseDoor size={25} />
            <input
              type="text"
              className="bg-transparent focus:outline-none text-blueColor w-[100%]"
              placeholder="Search by company. . ."
            />
              <AiOutlineCloseCircle size={25} className="text-[#a5a6a6] cursor-pointer hover:text-textColor"/>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn size={25} />
            <input
              type="text"
              className="bg-transparent focus:outline-none text-blueColor w-[100%]"
              placeholder="Search by location . . ."
            />
              <AiOutlineCloseCircle size={25} className="text-[#a5a6a6] cursor-pointer hover:text-textColor"/>
          </div>

          <button className="h-full bg-blueColor text-white px-10 p-5 rounded-[10px] hover:bg-blue-300 duration-300">Search</button>
        </div>
      </form>
      <div className="flex items-center gap-10 justify-center">
        <div className="flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by :
          </label>
          <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1  focus:outline-none ">
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start With</option>
            <option value="">Contains</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type :
          </label>
          <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1  focus:outline-none ">
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level :
          </label>
          <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1  focus:outline-none ">
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Senior</option>
            <option value="">Advanced</option>
          </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer"> Clear All</span>
      </div>
    </div>
  );
};

export default SearchBox;
