import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SectionGuide() {
  return (
    <section className='py-5 flex flex-col items-center justify-center mt-5 mx-20'>
        <h2 className='text-6xl mb-16 font-bold text-center'>Guía de compra</h2>
        
        <div className='grid grid-cols-12 w-full'>
            <Link href="/configurator" className='col-span-6 md:col-span-3 flex flex-col items-center justify-center gap-y-3 h-24 font-bold min-h-32 hover:underline underline-offset-4 border-r'>
                <Image width={60} height={60} src="/tool.svg" alt="Icono de imagen diseñar"/>
                <h5>Diseñar</h5>
            </Link>

            <Link href="/configurator" className='col-span-6 md:col-span-3 flex flex-col items-center justify-center gap-y-3 h-24 font-bold min-h-32 hover:underline underline-offset-4 md:border-r'>
                <Image width={60} height={60} src="/search.svg" alt="Icono de ver inventario"/>
                <h5>Ver inventario</h5>
            </Link>

            <Link href="/configurator" className='col-span-6 md:col-span-3 flex flex-col items-center justify-center gap-y-3 h-24 font-bold min-h-32 hover:underline underline-offset-4 border-r border-t md:border-t-0'>
                <Image width={60} height={60} src="/money.svg" alt="Icono de ofertas locales"/>
                <h5>Ofertas locales</h5>
            </Link>

            <Link href="/configurator" className='col-span-6 md:col-span-3 flex flex-col items-center justify-center gap-y-3 h-24 font-bold min-h-32 hover:underline underline-offset-4 border-t md:border-t-0'>
                <Image width={60} height={60} src="/find.svg" alt="Icono de consesionarios"/>
                <h5>Concesionarios</h5>
            </Link>
        </div>
    </section>
  )
}
