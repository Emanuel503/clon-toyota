import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function TabGuide() {
  return (
    <div className="hidden lg:grid grid-cols-12 bg-white py-8 border-t rounded-b-lg w-full lg:w-11/12 xl:w-4/6 right-0  xl:mr-20 absolute z-20">
        <div className="col-span-6 border-gray-300 border-r p-5 grid grid-cols-12 gap-y-12 gap-x-8">
            <div className="col-span-6">
                <a className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Diseña y cotiza <MdOutlineKeyboardArrowRight className='text-xl'/> </a>
                <p className="text-gray-500 text-sm">Diseña tu toyota</p>
            </div>
            <div className="col-span-6">
                <a className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Toyota Certificados <MdOutlineKeyboardArrowRight className='text-xl'/> </a>
                <p className="text-gray-500 text-sm">Ver modelos usados</p>
            </div>
            <div className="col-span-6">
                <a className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Buscar inventario <MdOutlineKeyboardArrowRight className='text-xl'/> </a>
                <p className="text-gray-500 text-sm">Encuentra tu auto</p>
            </div>
            <div className="col-span-6">
                <a className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Accesorios <MdOutlineKeyboardArrowRight className='text-xl'/> </a>
                <p className="text-gray-500 text-sm">Personaliza tu toyota</p>
            </div>
        </div>

        <div className="col-span-3 border-gray-300 border-r p-5">
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Buscar concesionarios</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Ver folletos</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Comparar Modelos</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Pedir cotización</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Toyota Financial Services</a>
            <a href="/" className="text-sm text-gray-700 block mb-0 hover:underline">Southeast Toyota Finance</a>
        </div>

        <div className="col-span-3 p-5">
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Calcula tu pago</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Qué se ajusta a mi presupuesto</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Valor de intercambio Kelly Blue Book</a>
            <a href="/" className="text-sm text-gray-700 block mb-4 hover:underline">Ofertas locales</a>
            <a href="/" className="text-sm text-gray-700 block mb-0 hover:underline">Comprar partes y accesorios</a>
        </div>
    </div>
  )
}
