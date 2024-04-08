import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaHeart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

export default function TabUser() {
  return (
    <div className="hidden lg:block bg-white pt-8 border-t rounded-b-lg w-auto right-0 xl:mr-10 absolute z-20">
        <h2 className='font-bold text-center mb-4 text-xl'>My Toyota</h2>

        <div className='border-gray-300 border text-gray-600 mx-8 text-sm rounded-lg p-8'>
            <p className='text-center leading-6'>
                La proxima experiencia ser en inglés.<br/>
                Aquí podrás acceder a lo que necesites,<br/>
                desde información sobre la propiedad de <br/>
                tu Toyota hasta guardar vehículos<br/>
                futuros
            </p>

            <div className='flex items-center justify-center mt-6'>
                <a href='/' className='px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-3xl'>Sign In</a>
                <a href='/' className='px-8 py-2 text-red-600 font-semibold hover:underline rounded-3xl flex items-center gap-2'>Create Account <MdOutlineKeyboardArrowRight className='text-2xl'/></a>
            </div>
        </div>

        <div className='p-10 flex flex-col'>
            <a href='/' className='border-gray-300 border-b py-3 mb-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                <FaHeart className='text-xl'/> View saves (0)
            </a>
            <a href='/' className='border-gray-300 border-b py-3 mb-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                <div className='w-5 h-5 bg-white border-black border-2 rounded-full'></div> Notification (0)
            </a>
            <a href='/' className='py-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                Manage Preferences
            </a>
        </div>
        <div className='bg-gray-200 w-full h-auto rounded-b-lg p-5'>
            <h3>MI UBICACIÓN</h3>
            <div className='h-10 flex mt-3'>
                <div className='relative w-full flex items-center'>
                    <SlLocationPin className='absolute left-2 text-xl'/>
                    <input placeholder='ZIP Code' type="text" name="zip" className='border border-black rounded-y-md rounded-l-md h-full w-full pl-8 placeholder:font-semibold text-sm bg-gray-200' />
                </div>
                <button className='bg-black border border-black text-white py-1 px-5 h-full text-sm rounded-r-md font-semibold'>Update</button>
            </div>
        </div>
    </div>
  )
}
