import Link from "next/link";
import Collaps from "./Collaps";

export default function Links() {
    return (
        <>
            <div className='grid grid-cols-12 mt-16 xl:hidden px-8'>
                <Collaps title="GUÍA DE COMPRAS">
                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Valor de intercambio</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Diseña tu Toyota</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Inventario (inglés)</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Buscar concesionario</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Compra online con SmartPath</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Ofertas locales</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Qué se ajusta a mi presupuesto</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Calcula tu pago</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Pedir cotización</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Vehículos Usados Certificados Toyota</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Comprar partes y accesorios</Link>
                    </div>
                </Collaps>
                
                <Collaps title="VEHÍCULOS">
                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Todos los vehículos Toyota</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>SUV</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Camionetas</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Autos</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Crossovers</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Electrificados</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Híbridos</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Autos híbridos</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>SUV híbridas</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>TRD Pro Series</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Nightshade Series</Link>
                    </div>
                </Collaps>

                <Collaps title="ENLACES ÚTILES">
                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Concesionarios</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Ofertas e incentivos</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Audio Multimedia y Connected Services</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Compatibilidad con celulares</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Mobilidad</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Fleet</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Alquila un Toyota</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Financial Services</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Southeast Toyota Finance</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Insurance</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Opciones de email</Link>
                    </div>
                </Collaps>

                <Collaps title="DUEÑOS">
                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Dueños Inicio</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>ToyotaCare & Maintenance Plans</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Llamados a Revisión y Campañas de Servicios</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Service Centers</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Service Specials</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Safety Hub</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Warning Lights</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Manuals & Warranties</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Service Coupons Discounts</Link>
                    </div>
                </Collaps>

                <Collaps title="ACERCA DE TOYOTA">
                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Empleos</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Quienes somos</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Nuestra compañía</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Outfitters</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Prensa</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Worldwide</Link>
                    </div>

                    <div className='col-span-12 md:col-span-4 lg:col-span-12'>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Racing</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>TRD USA</Link>
                        <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Tour en la planta</Link>
                    </div>
                </Collaps>
            </div>

            <div className='hidden xl:flex flex-row justify-between gap-8 grid-cols-12 mt-16'>
                <div className="col-span-3">
                    <h4 className="font-semibold text-sm mb-6">GUÍA DE COMPRAS</h4>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Valor de intercambio</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Diseña tu Toyota</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Inventario (inglés)</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Buscar concesionario</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Compra online con SmartPath</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Ofertas locales</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Qué se ajusta a mi presupuesto</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Calcula tu pago</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Pedir cotización</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Vehículos Usados Certificados Toyota</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Comprar partes y accesorios</Link>
                </div>
                
                <div className="col-span-3">
                    <h4 className="font-semibold text-sm mb-6">VEHÍCULOS</h4>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Todos los vehículos Toyota</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>SUV</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Camionetas</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Autos</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Crossovers</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Electrificados</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Híbridos</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Autos híbridos</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>SUV híbridas</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>TRD Pro Series</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Nightshade Series</Link>
                </div>

                <div className="col-span-2">
                    <h4 className="font-semibold text-sm mb-6">ENLACES ÚTILES</h4>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Concesionarios</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Ofertas e incentivos</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Audio Multimedia y Connected Services</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Compatibilidad con celulares</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Mobilidad</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Fleet</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Alquila un Toyota</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Financial Services</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Southeast Toyota Finance</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Insurance</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Opciones de email</Link>
                </div>

                <div className="col-span-2">
                    <h4 className="font-semibold text-sm mb-6">DUEÑOS</h4>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Dueños Inicio</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>ToyotaCare & Maintenance Plans</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Llamados a Revisión y Campañas de Servicios</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Service Centers</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Service Specials</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Safety Hub</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Warning Lights</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Manuals & Warranties</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Service Coupons Discounts</Link>
                </div>

                <div className="col-span-2">
                    <h4 className="font-semibold text-sm mb-6">ACERCA DE TOYOTA</h4>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Empleos</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Quienes somos</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Nuestra compañía</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Outfitters</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Prensa</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Worldwide</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Toyota Racing</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>TRD USA</Link>
                    <Link href="/" className='text-sm text-black/75 block mb-6 hover:underline underline-offset-1'>Tour en la planta</Link>
                </div>
            </div>
        </>
    )
}
