import "../styles/BarraNavegacion.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useForm } from "react-hook-form";
import CarritoCompras from "./CarritoCompras";
import { useState, useEffect } from "react";
import { useDataContext } from "../context/dataContext";
import Cards_productos from "./Cards_productos";

function BarraNavegacion() {
  const { handleSubmit } = useForm();
  const { logout, user, isAuthenticated } = useAuth();
  const urlLogoTrendIA = 'https://i.imgur.com/zEewjjl.jpg';
  const { Productos, obtenerlosProductos } = useDataContext();
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    obtenerlosProductos();
  }, []);

  const handleBusqueda = (e) => {
    const searchText = e.target.value;
    setBusqueda(searchText);

    // Filtrar productos solo cuando hay texto de búsqueda
    if (searchText.trim() !== "") {
      const productosFiltrados = Productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchText.toLowerCase())
      ).slice(0, 5); // Limitar a 5 productos
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados([]); // Vaciar la lista de productos filtrados si no hay texto de búsqueda
    }
  };

  const CerrarSesion = handleSubmit(() => {
    logout();
  });

  return (
    <>
      <div className="contenedor_BarraNavegacion">
        <div className="Alinear_logo_titulo">
          <img width="80px" height="auto" src={urlLogoTrendIA} alt="Logo" />
          <a href="/inicio"><h1 className="text-2xl"><b>Trend IA</b></h1></a>
        </div>
        <input
          className="input_search"
          type="search"
          placeholder="Buscar"
          value={busqueda}
          onChange={handleBusqueda}
        />
        <div className="Alinear_opciones">
          <Link style={{ textDecoration: "none", color: "black" }} to="/estadisticas"><p style={{ fontSize: "16px" }}>Estadísticas</p></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/categorias"><p style={{ fontSize: "16px" }}>Categorías</p></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/historial"><p style={{ fontSize: "16px" }}>Historial</p></Link>
          {user && user.suscripcion === 'FREE' && (
            <Link style={{ textDecoration: "none", color: "black" }} to="/suscripciones">
              <p style={{ fontSize: "16px" }}>Suscripciones</p>
            </Link>
          )}
        </div>
        {isAuthenticated && user ? (
          <>
            <CarritoCompras idU={user.id} />
            <span>Hola, {user.nombre}</span>
            <button onClick={CerrarSesion}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </div>
      {busqueda.trim() !== "" && (
        <div className="prod-bus">
          {productosFiltrados.map((producto) => (
            <Cards_productos key={producto.id_p} producto={producto} tec={false} />
          ))}
        </div>
      )}
    </>
  );
}

export default BarraNavegacion;