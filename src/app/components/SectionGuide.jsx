import React from 'react'

export default function SectionGuide() {
  return (
    <section className='py-5 flex flex-col items-center justify-center'>
        <h2 className='text-3xl mb-16'>Guía de compra</h2>
        
        <div className='flex w-full mx-20'>
            <div className='flex items-center justify-center p-10 border-r w-1/4 h-24'>
                Diseñar
            </div>

            <div className='flex items-center justify-center p-10 border-r w-1/4 h-24'>
                Ver inventario
            </div>

            <div className='flex items-center justify-center p-10 border-r w-1/4 h-24'>
                Ofertas locales
            </div>

            <div className='flex items-center justify-center p-10  w-1/4 h-24'>
                Concesionarios
            </div>
        </div>
    </section>
  )
}
