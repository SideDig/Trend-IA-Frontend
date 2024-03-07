import { Link } from "react-router-dom";

function Principal() {
    return (
        <>
            <div className="p-2.5 flex items-center justify-between border-b-2 border-black relative z-50 bg-white">
                <div className="flex items-center">
                    <img width="80px" height="auto" src="src/assets/img/logo.png" />
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
                    <p className="text-2xl text-white font-bold m-7">Predice el futuro de tus ventas</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full text-center pb-14">
                    <div className="flex justify-center">
                        <div className="mx-5 bg-black bg-opacity-70 backdrop-blur-md text-white max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 text-lg leading-tight font-medium text-white">Esto es una pruebaaa</p>
                                    <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae odit illo alias dolores officiis harum mollitia quam dolor voluptates, voluptate voluptatem culpa. Cumque labore, eligendi ad nulla suscipit et!</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 bg-black bg-opacity-70 backdrop-blur-md text-white max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 text-lg leading-tight font-medium text-white">Esto es una pruebaaa</p>
                                    <p className="mt-2 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam corporis porro, asperiores sequi vitae alias sit consectetur cupiditate quia nisi, et quae a explicabo iste aspernatur! Natus modi excepturi et!</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-5 bg-black bg-opacity-70 backdrop-blur-md text-white max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="block mt-1 text-lg leading-tight font-medium text-white">Esto es una pruebaaa</p>
                                    <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero consequuntur odit mollitia exercitationem quidem quasi veritatis fuga blanditiis, quaerat asperiores velit veniam expedita eius animi quae assumenda itaque sed.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Principal
