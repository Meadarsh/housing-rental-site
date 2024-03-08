import React from 'react'
import { FaCarSide } from 'react-icons/fa'
import { HiOutlineRectangleGroup } from 'react-icons/hi2'
import { IoBedOutline } from 'react-icons/io5'

const HilightscardPg = ({data}) => {
  return (
    <div className=' lg:w-[20vw] bg-white rounded-lg shadow-md '>
     <img src="/Images/flat1.jpg" className='h-[30vh] w-full object-cover rounded-t-lg' alt="N/A" />
     <div className='p-4'>
     <span className='text-xl font-semibold '>{data.rent} ₹</span>
     <h5 className='font-medium'><span className='text-red-800'>{data.rentalType}</span> for rent in delhi</h5>
     <div className='flex gap-2 mt-2'>
     
     <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">

            <div className="text-sm  leading-none">
              <h1 className=" font-semibold">Semi Furnished</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <div className=" leading-none">
             
              <h1 className="font-semibold">300ft</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center border border-red-800 p-1 rounded-md">
            <h1 className="font-semibold">Parking</h1>
          </div>
     </div>
     </div>
     </div>
  )
}

export default HilightscardPg