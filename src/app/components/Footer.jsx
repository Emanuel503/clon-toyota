import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Links from './Links';

export default function Footer() {
  return (
    <footer className='w-full bg-[#f6f6f6] py-10 px-8 h-screen'>
        <div className='grid grid-cols-12 gap-10'>

            <div className='col-span-12 grid grid-cols-12 xl:col-span-6 gap-4'>
                <Link className='font-bold text-sm hover:underline underline-offset-2 transition-all col-span-12 md:col-span-4 md:text-center' href="/">Accesibilidad</Link>

                <Link className='font-bold text-sm text-red-600 hover:underline underline-offset-2 transition-all flex flex-row items-center gap-x-2 col-span-12 md:col-span-4 md:text-center' href="/">
                    TUS OPCIONES DE PRIVACIDAD
                    <Image src="/privacyoptions.svg" width={40} height={40} alt="Icono de boton de privacidad" />
                </Link>

                <Link className='font-bold text-sm hover:underline underline-offset-2 transition-all col-span-12 md:col-span-4 md:text-center' href="/">Opciones de cookies</Link>
            </div>

            <div className='col-span-12 md:col-span-6 xl:col-span-3 text-center md:text-left lg:md:text-center xl:text-right'>
                <Link className='bg-red-600 py-3 px-8 text-white text-sm rounded-3xl font-semibold hover:bg-red-700 transition-all duration-500 ' href="/">Preferencias</Link>
            </div>

            <div className='col-span-12 md:col-span-6 xl:col-span-3 flex flex-wrap gap-5 justify-center '>
                <Link href="/" className='border border-black hover:border-2 p-2 rounded-full'> <FaFacebook className='text-lg' /> </Link>
                <Link href="/" className='border border-black hover:border-2 p-2 rounded-full'> <FaYoutube className='text-lg' /> </Link>
                <Link href="/" className='border border-black hover:border-2 p-2 rounded-full'> <FaXTwitter className='text-lg' /> </Link>
                <Link href="/" className='border border-black hover:border-2 p-2 rounded-full'> <FaInstagram className='text-lg' /> </Link>
                <Link href="/" className='border border-black hover:border-2 p-2 rounded-full'> <FaPinterest className='text-lg' /> </Link>
            </div>
        </div>

        <Links/>
    </footer>
  )
}
