'use client'

import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import Card from "./nav/Card";

export default function Nav() {

  const [menu, setMenu] = useState(null)

  const toggleMenu = (item) => {
    if(item == menu){
     setMenu(null)
    }else{
     setMenu(item)
    }
  }

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
  };

  return (
    <nav className="h-16 w-full bg-white z-20">
        <div className="flex flex-row items-center px-12 h-full w-full">
            <Link href="/">
                <Image
                    src="/toyota_logo.svg"
                    width={250}
                    height={150}
                    alt="Logo de Toyota"
                    className="w-32 h-auto"
                />
            </Link>
            <div className="flex h-full w-full justify-end items-center ">
                <div className="hidden lg:flex gap-x-8">
                    <button onClick={() => (toggleMenu(1))} className={`border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200 ${menu == 1 ? 'bg-black text-white' : 'bg-white text-black' }`}>Vehiculos {menu == 1 ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/> }</button>
                
                    <button onClick={() => (toggleMenu(2))} className={`border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200 ${menu == 2 ? 'bg-black text-white' : 'bg-white text-black' }`}>Guia de compra {menu == 2 ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/> }</button>
                
                    <button onClick={() => (toggleMenu(3))} className={`border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200 ${menu == 3 ? 'bg-black text-white' : 'bg-white text-black' }`}>Dueños {menu == 3 ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/> }</button>
                
                    <Link href="/" className="border border-white hover:border-black rounded-3xl px-4 py-2 font-semibold flex items-center gap-x-2 transition-all duration-200">Buscar inventario</Link>
                
                    <FaUserCircle className='text-4xl hover:text-gray-400 transition-colors'/>
                </div>

                <button>
                    <VscMenu className="lg:hidden text-4xl"/>
                </button>
            </div>
        </div>

        {
         menu == 1 &&
         <div className="bg-white w-full shadow-2xl py-8 border-t  border-b absolute z-20">
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
        }

        {
         menu == 2 &&
         <div className="bg-white py-8 border-t rounded-b-lg w-full lg:w-11/12 xl:w-4/6 right-0  xl:mr-20 absolute z-20 grid grid-cols-12">
            <div className="col-span-6 border-gray-300 border-r p-5 grid grid-cols-12 gap-y-12 gap-x-8">
              <div className="col-span-6">
                <Link className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Diseña y cotiza <MdOutlineKeyboardArrowRight className='text-xl'/> </Link>
                <p className="text-gray-500 text-sm">Diseña tu toyota</p>
              </div>
              <div className="col-span-6">
                <Link className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Diseña y cotiza <MdOutlineKeyboardArrowRight className='text-xl'/> </Link>
                <p className="text-gray-500 text-sm">Ver modelos usados</p>
              </div>
              <div className="col-span-6">
                <Link className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Diseña y cotiza <MdOutlineKeyboardArrowRight className='text-xl'/> </Link>
                <p className="text-gray-500 text-sm">Encuentra tu auto</p>
              </div>
              <div className="col-span-6">
                <Link className="font-semibold flex items-center gap-2 text-sm hover:underline" href="/">Diseña y cotiza <MdOutlineKeyboardArrowRight className='text-xl'/> </Link>
                <p className="text-gray-500 text-sm">Personaliza tu toyota</p>
              </div>
            </div>

            <div className="col-span-3 border-gray-300 border-r p-5">
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Buscar concesionarios</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Ver folletos</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Comparar Modelos</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Pedir cotización</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Toyota Financial Services</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-0 hover:underline">Southeast Toyota Finance</Link>
            </div>

            <div className="col-span-3 p-5">
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Calcula tu pago</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Qué se ajusta a mi presupuesto</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Valor de intercambio Kelly Blue Book</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-4 hover:underline">Ofertas locales</Link>
              <Link href="/" className="text-xs text-gray-700 block mb-0 hover:underline">Comprar partes y accesorios</Link>
            </div>
         </div>
        }
    </nav>
  )
}
