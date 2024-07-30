import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUserCheck } from "react-icons/fi";
import { LuIndianRupee, LuRefreshCw } from "react-icons/lu";

function Home() {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="absolute right-8 gap-2">
          <div className="flex p-2 justify-center">
            <button
              type="button"
              class="text-white bg-blue-500/65 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded text-[12px] px-3 text-center inline-flex items-center"
            >
              + PAYOUT
              <div class="inline-block h-[19px] ml-4 my-2 w-0.5 self-stretch bg-neutral-100/40"></div>
              <IoIosArrowDown className="ml-2" />
            </button>
            <FaSearch className="ml-3 text-blue-500/65 font-light text-[12px] relative top-3" />
            <HiOutlineSpeakerphone className="ml-3 text-yellow-500 font-light text-[15px] relative top-3" />
            <FiUserCheck className="ml-3 text-blue-500 font-light text-[15px] relative top-3" />
          </div>
        </div>
        <div className="flex flex-col mt-14 w-[650px] mx-auto">
          <div className="flex gap-1">
            <img
              src="https://pbs.twimg.com/profile_images/1517493726192357376/_uCSp2Ks_400x400.jpg"
              alt="Xlogo"
              className="w-4"
            />
            <h2 className="text-white font-mullish text-[12px] ml-2">
              RazorpayX Lite
            </h2>
            <p className="text-gray-400 font-mullish text-[10px]">
              as of a few seconds ago
            </p>
            <LuRefreshCw className="text-white text-[11px] relative top-1" />
          </div>
          <div className="flex items-center mt-2">
            <LuIndianRupee className="text-gray-400 text-[10px]" />
            <span className="text-white text-lg font-semibold font-mullish">
              100<span className="text-gray-400 text-[10px]">.09</span>
            </span>
            <div class="inline-block h-[25px] ml-48 my-2 w-0.5 self-stretch bg-neutral-100/40"></div>
            <span className="flex text-[12px] text-blue-500 cursor-pointer ml-3">
              + Add balance
            </span>
          </div>
          <div class="border-dotted border-2 border-gray-500/80 mt-6 rounded text-gray-400/80 p-3 font-light text-[12px]">
            🎉You're all caught up. There are no more items pending on you.
          </div>
          <div className="flex mt-3">
            <h2 className="text-white font-semibold text-[15px]">Onboarding updates</h2>
            <p className="text-gray-500/80 text-[11px] text-center ml-2 relative top-1">(1)</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
