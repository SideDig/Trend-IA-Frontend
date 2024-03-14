import BarraNavegacion from "../components/BarraNavegacion";
import Cards_productos from "../components/Cards_productos";

function Categorias() {
    return (
        <>
            <header>
                <BarraNavegacion />
            </header>

            <div className="border-b-2 border-black mx-8 my-0 py-4">
                <h1 className="text-2xl">Celulares</h1>
            </div>

            <div className="mx-11 my-0 py-4 ">
                <div className="grid grid-cols-5 gap-4 ">
                    <Cards_productos />
                    <Cards_productos />
                    <Cards_productos />
                    <Cards_productos />
                    <Cards_productos />
                </div>

            </div>


            {/* AQUI VA OTRA CATEGORIA*/}
            <div className="border-b-2 border-black mx-8 my-0 py-4">
                <h1 className="text-2xl">Computadoras</h1>
            </div>

            <div className="mx-11 my-0 py-4 ">
                <div className="grid grid-cols-5 gap-4 ">
                    <Cards_productos />
                    <Cards_productos />
                    <Cards_productos />
                    <Cards_productos />
                    <Cards_productos />
                </div>

            </div>
        </>
    )
}

export default Categorias
