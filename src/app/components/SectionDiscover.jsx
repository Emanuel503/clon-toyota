'use client'

import React, { useState } from 'react'
import LargeCard from './discover/LargeCard';
import MediumCard from './discover/MediumCard';

export default function SectionDiscover() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

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
                        <LargeCard
                            color="3e3a3b"
                            image='/supra.jpg'
                            imageDescription='Imagen de un supra y una pareja de enamorados'
                            title='HISTORIAS DESTACADAS'
                            subtitle='Toyota Brand'
                            description='Sin YO, no hay Toyota. *'
                       />

                        <MediumCard
                            image='/smartpath.jpg'
                            imageDescription='Imagen de un smartpath'
                            title='HISTORIAS DESTACADAS'
                            subtitle='Una forma fácil de comprar tu Toyota.'
                            description='SmartPath te ayuda a encontrar tu Toyota, elegir tus términos y finalizar tu compra totalmente online.'
                        />

                        <MediumCard
                            image='/service.jpg'
                            imageDescription='Imagen de un ToyotaCare'
                            title='HISTORIAS DESTACADAS'
                            subtitle='ToyotaCare'
                            description='Cada Toyota viene con mantenimiento y asistencia en carretera sin costo por dos años para más tranquilidad.. *'
                        />
                    </> 
                }
                
                {activeTab === 2 && 
                    <>
                        <MediumCard
                            image='/connectedServices.jpg'
                            imageDescription='Imagen de un supra y una pareja de enamorados'
                            title='VEHÍCULOS Y TECNOLOGÍA'
                            subtitle='Connected Services'
                            description='Encuentra ayuda para todo con tu smartphone,* desde capacidad remota de arranque,* seguridad en la carretera* hasta servicio.'
                            button='Conéctate'
                       />

                       <MediumCard
                            image='/safety_recall.jpg'
                            imageDescription='Imagen de un supra y una pareja de enamorados'
                            title='VEHÍCULOS Y TECNOLOGÍA'
                            subtitle='Información de llamados a revisión'
                            description='Obtén información sobre llamados a revisión vigentes y las campañas de servicio.'
                            button='Más info.'
                       />

                        <LargeCard
                            color="314259"
                            image='/retirement.jpg'
                            imageDescription='Imagen de un supra y una pareja de enamorados'
                            title='VEHÍCULOS Y TECNOLOGÍA'
                            subtitle='Retiro de la red 3G'
                            description='A partir del 1 de noviembre de 2022, la antigua red inalámbrica 3G ya no estará disponible.'
                            button='Más info.'
                       />
                    </> 
                }

                {activeTab === 3 && 
                    <>
                        <LargeCard
                            color="363949"
                            image='/finance.jpg'
                            imageDescription='Imagen de finance'
                            title='OFERTAS Y SERVICIOS'
                            subtitle='Financiamiento'
                            description='Tenemos opciones de financiamiento y arrendamiento flexibles, reembolsos, planes de protección, ofertas de seguros y mucho más.'
                            button='Ver Más (inglés)'
                       />

                        <MediumCard
                            image='/college.jpg'
                            imageDescription='Imagen de college'
                            title='OFERTAS Y SERVICIOS'
                            subtitle='Reembolso para graduados de college'
                            description='La educación es importante. Permítenos incentivarte con nuestro programa de reembolso y financiamiento para graduados universitarios.'
                            button='Ver más'
                       />

                        <MediumCard
                            image='/military.jpg'
                            imageDescription='Imagen de military'
                            title='OFERTAS Y SERVICIOS'
                            subtitle='Reembolso milita'
                            description='Estamos muy agradecidos por tu servicio y todo lo que haces, por lo que deseamos ofrecerte una muestra de nuestro aprecio.'
                            button='Ver más'
                       />
                    </>
                }
            </div>
        </section>
    )
}
