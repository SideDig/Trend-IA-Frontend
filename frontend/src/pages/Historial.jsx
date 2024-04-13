import { useState, useEffect } from 'react';
import '../styles/Historial.css';
import BarraNavegacion from '../components/BarraNavegacion';
import { useDataContext } from '../context/dataContext';
import { useAuth } from "../context/authContext";

const Historial = () => {
  const { HistorialCompras, obtenerHistorialDeCompras } = useDataContext();
  const { user } = useAuth();
  const idU=user.id;

  useEffect(() => {
    obtenerHistorialDeCompras(idU);
  }, [])

  console.log("ttttttttttttttttttttttttttt");
  console.log(HistorialCompras.historial_compras);
  const [isOpen, setIsOpen] = useState({}); // Cambiamos isOpen a un objeto

  const toggleOpen = (clave) => { // Recibimos la clave del carrito
    setIsOpen(prevState => ({...prevState, [clave]: !prevState[clave]})); // Cambiamos el estado del carrito especificado
  }

  return (
    <>
      <header>
        <BarraNavegacion />
      </header>
      <div className="lista-historias">
        {HistorialCompras.historial_compras && Object.keys(HistorialCompras.historial_compras).map((clave) => {
          // Calculamos el costo total y la cantidad total de productos para este carrito
          const costoTotal = HistorialCompras.historial_compras[clave].reduce((total, compra) => total + compra.precio * compra.cantidad_stock, 0);
          const cantidadTotal = HistorialCompras.historial_compras[clave].length;

          return (
            <div className="historia" key={clave}>
              <div className="top">
                <div className="rg">
                  <h3>Refrencia No.{clave}</h3>
                  <div>
                    <h4>Costo: ${costoTotal}</h4> {/* Mostramos el costo total */}
                    <h4>Cantidad: {cantidadTotal}</h4> {/* Mostramos la cantidad total de productos */}
                  </div>
                </div>
                <div className="lf">
                  <button onClick={() => toggleOpen(clave)}>V</button> {/* Pasamos la clave del carrito al evento onClick */}
                </div>
              </div>
              {isOpen[clave] && ( // Usamos la clave del carrito para controlar su visibilidad
                <div className="bot">
                  <div className="detalles">
                    <h4>Imagen</h4>
                    <h4>Titulo</h4>
                    <h4>Tienda</h4>
                    <h4>Cantidad</h4>
                    <h4>Precio</h4>
                    <h4>Total</h4>
                  </div>
                  <div className="lista-productos">
                    {HistorialCompras.historial_compras[clave].map((compra, index) => (
                      <div className="producto" key={index}>
                        <img src={compra.imagen_portada} alt="" />
                        <h4>{compra.nombre}</h4>
                        <h4>{compra.ecommerce}</h4>
                        <h4>{compra.cantidad_stock}</h4>
                        <h4>${compra.precio}</h4>
                        <h4>${compra.precio * compra.cantidad_stock}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Historial;
