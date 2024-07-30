import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import user from "../assets/user.png"

function Invoice() {
  return (
    <>
      <div className="flex flex-col w-[680px] mx-auto rounded-sm">
        <div className="flex justify-between w-full py-3">
          <h2 className="text-white font-mullish text-[12px]">Insights</h2>
          <span className="flex text-[12px] text-blue-500 cursor-pointer">
            Detailed Insights
            <FaLongArrowAltRight className="ml-2 relative top-1" />
          </span>
        </div>
        <div className=" bg-[#1A212B] mx-auto w-full">
          <div className="p-4">
            <p className="text-gray-400 font-mullish font-semibold text-[12px]">
              Payout volume - last 30 days
            </p>
            <div className="flex items-center">
              <LuIndianRupee className="text-gray-400 text-[10px]" />
              <span className="text-white text-lg font-semibold font-mullish">
                236,695<span className="text-gray-400 text-[10px]">.00</span>
              </span>
            </div>
          </div>
          <hr />
        </div>
        <div className="flex flex-col rounded bg-[#1A212B] w-full h-auto mt-5 p-3">
          <div className="flex justify-between w-full py-3">
            <h3 className="font-mullish font-semibold text-[14px] text-gray-200">
              Activity Feed{" "}
              <span className="text-gray-400 text-[11px]">
                {" "}
                updated a few mintues ago
              </span>
            </h3>
            <button
              id="dropdown"
              data-dropdown-toggle="dropdown"
              class="text-blue-500 hover:text-blue-700 cursor-pointer font-semibold text-[12px] text-center inline-flex items-center"
              type="button"
            >
              Show filters
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="mt-6">
              <div className="flex bg-slate-200/5 w-[500px] mx-auto">
                <div className="p-8">
                  <div className="flex">
                    <div className="flex flex-col">
                      <p className="text-white text-[13px] font-semibold">23 JUL</p>
                      <p className="text-gray-400 font-mullish text-[10px]">
                        Tuesday
                      </p>
                    </div>
                    <div class="inline-block h-[25px] ml-10 my-2 w-0.5 self-stretch bg-neutral-100"></div>
                    <div className="flex flex-row ml-10 gap-2 mt-3">
                      <img src={user} className="text-gray-400 text-[12px] w-4 h-3"/>
                      <p className="text-white font-mullish text-[12px]">
                        11:30 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex bg-slate-200/5 w-[500px] mx-auto">
                <div className="p-8">
                  <div className="flex">
                    <div className="flex flex-col">
                      <p className="text-white text-[13px] font-semibold">9 JUL</p>
                      <p className="text-gray-400 font-mullish text-[10px]">
                        Tuesday
                      </p>
                    </div>
                    <div class="inline-block h-[25px] ml-10 my-2 w-0.5 self-stretch bg-neutral-100"></div>
                    <div className="flex flex-row ml-10 gap-2 mt-3">
                      <img src={user} className="text-gray-400 text-[12px] w-4 h-3"/>
                      <p className="text-white font-mullish text-[12px]">
                        11:30 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex bg-slate-200/5 w-[500px] mx-auto">
                <div className="p-8">
                  <div className="flex">
                    <div className="flex flex-col">
                      <p className="text-white text-[13px] font-semibold">1 JUL</p>
                      <p className="text-gray-400 font-mullish text-[10px]">
                        Tuesday
                      </p>
                    </div>
                    <div class="inline-block h-[25px] ml-10 my-2 w-0.5 self-stretch bg-neutral-100"></div>
                    <div className="flex flex-row ml-10 gap-2 mt-3">
                      <img src={user} className="text-gray-400 text-[12px] w-4 h-3"/>
                      <p className="text-white font-mullish text-[12px]">
                        11:30 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button className="flex w-48 mx-auto bg-neutral-600/45 justify-center rounded text-[11px] font-semibold text-white gap-2 p-1">
                LOOK FOR OLDER ACTIVITIES <span className="relative top-1"><FaArrowDown/></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
