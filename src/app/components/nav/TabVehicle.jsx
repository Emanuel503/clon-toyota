import React, { useState } from 'react'
import Card from './Card'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function TabVehicle() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
  };

  return (
    <div className="hidden lg:block bg-white w-full shadow-2xl py-8 border-t  border-b absolute z-20">
        <div className="hidden lg:block bg-white w-full shadow-2xl py-8 border-t  border-b absolute z-20">
            <div className='flex flex-row items-center justify-center mb-5'>
                <button className={`border-b-2 px-5 text-sm h-10 ${activeTab === 1 ? 'border-black text-black' : 'border-gray-200 text-gray-500'}`} onClick={() => handleTabClick(1)}>
                    Autos y Minivan
                </button>
                <button className={`border-b-2 px-5 text-sm h-10 ${activeTab === 2 ? 'border-black text-black' : 'border-gray-200 text-gray-500'}`} onClick={() => handleTabClick(2)}>
                    Camionetas
                </button>
                <button className={`border-b-2 px-5 text-sm h-10 ${activeTab === 3 ? 'border-black text-black' : 'border-gray-200 text-gray-500'}`} onClick={() => handleTabClick(3)}>
                    Crossovers y SUV
                </button>
                <button className={`border-b-2 px-5 text-sm h-10 ${activeTab === 4 ? 'border-black text-black' : 'border-gray-200 text-gray-500'}`} onClick={() => handleTabClick(4)}>
                    Electrificados
                </button>
                <button className={`border-b-2 px-5 text-sm h-10 ${activeTab === 5 ? 'border-black text-black' : 'border-gray-200 text-gray-500'}`} onClick={() => handleTabClick(5)}>
                    Vehículos futuros
                </button>
            </div>

            <div className={`grid-cols-12 mx-14 xl:mx-72 gap-5 transition-all duration-700 ${activeTab === 1 ? 'grid' : 'hidden'}`}>
                <Card
                id="1"
                image="/crv.webp"
                imageAlt="Imagen de Toyota Crown 2024"
                legend="$54, 345 tal cual *"
                title="Toyota Crown 2024"
                price="$40, 350"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="42/41"
                secondDescription="Est. MPG *"
                href="/tacoma"
                >
                </Card>

                <Card
                id="2"
                image="/prp.webp"
                imageAlt="Imagen de Prius Prime 2024"
                legend="$39, 670 tal cual *"
                title="Prius Prime 2024"
                price="$32, 975"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="48/114"
                secondDescription="Est. MPG/mPGe*"
                href="/"
                >
                </Card>

                <Card
                id="3"
                image="/prs.webp"
                imageAlt="Imagen de Prius 2024"
                legend="$26, 265 tal cual *"
                title="Prius 2024"
                price="$27, 950"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="57/56"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="4"
                image="/grc.webp"
                imageAlt="Imagen de GR Corolla 2024"
                legend="$45, 140 tal cual *"
                title="GR Corolla 2024"
                price="$35, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="21/28"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="5"
                image="/coh.webp"
                imageAlt="Imagen de Corolla 2024"
                legend="$25, 490 tal cual *"
                title="Corolla 2024"
                price="$22, 050"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="32/41"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="6"
                image="/coh-h.webp"
                imageAlt="Imagen de Toyota Corolla Hybrid 2024"
                legend="$28, 340 tal cual *"
                title="Toyota Corolla Hybrid 2024"
                price="$23, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="53/46"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="7"
                image="/chb.webp"
                imageAlt="Imagen de Corolla Hatchback 2024"
                legend="$25, 505 tal cual *"
                title="Corolla Hatchback 2024"
                price="$23, 505"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="32/41"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="8"
                image="/cam.webp"
                imageAlt="Imagen de Camry 2024"
                legend="$33, 985 tal cual *"
                title="Camry 2024"
                price="$26, 420"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="28/39"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>
            </div>

            <div className={`grid-cols-12 mx-14 xl:mx-72 gap-5 transition-all duration-700 ${activeTab === 2 ? 'grid' : 'hidden'}`}>
                <Card
                id="9"
                image="/tah.webp"
                imageAlt="Imagen de Tacoma 2024"
                legend="$43, 325 tal cual *"
                title="Tacoma 2024"
                price="$31, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="21/26"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="10"
                image="/tun.webp"
                imageAlt="Imagen de Tundra 2024"
                legend="$56, 905 tal cual *"
                title="Tundra 2024"
                price="$39, 965"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="18/24"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="10"
                image="/tun-h.webp"
                imageAlt="Imagen de Tundra i-FORCE MAX 2024"
                legend="$79, 270 tal cual *"
                title="Tundra i-FORCE MAX 2024"
                price="$57, 625"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="20/24"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>
            </div>

            <div className={`grid-cols-12 mx-14 xl:mx-72 gap-5 transition-all duration-700 ${activeTab === 3 ? 'grid' : 'hidden'}`}>
                <Card
                id="9"
                image="/tah.webp"
                imageAlt="Imagen de Tacoma 2024"
                legend="$43, 325 tal cual *"
                title="Tacoma 2024"
                price="$31, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="21/26"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="10"
                image="/tun.webp"
                imageAlt="Imagen de Tundra 2024"
                legend="$56, 905 tal cual *"
                title="Tundra 2024"
                price="$39, 965"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="18/24"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="10"
                image="/tun-h.webp"
                imageAlt="Imagen de Tundra i-FORCE MAX 2024"
                legend="$79, 270 tal cual *"
                title="Tundra i-FORCE MAX 2024"
                price="$57, 625"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="20/24"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>
                
                <Card
                id="6"
                image="/coh-h.webp"
                imageAlt="Imagen de Toyota Corolla Hybrid 2024"
                legend="$28, 340 tal cual *"
                title="Toyota Corolla Hybrid 2024"
                price="$23, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="53/46"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>
            </div>

            <div className={`grid-cols-12 mx-14 xl:mx-72 gap-5 transition-all duration-700 ${activeTab === 4 ? 'grid' : 'hidden'}`}>
                <Card
                id="1"
                image="/crv.webp"
                imageAlt="Imagen de Toyota Crown 2024"
                legend="$54, 345 tal cual *"
                title="Toyota Crown 2024"
                price="$40, 350"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="42/41"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="2"
                image="/prp.webp"
                imageAlt="Imagen de Prius Prime 2024"
                legend="$39, 670 tal cual *"
                title="Prius Prime 2024"
                price="$32, 975"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="48/114"
                secondDescription="Est. MPG/mPGe*"
                href="/"
                >
                </Card>

                <Card
                id="3"
                image="/prs.webp"
                imageAlt="Imagen de Prius 2024"
                legend="$26, 265 tal cual *"
                title="Prius 2024"
                price="$27, 950"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="57/56"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="4"
                image="/grc.webp"
                imageAlt="Imagen de GR Corolla 2024"
                legend="$45, 140 tal cual *"
                title="GR Corolla 2024"
                price="$35, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="21/28"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="5"
                image="/coh.webp"
                imageAlt="Imagen de Corolla 2024"
                legend="$25, 490 tal cual *"
                title="Corolla 2024"
                price="$22, 050"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="32/41"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="6"
                image="/coh-h.webp"
                imageAlt="Imagen de Toyota Corolla Hybrid 2024"
                legend="$28, 340 tal cual *"
                title="Toyota Corolla Hybrid 2024"
                price="$23, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="53/46"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="7"
                image="/chb.webp"
                imageAlt="Imagen de Corolla Hatchback 2024"
                legend="$25, 505 tal cual *"
                title="Corolla Hatchback 2024"
                price="$23, 505"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="32/41"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="8"
                image="/cam.webp"
                imageAlt="Imagen de Camry 2024"
                legend="$33, 985 tal cual *"
                title="Camry 2024"
                price="$26, 420"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="28/39"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>
            </div>

            <div className={`grid-cols-12 mx-14 xl:mx-72 gap-5 transition-all duration-700 ${activeTab === 5 ? 'grid' : 'hidden'}`}>
                <Card
                id="9"
                image="/tah.webp"
                imageAlt="Imagen de Tacoma 2024"
                legend="$43, 325 tal cual *"
                title="Tacoma 2024"
                price="$31, 500"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="21/26"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="10"
                image="/tun.webp"
                imageAlt="Imagen de Tundra 2024"
                legend="$56, 905 tal cual *"
                title="Tundra 2024"
                price="$39, 965"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="18/24"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>

                <Card
                id="10"
                image="/tun-h.webp"
                imageAlt="Imagen de Tundra i-FORCE MAX 2024"
                legend="$79, 270 tal cual *"
                title="Tundra i-FORCE MAX 2024"
                price="$57, 625"
                priceText="MSRP inicial*"
                firstDescription="Hasta"
                dues="20/24"
                secondDescription="Est. MPG *"
                href="/"
                >
                </Card>
            </div>

            <div className="border-t py-7 flex flex-row items-center justify-center">
                <Link href="/" className='px-6 py-2 rounded-3xl bg-black font-bold text-white mt-5 flex items-center border gap-x-2 hover:gap-3 transition-all'>Vehículos Usados Certificados Toyota <MdOutlineKeyboardArrowRight className='text-xl'/></Link>
                <Link href="/" className='px-6 py-2 rounded-3xl font-bold text-black mt-5 flex items-center gap-x-2 hover:gap-3 transition-all'>Todos los vehículos <MdOutlineKeyboardArrowRight className='text-xl'/></Link>
            </div>
        </div>
    </div>
  )
}
