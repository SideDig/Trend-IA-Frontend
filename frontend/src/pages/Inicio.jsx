import BarraNavegacion from "../components/BarraNavegacion";
import Cards_productos from "../components/Cards_productos";
import "../styles/Inicio.css"
import ModalPresupuesto from "../components/ModalPresupuestos.jsx";
import { useState } from "react";


function Inicio() {
<<<<<<< HEAD
 
  

  
=======
  const { obtenerlosProductosPorTendencia, ProductosTendencia } = useDataContext();

  useEffect(() => {
    obtenerlosProductosPorTendencia();
  }, []);
>>>>>>> 85eaa69c61956cbe9c748f6d706d7dc545aa3d46

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
          {
            Object.values(ProductosTendencia).map(producto => (
              <Cards_productos key={producto.id_p} producto={producto} tec={false} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Inicio
