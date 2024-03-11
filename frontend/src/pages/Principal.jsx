import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Principal() {
    const urlLogoTrendIA = 'https://i.imgur.com/zEewjjl.jpg';
    const videoPresentacion1 = 'https://res.cloudinary.com/dmv6rfxeb/video/upload/v1710053886/presentacion1.mp4';

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
                    <img width="80px" height="auto" src={urlLogoTrendIA} />
                    <a href="/inicio"><h1 className="text-2xl"><b>Trend IA</b></h1></a>
                </div>
                <div>
                    <Link to="/registro"><button className="px-5 py-1 border-2 border-solid m-2 border-black rounded-sm">Registrarse</button></Link>
                    <Link to="/registro"><button className="px-5 py-1 border-2 border-solid m-2 border-black bg-black text-white rounded-sm">Iniciar Sesion</button></Link>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video className="w-full h-full object-cover" autoPlay loop muted>
                    <source src="src/assets/videos/Banner.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col z-0">
                    <h2 className="text-6xl text-white font-bold">Emprende con Trend AI</h2>
                    <p className="text-2xl text-white font-bold m-4">Predice el futuro de tus ventas</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full text-center pb-[35px]">
                    <div className="flex justify-center">
                        <div className="mx-5 bg-black bg-opacity-40 backdrop-blur-md text-white max-w-md rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 text-lg leading-tight font-bold text-white text-[22px] ">Ventas exitosas 100% Garantizadas </p>
                                    <p className="mt-2 text-white text-[17px]"> ¿Sabias que el 99.9% de usuarios invierten con Trend IA tienen negocios exitosos?</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 bg-black bg-opacity-10 backdrop-blur-sm text-white max-w-md rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 leading-tight font-bold text-white text-[22px]">Convierte en el proximo millonario</p>
                                    <p className="mt-2 text-white text-[17px]">  No dejes morir tu idea, empieza a invertir con tan solo un $1 y hazla realidad!</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 bg-black bg-opacity-10 backdrop-blur-sm text-white max-w-md rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 text-lg leading-tight font-bold text-white text-[22px]">Tu dinero en las mejores manos </p>
                                    <p className="mt-2 text-white text-[17px]"> Invierte tu dinero con Trend IA aseguramos la proteccion y seguridad de tu dinero junto a tu inversion</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <h2 className="text-[20px] mx-28 my-7">Acerca de Trend IA</h2>

                <div className="mx-28">
                    <Section>
                        <div className="w-96 h-54 overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                <source src={videoPresentacion1} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center p-8">
                            <motion.h2 className="text-2xl font-bold text-gray-800 mb-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                ¡Potencia tus ventas!
                            </motion.h2>
                            <motion.p className="text-xl text-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                En TREND IA, utilizamos el poder del machine learning para predecir con precisión las tendencias de ventas futuras.
                            </motion.p>
                        </div>
                    </Section>
                    <br />
                    <Section>
                        <div className="flex-1 flex flex-col justify-center items-center p-8">
                            <motion.h2 className="text-2xl font-bold text-gray-800 mb-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                ¡Un enfoque innovador!
                            </motion.h2>
                            <motion.p className="text-xl text-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Nuestro enfoque innovador te ayudará a potenciar tus ventas.
                            </motion.p>
                        </div>
                        <div className="w-96 h-54 overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                <source src={videoPresentacion1} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>

                    </Section>
                    <br />
                    <Section>
                        <div className="w-96 h-54 overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                <source src={videoPresentacion1} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center p-8">
                            <motion.h2 className="text-2xl font-bold text-gray-800 mb-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                ¡Un enfoque innovador!
                            </motion.h2>
                            <motion.p className="text-xl text-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Nuestro enfoque innovador te ayudará a potenciar tus ventas.
                            </motion.p>
                        </div>
                    </Section>
                </div>

            </div>
        </>
    )
}

export default Principal