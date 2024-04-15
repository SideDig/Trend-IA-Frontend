import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDataContext } from '../context/dataContext';
import BarraNavegacion from '../components/BarraNavegacion';
import Predicciones from '../components/predicciones';
import { useAuth } from "../context/authContext";
import { Link } from 'react-router-dom';
function Producto() {
  const { idP } = useParams();
  const { user } = useAuth();
  const { Productos, obtenerlosProductos } = useDataContext();
  const [detalleProducto, setDetalleProducto] = useState(null);
  const [ecommerceSeleccionado, setEcommerceSeleccionado] = useState('');
  const [idPo, setIdPo] = useState(null);


  useEffect(() => {
    obtenerlosProductos();
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
        setIdPo(productoActualizado.id_p);
        setDetalleProducto(productoActualizado);
      }
    }
  }, [ecommerceSeleccionado, Productos, detalleProducto?.nombre]);

  const handleEcommerceChange = (e) => {
    setEcommerceSeleccionado(e.target.value);
  };

  // Simulación de items y tableData
  const items = detalleProducto ? [
    { label: 'Ventas', value: detalleProducto.ventas || '000' },
    { label: 'Marca', value: detalleProducto.marca || 'N/A' },
    { label: 'Fecha Lanzamiento', value: detalleProducto.fecha_lanzamiento || 'N/D' },
    { label: 'Fecha Estimada', value: detalleProducto.fecha_estimada || '0 días' },
  ] : [];

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

      <div className="relative">
        <h1 className='border-b-2 border-black mb-5 mx-14 text-[27px] font-bold'>Predicción de Costos</h1>
        <Predicciones idP={idPo} ecommerceSeleccionado={ecommerceSeleccionado} />
        {user && user.suscripcion === 'FREE' && (
          <div className="absolute inset-x-0 top-[70px] bottom-0 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-black shadow-lg rounded-xl p-8 max-w-lg w-full border border-gray-700">
              <h3 className="text-white text-3xl font-bold text-center">
                Acceso Limitado
              </h3>
              <p className="text-white mt-4 text-center text-lg">
                Lo sentimos, este contenido es exclusivo para suscriptores Premium.
              </p>
              <div className="mt-6 flex justify-center">
                <Link to={"/suscripciones"}><button className="bg-white text-black hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-300 rounded shadow">
                  Suscríbete Ahora
                </button></Link>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
}

export default Producto;