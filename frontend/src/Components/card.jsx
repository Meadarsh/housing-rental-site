import React from "react";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { FaCarSide, FaShower,FaRegBuilding } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const Card = () => {
  return (
    <div className="flex flex-col pb-3  gap-2 lg:flex-row lg:w-[80%] flex-shrink-0 w-[97%] lg:h-[30vh] items-center  mt-2 lg:mt-4 rounded-md shadow-md lg:p-5 p-2 bg-white justify-between">
      <div className="img w-[99%] rounded-lg overflow-hidden lg:w-[25%] h-[30vh] lg:h-full bg-slate-300">
        <img
          src="/Images/flat1.jpg"
          className="w-full h-full object-cover"
          alt="N/A"
        />
      </div>
      <div className=" h-auto   w-full lg:w-[70%]">
        <h1 className="lg:text-3xl text-2xl font-bold">7000 ₹</h1>
        <p className="lg:font-semibold text-red-800 mt-1">
          2 BHK Flat <span className="font-normal">for rent in Bandra-mumbai</span>
        </p>
        <div className="p-2 flex whitespace-nowrap no-scrollbar overflow-x-auto scrollbarnone  gap-2">
          <div className="flex gap-2 lg:text-md text-sm items-center border border-red-800 p-1 rounded-md">
            <IoBedOutline className="lg:text-3xl text-2xl" />
            <div className="text-sm  leading-none">
              <p>Furnishing</p>
              <h1 className=" font-semibold">Semi Furnished</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <HiOutlineRectangleGroup className="lg:text-3xl text-2xl" />
            <div className=" leading-none">
              <p>Carpet Area</p>
              <h1 className="font-semibold">300ft</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <FaCarSide className="lg:text-3xl text-xl" />
            <h1 className="font-semibold">Parking</h1>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <FaShower className="lg:text-2xl text-xl" />
            <div className=" leading-none">
              <p>Bath rooms</p>
              <h1 className="font-semibold">1</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <MdBalcony className="lg:text-2xl text-xl" />
            <h1 className="font-semibold">Balcony</h1>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <FaRegBuilding className="lg:text-2xl text-xl" />
            <div className=" leading-none">
              <p>Floor</p>
              <h1 className="text-center font-semibold">1</h1>
            </div>
            <div className=" leading-none">
              <p>Total Floor</p>
              <h1 className="font-semibold text-center">3</h1>
            </div>
          </div>
        </div>
       <div className="flex lg:gap-4 justify-between text-sm flex-col lg:flex-row lg:mt-4 lg:w-[95%]">
        <div>
        <div>
            <p>Civil lines medical chauraha, Civil Lines, Allahabad</p>
        </div>
        <div>
            <p><span className="font-semibold">Locality :</span> Civil lines medical chauraha, Civil Lines, Allahabad</p>
        </div>
        </div>
        <div>
            <Link to={'/contact'}>
                <div className="flex justify-center items-center lg:px-3 hover:bg-red-700 py-2  text-white text-lg bg-red-800 rounded-xl gap-4"><IoCall/> Contact</div>
            </Link>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Card;
