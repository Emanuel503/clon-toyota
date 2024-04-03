import React, { useState } from 'react'
import { RiUserLine } from "react-icons/ri";
import { GoTools } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import Link from 'next/link';

export default function TabOwners() {

  const [activeTabDue, setActiveTabDue] = useState(1)

  return (
    <div className="hidden lg:grid grid-cols-12 bg-white border-t rounded-b-lg w-full lg:w-11/12 xl:w-4/6 right-0 xl:mr-20 absolute z-20">
        <div className="col-span-4 flex flex-col">
            <button onMouseEnter={() => (setActiveTabDue(1))} className={`border-b-[#d8d8d8] border-b border-r border-collapse p-4 font-semibold text-sm flex items-center gap-x-5 ${activeTabDue === 1 ? 'bg-white border-r-0': 'bg-[#EBEBEB]'}`}>
                <div className={`p-2 flex items-center justify-center rounded-full ml-8 ${activeTabDue === 1 ? 'bg-black text-white': 'bg-white'}`}>
                    <RiUserLine className="text-2xl" />
                </div> 
                PARA DUEÑOS
            </button>

            <button onMouseEnter={() => (setActiveTabDue(2))} className={`border-b-[#d8d8d8] border-b border-r border-collapse p-4 font-semibold text-sm flex items-center gap-x-5 ${activeTabDue === 2 ? 'bg-white border-r-0': 'bg-[#EBEBEB]'}`}>
                <div className={`p-2 flex items-center justify-center rounded-full ml-8 ${activeTabDue === 2 ? 'bg-black text-white': 'bg-white'}`}>
                    <GoTools className="text-2xl" />
                </div> 
                SERVICES Y PARTS
            </button>

            <button onMouseEnter={() => (setActiveTabDue(3))} className={`border-b-[#d8d8d8] border-b border-r border-collapse p-4 rounded-l-lg rounded-t-none font-semibold text-sm flex items-center gap-x-5 ${activeTabDue === 3 ? 'bg-white border-r-0': 'bg-[#EBEBEB]'}`}>
                <div className={`p-2 flex items-center justify-center rounded-full ml-8 ${activeTabDue === 3 ? 'bg-black text-white': 'bg-white'}`}>
                    <FaListUl className="text-2xl" />
                </div> 
                FEATURES
            </button>
        </div>
        <div className="col-span-8 px-10 pt-5 grid grid-cols-12 gap-x-8">
            {activeTabDue == 1 && 
                <>
                    <div className="col-span-6">
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Dueños Inicio</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Manual & Warranties</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Service History</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Audio Multimedia y Connected Services</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Llamados a Revision</Link>
                    </div>

                    <div className="col-span-6">
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Warning Lights</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Shedule Service</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Services Centers</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Vehicle Specs</Link>
                    </div>
                </>
            }

            {activeTabDue == 2 && 
                <>
                    <div className="col-span-6 mt-10">
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Services Epecials</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Mantenance shedule</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Certified Collison Centers</Link>
                    </div>

                    <div className="col-span-6 mt-10">
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Toyota Express Maintenance</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Toyota Genuine Parts</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">ToyotaCare y planes de mantenimiento</Link>
                    </div>
                </>
            }
            {activeTabDue == 3 && 
                <>
                    <div className="col-span-6 mt-5">
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Vehicle Videos</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Safety Hub</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Clean Assist</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Kick Sensor</Link>
                    </div>

                    <div className="col-span-6 mt-5">
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">bZ4X</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Dashcam</Link>
                        <Link href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Over the Air Updates</Link>
                    </div>
                </>
            }
        </div>
    </div>
  )
}
