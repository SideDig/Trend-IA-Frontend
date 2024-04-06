import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDataContext } from '../context/dataContext';
import BarraNavegacion from '../components/BarraNavegacion'; // Asegúrate de tener este componente

function Producto() {
  const { idP } = useParams();
  const { Productos, obtenerlosProductos } = useDataContext();
  const [detalleProducto, setDetalleProducto] = useState(null);
  const [ecommerceSeleccionado, setEcommerceSeleccionado] = useState('');

  useEffect(() => {
    obtenerlosProductos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const productoInicial = Productos.find(prod => prod.id_p.toString() === idP);
    if (productoInicial) {
      setDetalleProducto(productoInicial);
      setEcommerceSeleccionado(productoInicial.ecommerce);
    }
  }, [idP, Productos]);

  useEffect(() => {
    if (ecommerceSeleccionado) {
      const productoActualizado = Productos.find(prod => prod.nombre === detalleProducto?.nombre && prod.ecommerce.toUpperCase() === ecommerceSeleccionado.toUpperCase());
      if (productoActualizado) {
        setDetalleProducto(productoActualizado);
      }
    }
  }, [ecommerceSeleccionado, Productos, detalleProducto?.nombre]);

  const handleEcommerceChange = (e) => {
    setEcommerceSeleccionado(e.target.value);
  };

  // Simulación de `items` y `tableData`
  const items = detalleProducto ? [
    { label: 'Ventas', value: detalleProducto.ventas || '000' },
    { label: 'Marca', value: detalleProducto.marca || 'N/A' },
    { label: 'Fecha Lanzamiento', value: detalleProducto.fecha_lanzamiento || 'N/D' },
    { label: 'Fecha Estimada', value: detalleProducto.fecha_estimada || '2 días' },
  ] : [];

  const tableData = [
    // Datos de ejemplo, reemplaza con datos reales
    { fecha: "2024-01-01", precio: "$1000" },
    { fecha: "2024-02-01", precio: "$950" },
  ];

  if (!detalleProducto) return <div>Cargando información del producto...</div>;

  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      <div className="flex justify-evenly mx-11 my-4 p-1">
        <div className="border-2 border-gray-500 m-3 w-[50%] flex items-center justify-center">
          <img src={detalleProducto.imagen_portada} alt="Imagen del producto" />
        </div>

        <div className="flex flex-col border-2 m-3 border-gray-500 p-7 w-[50%]">
          <h2 className="text-xl font-bold">{detalleProducto.nombre}</h2>
          <span className="font-semibold py-2">Calificación: {detalleProducto.calificacion}</span>
          <select value={ecommerceSeleccionado} onChange={handleEcommerceChange} className="w-28 border-2 border-black rounded-md p-1" name="ecommerce">
            <option value="Walmart">Walmart</option>
            <option value="Amazon">Amazon</option>
          </select>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold m-1">${detalleProducto.precio} MXN</h2>
            <span>En Stock: {detalleProducto.cantidad_stock}</span>
            <button className="bg-black text-white w-36 rounded-md py-1 m-2">Agregar al carrito</button>
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
          <div>
            <span>{detalleProducto.descripcion}</span>
          </div>
        </div>
      </div>
      
      <table className="w-[20%] divide-y divide-black">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border border-black">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border border-black">
              Precio
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-black">
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-black">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                {row.fecha}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                {row.precio}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Producto;
