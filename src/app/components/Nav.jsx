'use client'

import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import TabVehicle from "./nav/TabVehicle";
import TabGuide from "./nav/TabGuide";
import TabOwners from "./nav/TabOwners";
import TabUser from "./nav/TabUser";
import { IoMdClose } from "react-icons/io";
import TabMobile from "./nav/TabMobile";
import { FaPager } from "react-icons/fa";

export default function Nav() {

  const [menu, setMenu] = useState(null)

  const toggleMenu = (item) => {
    if(item == menu){
     setMenu(null)
    }else{
     setMenu(item)
    }
  }

  const [active, setActive] = useState(false)

  return (
    <nav className="h-16 w-full bg-white z-20">
        <div className="flex flex-row items-center px-12 h-full w-full">
            <Link href="/">
                <Image
                    src="/toyota_logo.svg"
                    width={250}
                    height={150}
                    alt="Logo de Toyota"
                    className="w-32 h-auto"
                />
            </Link>
            <div className="flex h-full w-full justify-end items-center ">
                <div className="hidden lg:flex gap-x-8">
                    <button onClick={() => (toggleMenu(1))} className={`border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200 ${menu == 1 ? 'bg-black text-white' : 'bg-white text-black' }`}>Vehiculos {menu == 1 ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/> }</button>
                
                    <button onClick={() => (toggleMenu(2))} className={`border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200 ${menu == 2 ? 'bg-black text-white' : 'bg-white text-black' }`}>Guia de compra {menu == 2 ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/> }</button>
                
                    <button onClick={() => (toggleMenu(3))} className={`border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200 ${menu == 3 ? 'bg-black text-white' : 'bg-white text-black' }`}>Dueños {menu == 3 ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/> }</button>
                
                    <Link href="/" className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200">Buscar inventario</Link>
                
                    <button onClick={() => (toggleMenu(4))}>
                      {menu == 4 ? <div className="bg-black px-2 py-2 text-white rounded-full"><IoMdClose className="text-xl" /> </div> : <FaUserCircle className='text-4xl hover:text-gray-400 transition-colors'/>}
                    </button>
                </div>

                <button onClick={() => (toggleMenu(5))}>
                  {
                    active ? <div onClick={() => {setActive(false)}} className="lg:hidden bg-black px-2 py-2 text-white rounded-full"><IoMdClose className="text-xl" /> </div> : <VscMenu onClick={() => {setActive(true)}} className="lg:hidden text-4xl"/>
                  }  
                </button>
            </div>
        </div>

        {
         menu == 1 &&
         <TabVehicle/>
        }

        {
         menu == 2 &&
         <TabGuide/>
        }

        {
         menu == 3 &&
         <TabOwners/>
        }

        {
         menu == 4 &&
         <TabUser/>
        }

        {
         menu == 5 &&
         <TabMobile/>
        }
    </nav>
  )
}
