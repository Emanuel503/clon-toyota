'use client'

import React, { useRef, useState } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from './explore/Card';
import Link from 'next/link';

export default function SectionExplore() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const [scroll, setScroll] = useState(0);

    const scrollRef = useRef('');

    const nextSlide = () => {        
        let newScroll = scroll + 300;
        if(newScroll > 900 ) return
        setScroll(newScroll);
    };
    
    const prevSlide = () => {
        let newScroll = scroll - 300;
        if(newScroll < 0) return
        setScroll(newScroll); 
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

            <div className='overflow-hidden'>
                <div ref={scrollRef} className='transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${scroll}px)` }}>
                    <div className={`transition-transform  ${activeTab === 1 ? 'flex' : 'hidden'}`}>
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
                    </div>
                    
                    <div className={`transition-transform  ${activeTab === 2 ? 'flex' : 'hidden'}`}>
                        <Card
                            image="/tac.jpeg"
                            imageAlt="Tacoma"
                            legend="Tal cual: $42,600. * 21/26 est. MPG *"
                            title="2024"
                            subtitle="Tacoma"
                            description="Lo bueno ahora se pone mejor."
                            price="$31,500"
                            priceLegend="MSRP inicial *"
                            dues="21/26"
                            duesLegend="Hasta est. MPG *"
                            color="27303a"
                        >
                        </Card>

                        <Card
                            image="/tun.jpeg"
                            imageAlt="Tundra"
                            legend="Tal cual: $54,345. * 29/32 est. MPG *"
                            title="2024 | Híbrida disponible"
                            subtitle="Tundra"
                            description="Hecha para darle duro al trabajo."
                            price="$39,965"
                            priceLegend="MSRP inicial *"
                            dues="18/24"
                            duesLegend="Hasta est. MPG *"
                            color="6b4f30"
                        >
                        </Card>

                        <Card
                            image="/tunfo.jpeg"
                            imageAlt="Tundra i-FORCE MAX"
                            legend="Tal cual: $79,270. * 18/20 est. MPG *"
                            title="2024 | Híbrido"
                            subtitle="Tundra i-FORCE MAX"
                            description="La última máquina para la máxima aventura."
                            price="$57,625"
                            priceLegend="MSRP inicial *"
                            dues="20/24"
                            duesLegend="Hasta est. MPG *"
                            color="774120"
                        >
                        </Card>

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
                    </div>

                    <div className={`transition-transform ${activeTab === 3 ? 'flex' : 'hidden'}`}>
                        <Card
                            image="/lnd.jpeg"
                            imageAlt="Land Cruiser"
                            legend="Tal cual: $68,140. * 22/25 est. MPG *"
                            title="2024 | Híbrida"
                            subtitle="Land Cruiser"
                            description="La leyenda continúa con un nuevo capítulo."
                            price="$55,950"
                            priceLegend="MSRP inicial *"
                            dues="22/25"
                            duesLegend="Hasta est. MPG *"
                            color="a6afaf"
                        >
                        </Card>

                        <Card
                            image="/rav.jpeg"
                            imageAlt="RAV4"
                            legend="Tal cual: $39,950. * 25/35 est. MPG *"
                            title="2024 | Híbrida disponible"
                            subtitle="RAV4"
                            description="Rompe lo convencional."
                            price="$28,675"
                            priceLegend="MSRP inicial *"
                            dues="27/35"
                            duesLegend="Hasta est. MPG *"
                            color="5e5549"
                        >
                        </Card>

                        <Card
                            image="/hlh.jpeg"
                            imageAlt="Highlander Hybrid"
                            legend="Tal cual: $46,720. * 36/35 est. MPG *"
                            title="2024 | Híbrida"
                            subtitle="Highlander Hybrid"
                            description="Estilo impresionante que llega lejos."
                            price="$40,970"
                            priceLegend="MSRP inicial *"
                            dues="36/35"
                            duesLegend="Hasta est. MPG *"
                            color="202c41"
                        >
                        </Card>

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
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center mt-20 gap-x-7'>
                <button onClick={prevSlide} className={`bg-black text-white text-3xl py-1 px-4 rounded-3xl hover:bg-black/80 ${scroll < 300 ? 'opacity-50' : ''}`}><MdKeyboardArrowLeft/></button>
                <div>Mover</div>
                <button onClick={nextSlide} className={`bg-black text-white text-3xl py-1 px-4 rounded-3xl hover:bg-black/80 ${scroll > 600 ? 'opacity-50' : ''}`}><MdKeyboardArrowRight/></button>
            </div>

            <div className='flex gap-x-6 justify-center mt-6'>
                <Link href="/" className='px-6 py-2 rounded-3xl border-black font-bold text-black mt-5 flex items-center border gap-x-2 hover:gap-3 transition-all'>Explorar vehículos <MdOutlineKeyboardArrowRight className='text-xl'/></Link>
                <Link href="/" className='px-6 py-2 rounded-3xl font-bold text-black mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Inventario (inglés) <MdOutlineKeyboardArrowRight className='text-xl'/></Link>
            </div>
        </section>
    )
}