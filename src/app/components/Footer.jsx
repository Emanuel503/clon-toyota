import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Links from './Links';

export default function Footer() {
  return (
    <footer className='w-full bg-[#f6f6f6] py-10 px-8 xl:px-40'>
        <div className='grid grid-cols-12 gap-y-10'>

            <div className='col-span-12 grid grid-cols-12 xl:col-span-5 gap-4'>
                <Link className='font-bold text-sm hover:underline underline-offset-2 transition-all col-span-12 md:col-span-3 text-left md:text-center xl:text-left' href="/">Accesibilidad</Link>

                <Link className='font-bold text-sm text-red-600 hover:underline underline-offset-2 transition-all flex flex-row items-start justify-normal md:justify-center xl:justify-normal gap-x-2 col-span-12 md:col-span-5 text-left md:text-center xl:text-left' href="/">
                    TUS OPCIONES DE PRIVACIDAD
                    <Image src="/privacyoptions.svg" width={40} height={40} alt="Icono de boton de privacidad" />
                </Link>

                <Link className='font-bold text-sm hover:underline underline-offset-2 transition-all col-span-12 md:col-span-4 text-left md:text-center xl:text-left' href="/">Opciones de cookies</Link>
            </div>

            <div className='col-span-12 md:col-span-6 xl:col-span-3 text-center md:text-left lg:text-center xl:text-right'>
                <Link className='bg-red-600 py-3 px-8 text-white text-sm rounded-3xl font-semibold hover:bg-red-700 transition-all duration-500 ' href="/">Preferencias</Link>
            </div>

            <div className='col-span-12 md:col-span-6 xl:col-span-4 flex flex-wrap gap-5 justify-center'>
                <Link href="/" className='border flex items-center justify-center w-10 h-10 border-black hover:border-2 p-2 rounded-full'><FaFacebook className='text-lg'/></Link>
                <Link href="/" className='border flex items-center justify-center w-10 h-10 border-black hover:border-2 p-2 rounded-full'><FaYoutube className='text-lg'/></Link>
                <Link href="/" className='border flex items-center justify-center w-10 h-10 border-black hover:border-2 p-2 rounded-full'><FaXTwitter className='text-lg'/></Link>
                <Link href="/" className='border flex items-center justify-center w-10 h-10 border-black hover:border-2 p-2 rounded-full'><FaInstagram className='text-lg'/></Link>
                <Link href="/" className='border flex items-center justify-center w-10 h-10 border-black hover:border-2 p-2 rounded-full'><FaPinterest className='text-lg'/></Link>
            </div>
        </div>

        <Links/>

        <hr className='mt-20'/>

        <div className='flex flex-col items-center justify-center pt-10'>
            <Image
                src="/toyota_logo.svg"
                width={250}
                height={150}
                alt="Logo de Toyota"
                className="w-40 h-auto mb-3"
            />
            <span className='text-xs mb-10'>Proud Partner of Team USA</span>
        </div>

        <div className='flex flex-row gap-6 items-center justify-center mb-5'>
            <Link className='text-sm font-semibold hover:underline underline-offset-1' href="/">Contacto</Link>
            <Link className='text-sm font-semibold hover:underline underline-offset-1' href="/">FAQ</Link>
            <Link className='text-sm font-semibold hover:underline underline-offset-1' href="/">English</Link>
        </div>

        <p className='text-center text-xs mb-5'>
            ©2024 Toyota Motor Sales, U.S.A., Inc. Toda la información aquí presente se aplica solo a vehículos en los Estados Unidos.<br/>
            El uso de marcas, terminología e imágenes olímpicas está autorizado por el Comité Olímpico y Paralímpico de los EE. UU. de conformidad con el Título 36 del Código de los EE. UU., Sección 220506.
        </p>

        <div className='flex gap-3 items-center justify-center'>
            <Link className='text-xs pr-4 border-r border-black font-semibold hover:underline underline-offset-1' href="/">Aviso de privacidad</Link>
            <Link className='text-xs pr-4 border-r border-black font-semibold hover:underline underline-offset-1' href="/">Términos legales</Link>
            <Link className='text-xs font-semibold hover:underline underline-offset-1' href="/">Mapa del sitio</Link>
        </div>
    </footer>
  )
}
