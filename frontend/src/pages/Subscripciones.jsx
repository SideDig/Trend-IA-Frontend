import BarraNavegacion from "../components/BarraNavegacion"


function Subscripciones() {
    return (
        <>
            <header>
                <BarraNavegacion />
            </header>
            <div>
                <div className="border-2 absolute top-0 left-0 w-full h-full pt-[3rem] border-blue-700">
                    <div className="p-5 border-2 border-gray-400 mx-44 my-14 rounded-md">
                        <p className="text-[20px] mb-4">Prueba Gratis</p>
                        <div className="grid grid-rows-3 grid-flow-col gap-2">
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>3 productos sugeridos basados en el presupuesto</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>5 preguntas cada 8 horas</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <p>Estadisticas en forma de graficos</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <p>Informacion detallada del producto</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <p>Historial de presupuestos</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 border-2 border-gray-400 mx-44 my-14 rounded-md">
                        <p className="text-[20px] mb-4"><b>Prueba Gratis</b></p>
                        <div className="grid grid-rows-3 grid-flow-col gap-2">
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>6 productos sugeridos basados en el presupuesto</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Preguntas ilimitadas</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Estadisticas en forma de graficos</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p>Informacion detallada del producto</p>
                            </div>
                            <div className="flex items-center mb-4">
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

export default Subscripciones;
