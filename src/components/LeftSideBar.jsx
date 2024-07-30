import React from "react";
import razorpayLogo from "../assets/razorpayX.svg";
import { LuHome } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaStamp } from "react-icons/fa6";
import { FaBoxTissue } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function LeftSideBar() {
  return (
    <div className="flex flex-col w-56 bg-[#1A212B] text-gray-400">
      <div className="flex items-center mb-6 p-4">
        <NavLink to='/' className="font-bold text-lg text-white">
          <img src={razorpayLogo} className="w-28" alt="logo" />
        </NavLink>
      </div>
      <div className="flex items-center space-x-2 mb-4 px-4">
        <ul className="space-y-3 font-mullish font-bold text-sm w-full">
          <li className=" bg-[#1e2734] hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/" className="flex items-center hover:text-white">
              <LuHome />
              <span className="ml-3">Home</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/payouts" className="flex items-center hover:text-white">
              <MdArrowOutward />
              <span className="ml-3">Payouts</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/account-statement" className="flex items-center hover:text-white">
              <FiFileText />
              <span className="ml-3">Account Statement</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/contacts" className="flex items-center hover:text-white">
              <FiUser />
              <span className="ml-3">Contacts</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="w-56 relative left-[-15px] border-gray-800 mt-3" />
      <div className="flex items-center space-x-2 px-4">
        <ul className="space-y-3 mt-4 font-mullish font-bold text-sm">
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/loans" className="flex items-center hover:text-white">
              <LuIndianRupee />
              <span className="ml-3">Loans</span>
              <span className="absolute left-24 rounded-lg font-mullish bg-green-700 w-10 text-center text-[11px] text-white ">
                NEW
              </span>
            </NavLink>
          </li>
          <li >
            <NavLink to="/vendor-payments" className="flex items-center mb-3 hover:text-white hover:bg-[#1e2734] p-2 rounded-md">
              <GrNotes />
              <span className="ml-3">Vendor Payments</span>
            </NavLink>
            <NavLink to="/vendor-payments/invoice" className="ml-16 flex items-center hover:text-white">
              <span className="absolute left-8 rounded-lg bg-green-700 w-10 text-center text-white text-[11px] ">
                NEW
              </span>
              <span className="text-[12px] text-blue-500">
                Invoice approvals 
              </span>
                <FaLongArrowAltRight className="text-blue-500 ml-1" />
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/tax-payments" className="flex items-center hover:text-white">
              <FaStamp />
              <span className="ml-3">Tax Payments</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/payout-links" className="flex items-center hover:text-white">
              <FaTelegramPlane />
              <span className="ml-3">Payout Links</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/payroll" className="flex items-center hover:text-white">
              <FaBoxTissue />
              <span className="ml-3">Payroll</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#1e2734] p-2 rounded-md">
            <NavLink to="/reports" className="flex items-center hover:text-white">
              <BiSolidReport />
              <span className="ml-3">Reports</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSideBar;
