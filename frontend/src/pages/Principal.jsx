import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Principal() {
    const urlLogoTrendIA = 'https://i.imgur.com/zEewjjl.jpg';
    const videoPresentacion1 = 'https://res.cloudinary.com/dmv6rfxeb/video/upload/v1711923677/a0unz4wap3mvyelwtzzq.mp4';
    const videoPresentacion2 = 'https://res.cloudinary.com/dmv6rfxeb/video/upload/v1711922990/wgmun4wx3aiawyqk9usy.mp4';
    const videoPresentacion3 = 'https://res.cloudinary.com/dmv6rfxeb/video/upload/v1711923326/yyzmsj8bzyzvxq86aaxp.mp4'
    // eslint-disable-next-line react/prop-types
    function Section({ children }) {
        const { ref, inView } = useInView({
            triggerOnce: true,
        });

        return (
            <motion.div className="border-black border-2 rounded-lg shadow-xl overflow-hidden flex justify-center items-center"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <>
            <div className="p-2.5 flex items-center justify-between border-b-2 border-black relative z-50 bg-white">
                <div className="flex items-center">
                    <img width="60px" height="auto" src={urlLogoTrendIA} />
                    <a href="/inicio"><h1 className="text-[23px]"><b>Trend IA</b></h1></a>
                </div>
                <div>
                    <Link to="/registro"><button className="text-[16px] px-5 py-1 border-2 border-solid m-2 border-black rounded-sm">Registrarse</button></Link>
                    <Link to="/registro"><button className="text-[16px] px-5 py-1 border-2 border-solid m-2 border-black bg-black text-white rounded-sm">Iniciar Sesion</button></Link>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video className="w-full h-full object-cover" autoPlay loop muted>
                    <source src="src/assets/videos/Banner.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col z-0">
                    <h2 className="text-5xl text-white font-bold">Emprende con Trend AI</h2>
                    <p className="text-[18px] text-white font-bold m-4">Predice el futuro de tus ventas</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full text-center pb-[35px]">
                    <div className="flex justify-center">
                        <div className="mx-5 bg-black bg-opacity-40 backdrop-blur-md text-white max-w-md rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1  leading-tight font-bold text-white text-[18px] ">Ventas exitosas 100% Garantizadas </p>
                                    <p className="mt-2 text-white text-[15px]"> ¿Sabias que el 99.9% de usuarios invierten con Trend IA tienen negocios exitosos?</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 bg-black bg-opacity-10 backdrop-blur-sm text-white max-w-md rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 leading-tight font-bold text-white text-[18px]">Convierte en el proximo millonario</p>
                                    <p className="mt-2 text-white text-[15px]">  No dejes morir tu idea, empieza a invertir con tan solo un $1 y hazla realidad!</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 bg-black bg-opacity-10 backdrop-blur-sm text-white max-w-md rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 leading-tight font-bold text-white text-[18px]">Tu dinero en las mejores manos </p>
                                    <p className="mt-2 text-white text-[15px]"> Invierte tu dinero con Trend IA aseguramos la proteccion y seguridad de tu dinero junto a tu inversion</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <h2 className="text-[30px] mx-28 my-7 font-bold">Acerca de Trend IA</h2>
                
                <div className="mx-28">
                    <Section>
                        <div className="w-96 h-54 overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                <source src={videoPresentacion1} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center p-8">
                            <motion.h2 className="text-[18px] font-bold text-gray-800 mb-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                 Descubre el futuro de tus ventas
                            </motion.h2>
                            <motion.p className="text-[18px] text-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                            Con TREND IA, desbloquea el potencial de tus productos antes que nadie. Utilizamos análisis avanzados y machine learning para predecir las tendencias de venta, permitiéndote estar siempre un paso adelante. Imagina conocer el próximo gran éxito antes de que suceda. Eso es lo que ofrecemos.                            </motion.p>
                        </div>
                    </Section>
                    <br />
                    <Section>
                        <div className="flex-1 flex flex-col justify-center items-center p-8">
                            <motion.h2 className="text-[18px] font-bold text-gray-800 mb-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Estrategia basada en datos, éxito asegurado
                            </motion.h2>
                            <motion.p className="text-[18px] text-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                            No es solo sobre predecir; es sobre crear oportunidades. Nuestro enfoque único integra datos históricos con señales del mercado en tiempo real para ofrecerte insights accionables.                             </motion.p>
                        </div>
                        <div className="w-96 h-54 overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                <source src={videoPresentacion3} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>

                    </Section>
                    <br />
                    <Section>
                        <div className="w-96 h-54 overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                <source src={videoPresentacion2} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center p-8">
                            <motion.h2 className="text-[18px] font-bold text-gray-800 mb-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                ¡Un enfoque innovador!
                            </motion.h2>
                            <motion.p className="text-[18px] text-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Nuestro enfoque innovador te ayudará a potenciar tus ventas.
                            </motion.p>
                        </div>
                    </Section>
                </div>

                <div className="flex justify-center space-x-8 my-10">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                        <h2 className="text-[19px] font-bold text-center mb-4">Prueba gratis</h2>
                        <ul className="list-none">
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[17px] font-medium">3 productos sugeridos basados en el presupuesto</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[17px] font-medium">5 preguntas cada 8 horas</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <span className="text-[17px] font-medium">Estadísticas en forma de gráficos</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <span className="text-[17px] font-medium">Información detallada del producto</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <span className="text-[17px] font-medium">Historial de presupuestos</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                        <h2 className="text-[19px] font-bold text-center mb-4">Premium</h2>
                        <ul className="list-none">
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[16px] font-medium">6 productos sugeridos basados en el presupuesto</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[16px] font-medium">Preguntas ilimitadas</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[16px] font-medium">Estadísticas en forma de gráficos</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[16px] font-medium">Información detallada del producto</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-[16px] font-medium">Historial de presupuestos</span>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Principal