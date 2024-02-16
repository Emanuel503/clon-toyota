import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SectionBeyond() {
  return (
    <section className=" mt-14 mb-20">
        <div className='relative'>
            <div className="absolute w-full flex flex-col items-center justify-center text-center top-20 z-10">
                <h4 className='text-3xl text-white font-semibold mb-4'>Una gran familia<br/> resistente.</h4>
                <Link className='bg-white py-3 px-10 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/tacoma">
                    Ver Más
                </Link>
            </div>

            <Image className='hidden lg:block' width={1920} height={1080} src="/cars-beyond-full.jpg" alt="Icono de imagen diseñar" />
            <Image className='block lg:hidden' width={1920} height={1080} src="/cars-beyond-medium.jpg" alt="Icono de imagen diseñar" />
        </div>

        <div className='h-auto bg-[#0e2b49] text-white pt-14 flex flex-col items-center justify-center'>
            <h4 className='text-lg font-bold'>¡VAMOOOOS JUNTOS!</h4>
            <h3 className='text-3xl font-bold mt-4 mb-20'>Le damos la patada inicial a nuestra alianza.</h3>

            <Link className='bg-white py-3 px-10 mb-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="https://pressroom.toyota.com/toyota-named-the-official-automotive-partner-of-the-national-football-league/?_gl=1*7oec3m*_tmna_ga*MTA5MjE4MjA5Ni4xNzA3NDEzMjY2*_tmna_ga_EP43E5EFVZ*MTcwODA5MTczMC43LjEuMTcwODA5Nzk3Ny4xNS4wLjA.">
                Comunicado de prensa (inglés)
            </Link>

            <Image className='mb-20 w-auto h-auto' width={854} height={480} src="/cars-beyond-full.jpg" alt="Icono de imagen diseñar" />
        </div>
    </section>
  )
}