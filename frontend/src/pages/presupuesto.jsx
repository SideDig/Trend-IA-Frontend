import { useParams } from 'react-router-dom';
import BarraNavegacion from "../components/BarraNavegacion.jsx";
import Cards_productos from "../components/Cards_productos.jsx";
import "../styles/Inicio.css"
import { useEffect } from "react";
import { useDataContext } from "../context/dataContext.jsx";

function Presupuestos() {
  const { obtenerlosProductosPorPresupuesto, ProductosPresupuesto } = useDataContext();

  const { idC, ec, pre } = useParams();
  const data={
    "id_c": idC,
    "ecommerce": ec,
    "presupuesto": pre
  }

  useEffect(() => {
    obtenerlosProductosPorPresupuesto(data);
  }, []);


  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      <div className="mx-11 my-0 py-4 ">
        <div className="grid grid-cols-5 gap-4 ">
          {
            Object.values(ProductosPresupuesto).map(producto => (
              <Cards_productos key={producto.id_p} producto={producto} tec={false}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Presupuestos
