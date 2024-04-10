import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CarruselPosts from './CarruselPosts';

export default function SectionBeyond() {
    return (
        <section className="mt-14 mb-20">
            <div className='relative'>
                <div className="absolute w-full flex flex-col items-center justify-center text-center top-20 z-10">
                    <h4 className='text-3xl text-white font-semibold mb-4'>Una gran familia<br/> resistente.</h4>
                    <Link className='bg-white py-3 px-10 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/tacoma">
                        Ver Más
                    </Link>
                </div>

                <Image className='hidden lg:block w-full' width={1920} height={1080} src="/cars-beyond-full.jpg" alt="Icono de imagen diseñar" />
                <Image className='block lg:hidden  w-full' width={1920} height={1080} src="/cars-beyond-medium.jpg" alt="Icono de imagen diseñar" />
            </div>

            <CarruselPosts/>
        </section>
    )
}