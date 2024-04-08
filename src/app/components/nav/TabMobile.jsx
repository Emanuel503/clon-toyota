import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import { FaHeart, FaListUl, FaUserCircle } from "react-icons/fa";
import { GoTools } from 'react-icons/go';
import Card from './Card';

export default function TabMobile() {
  
  const [menu, setMenu] = useState(null)
  
  return (
    <div className="lg:hidden bg-white border-t w-full md:w-1/2 md:right-0 absolute z-20  rounded-t-none rounded-l-lg max-h-screen overflow-y-auto">
        {!menu && 
          <>
            <div onClick={() => {setMenu(1)}} className='border border-gray-300 rounded-lg py-3 px-4 mx-8 my-6 flex items-center justify-between cursor-pointer'>
                <h3 className="font-semibold">My toyota</h3>
                <MdOutlineKeyboardArrowRight className='text-3xl'/>
            </div>

            <div className='mt-7 mx-8'>
                <button onClick={() => {setMenu(2)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Vehículos <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(3)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Guía de compra <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(4)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Dueños <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Buscar concesionario</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Buscar inventario</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Diseña y cotiza</Link>
            </div>

            <div className='my-7 mx-8'>
                <h3 className='text-sm'>MI UBICACIÓN</h3>
                <div className='h-10 flex mt-3'>
                    <div className='relative w-full flex items-center'>
                        <SlLocationPin className='absolute left-2 text-xl'/>
                        <input placeholder='ZIP Code' type="text" name="zip" className='border border-black rounded-y-md rounded-l-md h-full w-full pl-8 placeholder:font-semibold text-sm' />
                    </div>
                    <button className='bg-black border border-black text-white py-1 px-5 h-full text-sm rounded-r-md font-semibold'>Update</button>
                </div>
            </div>
          </>
        }

        {menu == 1 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(null))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">MY TOYOTA</h3>
            </div>

            <div className='border-gray-300 border text-gray-600 mx-8 text-sm rounded-lg p-8 relative mb-5'>
                <div className='flex justify-center'>
                    <FaUserCircle className='text-5xl absolute -top-6 bg-white rounded-full'/>
                </div>

                <p className='text-center leading-6'>
                    La proxima experiencia ser en inglés.<br/>
                    Aquí podrás acceder a lo que necesites,<br/>
                    desde información sobre la propiedad de <br/>
                    tu Toyota hasta guardar vehículos<br/>
                    futuros
                </p>

                <div className='flex items-center justify-center mt-6'>
                    <button className='px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-3xl'>Sign In</button>
                    <button className='px-8 py-2 text-red-600 font-semibold hover:underline rounded-3xl flex items-center gap-2'>Create Account <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                </div>
            </div>
            <div className='pt-4 pb-8 mx-8 flex flex-col'>
                <button className='border-gray-300 border-b py-3 mb-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                    <FaHeart className='text-xl text-black'/> View saves (0)
                </button>
                <button className='border-gray-300 border-b py-3 mb-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                    <div className='w-5 h-5 bg-white border-black border-2 rounded-full'></div> Notification (0)
                </button>
                <button className='py-2 font-semibold text-sm hover:underline flex items-center gap-3'>
                    Manage Preferences
                </button>
            </div>
          </>
        }

        {menu == 2 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(null))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">VEHÍCULOS</h3>
            </div>

            <div className='my-7 mx-8'>
                <button onClick={() => {setMenu(7)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Autos y Minivan <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(8)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Camionetas <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(9)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Crossovers y SUV <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(10)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Electrificados <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <button onClick={() => {setMenu(11)}} className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline w-full" href="/">Vehículos futuros <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-3 mb-4 hover:underline" href="/">Ver todos los vehículos</Link>
            </div>
          </>
        }

        {menu == 3 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(null))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">GUÍA DE COMPRA</h3>
            </div>

            <div className='my-7 mx-8'>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-4 mb-4 hover:underline w-full" href="/">Diseña y cotiza</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-4 mb-4 hover:underline w-full" href="/">Buscar inventario</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-4 mb-4 hover:underline w-full" href="/">Toyota Certificados</Link>
                <Link className="font-semibold flex items-center justify-between text-sm border-b pb-4 mb-4 hover:underline w-full" href="/">Accesorios</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Buscar concesionario</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Ver folletos</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Comprar</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Pedir cotización</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Toyota Financial Services</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Southeast Toyora Finance</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Calcula tu pago</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Qué se ajusta a mi presupuesto</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Valor de intercambio kelly Blue Blook</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Ofertas laborales</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Comprar partes y accesorios</Link>
            </div>
          </>
        }

        {menu == 4 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(null))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">GUÍA DE COMPRA</h3>
            </div>

            <div className='my-7 mx-8'>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Dueños Inicio</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Manuals & Warranties</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Services History</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Audio Multimedia y Connected Services</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Llamado a Revisión</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Warning Lights</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Shedule Services</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Service Centers</Link>
                <Link className="font-semibold flex items-center justify-between text-sm pb-1 mb-4 hover:underline" href="/">Vehicle Specs</Link>
                <button onClick={() => {setMenu(5)}} className="font-semibold flex items-center justify-between text-sm border-b border-t py-4 hover:underline w-full" href="/">
                  <div className='flex items-center'><GoTools className="text-2xl mr-3" /> SERVICES & PARTS</div> 
                  <MdOutlineKeyboardArrowRight className='text-3xl'/>
                </button>
                <button onClick={() => {setMenu(6)}} className="font-semibold flex items-center justify-between text-sm border-b py-4 mb-4 hover:underline w-full" href="/">
                  <div className='flex items-center'><FaListUl className="text-2xl mr-3" /> FEATURES</div> 
                  <MdOutlineKeyboardArrowRight className='text-3xl'/>
                </button>
            </div>
          </>
        }

        {menu == 5 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(4))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">SERVICE & PARTS</h3>
            </div>

            <div className='my-7 mx-8'>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Services Special</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Maintenance shedule</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Certified Collison Centers</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Toyota Express Maintenance</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Toyota Genuine Parts</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">ToyotaCare y planes de matenimiento</Link>
            </div>
          </>
        }

        {menu == 6 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full'>
              <button onClick={() => (setMenu(4))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">FEATURES</h3>
            </div>

            <div className='my-7 mx-8'>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Vehicle Videos</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Safety Hub</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Clean Assist</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Kick Sensor</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">bZ4X</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Dashcam</Link>
                <Link className="flex items-center justify-between text-sm pb-1 mb-3 hover:underline" href="/">Over the Air Updates</Link>
            </div>
          </>
        }

        {menu == 7 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full right-0 bg-white z-10'>
              <button onClick={() => (setMenu(2))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">AUTOS Y MINIVAN</h3>
            </div>

            <div className="grid-cols-12 my-7 mx-8">
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
          </>
        }

        {menu == 8 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full right-0 bg-white z-10'>
              <button onClick={() => (setMenu(2))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">CAMIONETAS</h3>
            </div>

            <div className="grid-cols-12 my-7 mx-8">
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
          </>
        }

        {menu == 9 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full right-0 bg-white z-10'>
              <button onClick={() => (setMenu(2))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">CROSSOVERS Y SUV</h3>
            </div>

            <div className="grid-cols-12 my-7 mx-8">
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
          </>
        }

        {menu == 10 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full right-0 bg-white z-10'>
              <button onClick={() => (setMenu(2))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">ELECTRIFICADOS</h3>
            </div>

            <div className="grid-cols-12 my-7 mx-8">
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
          </>
        }

        {menu == 11 && 
          <>
            <div className='text-center px-2 py-5 mb-10 border-b w-full right-0 bg-white z-10'>
              <button onClick={() => (setMenu(2))} className='inline-block float-left' type="button">
                <MdOutlineKeyboardArrowLeft className='text-3xl'/>
              </button>
              <h3 className="font-semibold inline-block">VEHÍCULOS FUTUROS</h3>
            </div>

            <div className="grid-cols-12 my-7 mx-8">
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
          </>
        }
    </div>
  )
}
