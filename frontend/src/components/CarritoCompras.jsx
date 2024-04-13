import { useState, useEffect } from "react";
import { useDataContext } from '../context/dataContext';
import '../styles/CarritoCompras.css'
import { FaShoppingCart } from "react-icons/fa";

function CarritoCompras({idU} ) {

  const { productosCarrito, obtenerProductosPorCarrito, actualizarCantidadProducto, eliminarProductosPorCarrito, insertarHistorialDeCompras, iHistorialCompras,obtenerPorCarrito, Carrito, crearCarritos, iCarrito  } = useDataContext();
  const [localProductos, setLocalProductos] = useState([]);
  const [id_ca, setIdCa] = useState(null);
  const [idCP, setIdCP] = useState(null); // Usa el estado de React para almacenar idCP
  
  useEffect(() => {
    obtenerPorCarrito(idU);
  }, [idU]);
  
  useEffect(() => {
    if(Carrito.id_ca){
      setIdCP(Carrito.id_ca); // Actualiza el estado de idCP
    }
  }, [Carrito]);

  useEffect(() => {
    if (idCP) { // Agrega esta condición
      obtenerProductosPorCarrito(idCP);
    }
  }, [idCP]); // Agrega idCP como dependencia

  useEffect(() => {
    if (Array.isArray(productosCarrito)) {
      setLocalProductos(productosCarrito);
      if(productosCarrito!==undefined && productosCarrito.length > 0){
        setIdCa(productosCarrito[0].id_ca);
      }
    }
  }, [productosCarrito]);
  

  const eliminarDelCarrito = async (id_cp) => {
    await eliminarProductosPorCarrito(id_cp);
    if(idCP!=null || idCP.length > 0){
       obtenerProductosPorCarrito(idCP); 
    }else{
      console.log("pfff", idCP);
    }
  };

  // Agregar estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para manejar el clic en el carrito
  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Calcular el total
  const total = localProductos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  const handleQuantityChange = (id_cp, newQuantity) => {
    setLocalProductos(localProductos.map(producto => producto.id_cp === id_cp ? {...producto, cantidad: newQuantity} : producto));
    actualizarCantidadProducto(id_cp, newQuantity);
  };


  const FinalizarCompra = async () => {
    if(id_ca) {
      handleCloseModal();
      const data = {"id_ca": id_ca};
      await insertarHistorialDeCompras(data);
      await crearCarritos({"id_u": idU});
      obtenerPorCarrito(idU);
      setLocalProductos([]); // Vacía localProductos
    }
  }
  

  return (
    <>
      <img width="30px" height="auto" src="/src/assets/logo_carritoCompras.png" alt="Carrito" onClick={handleCartClick} />
      {isModalOpen && (
        <div className="sst">
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={handleCloseModal}><p>X</p></span>
              <h2 className="sub">Carrito de compras</h2>
              <div style={{overflowY: 'scroll',Height: '300px', padding:'20px'}}> {/* Aquí agregamos el scroll */}
                {localProductos.map((producto, index) => (
                  <div key={index} className="producto">
                    <img src={producto.imagen_portada} alt={producto.nombre}/>
                    <div className="info">
                      <h3><b>{producto.nombre}</b></h3>
                      <p>{producto.descripcion}</p>
                      <p><b>Precio:</b> {producto.precio}</p>
                      <p><b>Cantidad:</b> <input type="number" min={1} value={producto.cantidad} onChange={e => {
                        handleQuantityChange(producto.id_cp, Number(e.target.value));
                      }} /></p>
                    </div>
                    <button onClick={() => eliminarDelCarrito(producto.id_cp)} style={{color:'rgb(251, 110, 110)'}}>Eliminar</button>
                  </div>
                ))}
              </div>
              <div className="footermodal">
                <h2><b>Total: </b>${total}</h2>
                <button onClick={()=> FinalizarCompra(id_ca)} className="bg-black text-white py-1 px-3 rounded flex items-center boton" style={{height:'50px', width:'150px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <FaShoppingCart className="mr-3"/> Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CarritoCompras;
