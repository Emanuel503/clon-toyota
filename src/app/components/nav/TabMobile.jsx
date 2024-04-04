import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import { FaHeart, FaUserCircle } from "react-icons/fa";

export default function TabMobile() {
  
  const [menu, setMenu] = useState(null)
  
  return (
    <div className="lg:hidden bg-white border-t w-full md:w-1/2 md:right-0 absolute z-20  rounded-t-none rounded-l-lg">
        {!menu && 
          <>
            <div onClick={() => {setMenu(1)}} className='border border-gray-300 rounded-lg py-3 px-4 mx-8 my-6 flex items-center justify-between cursor-pointer'>
                <h3 className="font-semibold">My toyota</h3>
                <MdOutlineKeyboardArrowRight className='text-3xl'/>
            </div>

            <div className='mt-7 mx-8'>
                <button onClick={() => {setMenu(2)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Vehículos <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(3)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Guía de compra <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(4)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Dueños <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Buscar concesionario</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Buscar inventario</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Diseña y cotiza</Link>
            </div>

            <div className='my-7 mx-8'>
                <h3 className='text-sm'>MI UBICACIÓN</h3>
                <div className='h-10 flex mt-3'>
                    <div className='relative w-full flex items-center'>
                        <SlLocationPin className='absolute left-2 text-xl'/>
                        <input placeholder='ZIP Code' type="text" name="zip" className='border border-black rounded-y-md rounded-l-md h-full w-full pl-8 placeholder:font-semibold text-sm' />
                    </div>
                    <button className='bg-black border border-black text-white py-1 px-5 h-full text-sm rounded-r-md font-semibold'>Update</button>
                </div>
            </div>
          </>
        }

        {menu == 1 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(null))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">MY TOYOTA</h3>
            </div>

            <div className='border-gray-300 border text-gray-600 mx-8 text-sm rounded-lg p-8 relative mb-5'>
                <div className='flex justify-center'>
                    <FaUserCircle className='text-5xl absolute -top-6 bg-white rounded-full'/>
                </div>

                <p className='text-center leading-6'>
                    La proxima experiencia ser en inglés.<br/>
                    Aquí podrás acceder a lo que necesites,<br/>
                    desde información sobre la propiedad de <br/>
                    tu Toyota hasta guardar vehículos<br/>
                    futuros
                </p>

                <div className='flex items-center justify-center mt-6'>
                    <button className='px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-3xl'>Sign In</button>
                    <button className='px-8 py-2 text-red-600 font-semibold hover:underline rounded-3xl flex items-center gap-2'>Create Account <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                </div>
            </div>
            <div className='pt-4 pb-8 mx-8 flex flex-col'>
                <button className='border-gray-300 border-b py-3 mb-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                    <FaHeart className='text-xl text-black'/> View saves (0)
                </button>
                <button className='border-gray-300 border-b py-3 mb-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                    <div className='w-5 h-5 bg-white border-black border-2 rounded-full'></div> Notification (0)
                </button>
                <button className='py-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                    Manage Preferences
                </button>
            </div>
          </>
        }
    </div>
  )
}
