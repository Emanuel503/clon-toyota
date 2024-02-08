import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";

export default function Nav() {
  return (
    <nav className="h-16 w-full bg-white flex flex-row items-center fixed z-10 px-12">
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
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200">Vehiculos <MdOutlineKeyboardArrowDown className='text-xl'/></button>
            
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200">Guia de compra <MdOutlineKeyboardArrowDown className='text-xl'/></button>
            
                <button className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200">Dueños <MdOutlineKeyboardArrowDown className='text-xl'/></button>
            
                <Link href="/" className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200">Buscar inventario</Link>
            
                <FaUserCircle className='text-4xl hover:text-gray-400 transition-colors'/>
            </div>

            <button>
                <VscMenu className="lg:hidden text-4xl"/>
            </button>
        </div>
    </nav>
  )
}
