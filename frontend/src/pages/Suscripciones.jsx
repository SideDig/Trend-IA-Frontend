import BarraNavegacion from "../components/BarraNavegacion"
import { useState } from "react";
import MetodosPagos from "../components/MetodosPagos";

function Suscripciones() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <header>
                <BarraNavegacion />
            </header>
            <div>
                <div className="flex justify-center content-center text-[28px] font-bold m-5">
                    <h1>Planes de suscripciones</h1>
                </div>
                <div className=" top-0 left-0 w-full h-full">
                    <div className="p-3 border-2 border-gray-400 mx-44 mb-5 mt-2 rounded-md">
                        <p className="text-[20px] mb-3"><b>Prueba Gratis</b></p>
                        <div className="flex">
                            <div className="grid grid-rows-3 grid-flow-col gap-2">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <p>3 productos sugeridos basados en el presupuesto</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <p>5 preguntas cada 8 horas</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    <p>Estadisticas en forma de graficos</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    <p>Informacion detallada del producto</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    <p>Historial de presupuestos</p>
                                </div>

                            </div>
                            <div>
                                <button onClick={() => setModalVisible(!modalVisible)} >Hola</button>
                            </div>
                        </div>
                    </div>
                    {modalVisible && <MetodosPagos />}
                    <div className="p-3 border-2 border-gray-400 mx-44 mb-5 mt-8 rounded-md">
                        <p className="text-[20px] mb-3"><b>Premium</b></p>
                        <div className="grid grid-rows-3 grid-flow-col gap-2">
                            <div className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>6 productos sugeridos basados en el presupuesto</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Preguntas ilimitadas</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Estadisticas en forma de graficos</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Informacion detallada del producto</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Historial de presupuestoss</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suscripciones;
