import { useEffect, useState } from 'react';
import BarraNavegacion from "../components/BarraNavegacion";
import { useParams } from "react-router-dom";
import { useDataContext } from '../context/dataContext'; // Asegúrate de importar el hook del contexto

function Producto() {
  const { idP } = useParams(); // ID del producto obtenido de la URL
  const { Productos, obtenerlosProductos } = useDataContext(); // Destructurando para obtener los productos y la función del contexto
  const [productoActual, setProductoActual] = useState(null); // Estado para el producto actual

  useEffect(() => {
    obtenerlosProductos(); // Podrías llamar a esta función si tus productos no están pre-cargados
  }, [obtenerlosProductos]);

  useEffect(() => {
    // Buscar el producto específico por ID
    const prodEncontrado = Productos.find(prod => prod.id_p.toString() === idP);
    setProductoActual(prodEncontrado); // Actualizar el estado con el producto encontrado
  }, [idP, Productos]);

  // Verificación si el producto está cargando o no se encontró
  if (!productoActual) return <div>Cargando producto...</div>;

  // Datos de ejemplo a reemplazar o modificar según los datos reales del producto
  const items = [
    { label: 'Ventas', value: productoActual.ventas || '000' },
    { label: 'Marca', value: productoActual.marca || 'N/A' },
    { label: 'Fecha Lanzamiento', value: productoActual.fecha_lanzamiento || '000' },
    { label: 'Fecha Estimada', value: productoActual.fecha_estimada || '2 días' }
  ];


  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      <div className="flex justify-evenly mx-11 my-4 p-1">
        <div className="border-2 border-gray-500 m-3 w-[50%] flex items-center justify-center">
          <img src={productoActual.imagen_portada} />
        </div>

        <div className="flex flex-col border-2 m-3 border-gray-500 p-7 w-[50%]">
          <h2 className="text-xl font-bold">{productoActual.nombre} </h2>
          <span className=" font-semibold py-2">Calificacion: {productoActual.calificacion} </span>
          <select className="w-28 border-2 border-black rounded-md p-1 " name="ecommerce">
            <option value="Walmart">Walmart</option>
            <option value="Amazon">Amazon</option>
          </select>

          <div className="flex flex-col justify-center items-center">
            <h2 className=" text-2xl font-semibold m-1">${productoActual.precio} MXN</h2>
            <span>En Stock: {productoActual.cantidad_stock}</span>
            <button className="bg-black text-white w-36 rounded-md py-1 m-2">Agregar</button>
          </div>
          <p className="font-bold">Detalles</p>

          <div className="flex py-2 flex-row gap-20">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="font-bold">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div >
            <span>{productoActual.descripcion}</span>
          </div>
        </div>
      </div>
      <div className=" mx-11 my-4 p-1">
        <h2 className=" font-semibold text-2xl border-b-2 border-black">Prediccion de costos</h2>

            {/* aQUIII VA LA TABLAAA  */}

            <table>
        <thead >
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>121212</td>
              <td>12222222222</td>
            </tr>
         
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Producto;
