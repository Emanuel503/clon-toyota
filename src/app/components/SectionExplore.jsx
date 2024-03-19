'use client'

import React, { useRef, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from './explore/Card';

export default function SectionExplore() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const [scroll, setScroll] = useState(0);

    const scrollRef = useRef('');

    const nextSlide = () => {        
        let newScroll = scroll + 300;
        if(newScroll > 1300 ) return
        setScroll(newScroll);
        scrollRef.current.scrollLeft = newScroll;
    };
    
    const prevSlide = () => {
        let newScroll = scroll - 300;
        if(newScroll < 0) return
        setScroll(newScroll); 
        scrollRef.current.scrollLeft = newScroll;
    };
  
    return (
        <section className='mb-10 mx-12'>
            <h2 className='text-center font-bold text-5xl mb-20'>Explora los vehículos</h2>

            <div className='flex flex-row items-center justify-center mb-5'>
                <button className={activeTab == 1 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(1)}>
                    Autos y Minivan
                </button>
                <button className={activeTab == 2 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(2)}>
                    Camionetas
                </button>
                <button className={activeTab == 3 ? `border-b-2 px-5 border-black h-14` : `border-b-2 px-5 border-gray-200 h-14`} onClick={() => handleTabClick(3)}>
                    Crossovers y SUV
                </button>
            </div>

            <div ref={scrollRef} className='flex gap-x-3 overflow-hidden transition-transform duration-500'>
                {activeTab === 1 && 
                <>
                    <Card
                        image="/sup.jpeg"
                        imageAlt="GR Supra"
                        legend="Tal cual: $65,275. * 19/27 est. MPG *"
                        title="2024"
                        subtitle="GR Supra"
                        description="Deja tu huella con una obra de arte automovilística."
                        price="$46,440"
                        priceLegend="MSRP inicial *"
                        dues="42/41"
                        duesLegend="Hasta est. MPG *"
                        color="1e1e21"
                    >
                    </Card>

                    <Card
                        image="/crw.jpeg"
                        imageAlt="Toyota Crown"
                        legend="Tal cual: $54,345. * 29/32 est. MPG *"
                        title="2024 | Hibrido"
                        subtitle="Toyota Crown"
                        description="Más que un viaje elevado."
                        price="$40,350"
                        priceLegend="MSRP inicial *"
                        dues="42/41"
                        duesLegend="Hasta est. MPG *"
                        color="5c535c"
                    >
                    </Card>

                    <Card
                        image="/prp.jpeg"
                        imageAlt="Prius Prime"
                        legend="Tal cual: $39,670. * 48/114 est. MPG */MPGe *"
                        title="2024 | Híbrido Plug-in"
                        subtitle="Prius Prime"
                        description="Maneja un plug-in con potencia."
                        price="$32,975"
                        priceLegend="MSRP inicial *"
                        dues="48/114"
                        duesLegend="Hasta est. MPG *"
                        color="567762"
                    >
                    </Card>

                    <Card
                        image="/grc.jpeg"
                        imageAlt="GR Corolla"
                        legend="Tal cual: $45,140. * 21/28 est. MPG *"
                        title="2024"
                        subtitle="GR Corolla"
                        description="Las curvas te llaman."
                        price="$36,500"
                        priceLegend="MSRP inicial *"
                        dues="21/28"
                        duesLegend="Hasta est. MPG *"
                        color="006095"
                    >
                    </Card>

                    <Card
                        image="/coh.jpeg"
                        imageAlt="Corolla"
                        legend="Tal cual: $25,490. * 31/40 est. MPG *"
                        title="2024Híbrido disponible"
                        subtitle="Corolla"
                        description="Divertido de manejar, atractivo de mirar."
                        price="$22,050"
                        dues="32/41"
                        color="85633a"
                    >
                    </Card>
                </>
                }
            </div>

            <div className='flex flex-row items-center justify-center mt-20 gap-x-7'>
                <button onClick={prevSlide} className={`bg-black text-white text-3xl py-1 px-4 rounded-3xl ${scroll < 300 ? 'opacity-50' : ''}`}><MdKeyboardArrowLeft/></button>
                <div>
                    Mover
                </div>
                <button onClick={nextSlide} className={`bg-black text-white text-3xl py-1 px-4 rounded-3xl ${scroll > 1300 ? 'opacity-50' : ''}`}><MdKeyboardArrowRight/></button>
            </div>
        </section>
    )
}