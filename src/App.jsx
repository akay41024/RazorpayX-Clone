import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="flex h-screen bg-[#0D1219] ">
      <LeftSideBar />
      <Outlet />
    </div>
  );
}


export default App;

{/* <div className="flex flex-col w-full bg-gray-700 p-4 text-gray-400">
  <div className="flex justify-between items-center mb-6">
    <h2 className="font-bold text-lg text-white">Insights</h2>
    <a href="#" className="text-blue-500 hover:text-blue-400">
      Detailed insights →
    </a>
  </div>
  <div className="bg-gray-600 rounded-md p-4 mb-6">
    <h3 className="font-bold text-sm text-white mb-2">
      Payout volume - last 30 days
    </h3>
    <div className="flex items-center">
      <span className="text-white text-lg font-bold mr-2">
        ₹236,695.00
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-12 text-white"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
  <div className="mb-6">
    <h3 className="font-bold text-sm text-white mb-2">Activity Feed</h3>
    <span className="text-gray-400 text-xs">
      updated a few seconds ago
    </span>
  </div>
  <div className="bg-gray-600 rounded-md p-4">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h4 className="font-bold text-sm text-white">23 JUL</h4>
        <span className="text-gray-400 text-xs">Tuesday</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-400 text-xs ml-2">
          1 contact created
        </span>
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <div>
        <h4 className="font-bold text-sm text-white">9 JUL</h4>
        <span className="text-gray-400 text-xs">Tuesday</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-400 text-xs ml-2">
          ₹300.00 credited into the account
        </span>
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <div>
        <h4 className="font-bold text-sm text-white">1 JUL</h4>
        <span className="text-gray-400 text-xs">Monday</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-400 text-xs ml-2">
          1 payout worth ₹2,36,695.00 created
        </span>
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <div>
        <h4 className="font-bold text-sm text-white">24 JUN</h4>
        <span className="text-gray-400 text-xs">Monday</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div className="flex justify-center">
      <a
        href="#"
        className="text-blue-500 hover:text-blue-400 underline"
      >
        LOOK FOR OLDER ACTIVITIES ↓
      </a>
    </div>
  </div>
</div> */}
