import BarraNavegacion from "../components/BarraNavegacion";
import Cards_productos from "../components/Cards_productos";
import "../styles/Inicio.css"

function Inicio() {
  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      <div className="border-b-2 border-black mx-8 my-0 py-4">
        <div className="titulo_Inicio">
          <h2 className="text-2xl">Productos en tendencia</h2>
          <button className="btn_presupuesto">Presupuesto</button>
        </div>
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

export default Inicio
