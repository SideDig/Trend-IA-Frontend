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
                    <h2 className="text-4xl text-white font-bold">Emprende con Trend AI</h2>
                    <p className="text-lg text-white font-bold m-2">Predice el futuro de tus ventas</p>
                </div>
            </div>
        </>
    )
}

export default Principal
