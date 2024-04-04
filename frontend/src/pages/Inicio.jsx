import BarraNavegacion from "../components/BarraNavegacion";
import Cards_productos from "../components/Cards_productos";
import "../styles/Inicio.css"
import ModalPresupuesto from "../components/ModalPresupuestos.jsx";
import { useState, useEffect } from "react";
import { useDataContext } from "../context/dataContext";


function Inicio() {
  const { obtenerlosProductos, Productos } = useDataContext();

  useEffect(() => {
    obtenerlosProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(Productos)

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      <div className="border-b-2 border-black mx-8 my-0 py-4">
        <div className="titulo_Inicio">
          <h2 className="text-2xl">Productos en tendencia</h2>
          <button className="btn_presupuesto" onClick={() => setModalVisible(!modalVisible)}>Presupuesto</button>
          {modalVisible && <ModalPresupuesto />}
        </div>
      </div>

      <div className="mx-11 my-0 py-4 ">
        <div className="grid grid-cols-5 gap-4 ">
          <Cards_productos/>

        </div>

      </div>
    </>
  )
}

export default Inicio
