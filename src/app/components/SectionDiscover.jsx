'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function SectionDiscover() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    const hadlerDiscoverHover = (e, type) => {

        const element = e.target.querySelector('p');

        if (element) {
            element.classList.toggle('block', type);
            element.classList.toggle('hidden', !type);
        }

    }

    return (
        <section className='mb-10'>
            <h2 className="text-6xl font-bold text-center mb-10">Descubre Toyota</h2>

            <div className='flex flex-row items-center justify-center mb-5'>
                <button className={activeTab == 1 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(1)}>
                    Destacadas
                </button>
                <button className={activeTab == 2 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(2)}>
                    Vehículos y tecnología
                </button>
                <button className={activeTab == 3 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(3)}>
                    Ofertas y servicios
                </button>
            </div>

            <div className='grid grid-cols-12 mx-14 xl:mx-40 gap-5'>
                {activeTab === 1 && 
                    <>
                        <div className='col-span-12 bg-[#3e3a3b] rounded-lg grid grid-cols-12'>
                            <Link href="/" className='col-span-12 md:col-span-6'>
                                <Image src="/supra.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-t-lg md:rounded-r-none md:rounded-l-lg w-full h-full object-cover '/>
                            </Link>
                            <div className='col-span-12 md:col-span-6 flex flex-col text-white justify-center p-10'>
                                <h5 className='mb-2 text-sm'>HISTORIAS DESTACADAS</h5>
                                <h3 className='text-2xl font-bold mb-5'>Toyota Brand</h3>
                                <h5 className='mb-8 text-xs'>Sin YO, no hay Toyota. *</h5>
                                <div>
                                    <Link className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Ver Más
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 bg-[#3e3a3b] rounded-lg relative'>
                            <Link href="/" onMouseEnter={(e) => hadlerDiscoverHover(e, true)} onMouseLeave={(e) => hadlerDiscoverHover(e, false)} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                                    <h5 className='text-xs'>HISTORIAS DESTACADAS</h5>
                                    <h3 className='text-2xl font-bold mb-5'>Una forma fácil de comprar tu Toyota.</h3>
                                    <p className='text-sm mb-5 hidden'>SmartPath te ayuda a encontrar tu Toyota, elegir tus términos y finalizar tu compra totalmente online.</p>
                                
                                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Ver Más
                                    </button>
                                </div>
                            </Link>
                            <Image src="/smartpath.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-lg w-full h-full object-cover '/>
                        </div>
                        <div className='col-span-12 md:col-span-6 bg-[#3e3a3b] rounded-lg relative'>
                            <Link href="/" onMouseEnter={(e) => hadlerDiscoverHover(e, true)} onMouseLeave={(e) => hadlerDiscoverHover(e, false)} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                                    <h5 className='text-xs'>HISTORIAS DESTACADAS</h5>
                                    <h3 className='text-2xl font-bold mb-5'>ToyotaCare</h3>
                                    <p className='text-sm mb-5 hidden'>Cada Toyota viene con mantenimiento y asistencia en carretera sin costo por dos años para más tranquilidad.. *</p>
                                
                                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Ver Más
                                    </button>
                                </div>
                            </Link>
                            <Image src="/service.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-lg w-full h-full object-cover '/>
                        </div>
                    </> 
                }
                
                {activeTab === 2 && 
                    <>
                        <div className='col-span-12 md:col-span-6 bg-[#314259] rounded-lg relative'>
                            <Link href="/" onMouseEnter={(e) => hadlerDiscoverHover(e, true)} onMouseLeave={(e) => hadlerDiscoverHover(e, false)} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                                    <h5 className='text-xs'>VEHÍCULOS Y TECNOLOGÍA</h5>
                                    <h3 className='text-2xl font-bold mb-5'>Connected Services</h3>
                                    <p className='text-sm mb-5 hidden'>Encuentra ayuda para todo con tu smartphone,* desde capacidad remota de arranque,* seguridad en la carretera* hasta servicio.</p>
                                
                                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                       Conéctate
                                    </button>
                                </div>
                            </Link>
                            <Image src="/connectedServices.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-lg w-full h-full object-cover '/>
                        </div>
                        <div className='col-span-12 md:col-span-6 bg-[#314259] rounded-lg relative'>
                            <Link href="/" onMouseEnter={(e) => hadlerDiscoverHover(e, true)} onMouseLeave={(e) => hadlerDiscoverHover(e, false)} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                                    <h5 className='text-xs'>VEHÍCULOS Y TECNOLOGÍA</h5>
                                    <h3 className='text-2xl font-bold mb-5'>Información de llamados a revisión</h3>
                                    <p className='text-sm mb-5 hidden'>Obtén información sobre llamados a revisión vigentes y las campañas de servicio.</p>
                                
                                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Más info.
                                    </button>
                                </div>
                            </Link>
                            <Image src="/safety_recall.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-lg w-full h-full object-cover '/>
                        </div>
                        <div className='col-span-12 bg-[#314259] rounded-lg grid grid-cols-12'>
                            <Link href="/" className='col-span-12 md:col-span-6'>
                                <Image src="/retirement.jpg" width={1920} height={1080} alt='Imagen de boton de SOS de Toyota' className='rounded-t-lg md:rounded-r-none md:rounded-l-lg w-full h-full object-cover '/>
                            </Link>
                            <div className='col-span-12 md:col-span-6 flex flex-col text-white justify-center p-10'>
                                <h5 className='mb-2 text-sm'>VEHÍCULOS Y TECNOLOGÍA</h5>
                                <h3 className='text-2xl font-bold mb-5'>Retiro de la red 3G</h3>
                                <h5 className='mb-8 text-xs'>A partir del 1 de noviembre de 2022, la antigua red inalámbrica 3G ya no estará disponible.</h5>
                                <div>
                                    <Link className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Mas info.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </> 
                }

                {activeTab === 3 && 
                    <>
                        <div className='col-span-12 bg-[#363949] rounded-lg grid grid-cols-12'>
                            <Link href="/" className='col-span-12 md:col-span-6'>
                                <Image src="/finance.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-t-lg md:rounded-r-none md:rounded-l-lg w-full h-full object-cover '/>
                            </Link>
                            <div className='col-span-12 md:col-span-6 flex flex-col text-white justify-center p-10'>
                                <h5 className='mb-2 text-sm'>OFERTAS Y SERVICIOS</h5>
                                <h3 className='text-2xl font-bold mb-5'>Financiamiento</h3>
                                <h5 className='mb-8 text-xs'>Tenemos opciones de financiamiento y arrendamiento flexibles, reembolsos, planes de protección, ofertas de seguros y mucho más.</h5>
                                <div>
                                    <Link className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Ver Más (inglés)
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 bg-[#3e3a3b] rounded-lg relative'>
                            <Link href="/" onMouseEnter={(e) => hadlerDiscoverHover(e, true)} onMouseLeave={(e) => hadlerDiscoverHover(e, false)} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                                    <h5 className='text-xs'>OFERTAS Y SERVICIOS</h5>
                                    <h3 className='text-2xl font-bold mb-5'>Reembolso para graduados de college</h3>
                                    <p className='text-sm mb-5 hidden'>La educación es importante. Permítenos incentivarte con nuestro programa de reembolso y financiamiento para graduados universitarios.</p>
                                
                                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Ver más
                                    </button>
                                </div>
                            </Link>
                            <Image src="/college.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-lg w-full h-full object-cover '/>
                        </div>
                        <div className='col-span-12 md:col-span-6 bg-[#3e3a3b] rounded-lg relative'>
                            <Link href="/" onMouseEnter={(e) => hadlerDiscoverHover(e, true)} onMouseLeave={(e) => hadlerDiscoverHover(e, false)} className="w-full h-full absolute bg-gradient-to-t from-[#12120f] rounded-lg">
                                <div className='absolute bottom-0 text-white mx-5 mb-8'>
                                    <h5 className='text-xs'>OFERTAS Y SERVICIOS</h5>
                                    <h3 className='text-2xl font-bold mb-5'>Reembolso militar</h3>
                                    <p className='text-sm mb-5 hidden'>Estamos muy agradecidos por tu servicio y todo lo que haces, por lo que deseamos ofrecerte una muestra de nuestro aprecio.</p>
                                
                                    <button className='bg-white py-3 px-8 text-black text-sm rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-500' href="/">
                                        Ver Más
                                    </button>
                                </div>
                            </Link>
                            <Image src="/military.jpg" width={1920} height={1080} alt='Imagen de un supra y una pareja de enamorados' className='rounded-lg w-full h-full object-cover '/>
                        </div>
                    </> 
                }
            </div>
        </section>
    )
}
