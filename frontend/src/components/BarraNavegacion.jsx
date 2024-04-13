import "../styles/BarraNavegacion.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useForm } from "react-hook-form";
import CarritoCompras from "./CarritoCompras";
import { useState } from "react";

function BarraNavegacion() {
  const { handleSubmit } = useForm();
  const { logout, user, isAuthenticated } = useAuth();
  const urlLogoTrendIA = 'https://i.imgur.com/zEewjjl.jpg';

  const CerrarSesion = handleSubmit(() => {
    logout();
  });

  console.log(user);
  // Agregar estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para manejar el clic en el carrito
  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="contenedor_BarraNavegacion">
      <div className="Alinear_logo_titulo">
        <img width="80px" height="auto" src={urlLogoTrendIA} alt="Logo" />
        <a href="/inicio"><h1 className="text-2xl"><b>Trend IA</b></h1></a>
      </div>
      <input className="input_search" type="search" placeholder="Buscar" />
      <div className="Alinear_opciones">
        <Link style={{ textDecoration: "none", color: "black" }} to="/estadisticas"><p style={{ fontSize: "16px" }}>Estadísticas</p></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/categorias"><p style={{ fontSize: "16px" }}>Categorías</p></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/historial"><p style={{ fontSize: "16px" }}>Historial</p></Link>
      </div>
      {isAuthenticated && user ? (
        <>
        <CarritoCompras  idU={user.id}/>
          <span>Hola, {user.nombre}</span>
          <button onClick={CerrarSesion}>Cerrar sesión</button>
        </>
      ) : (
        <Link to="/login">Iniciar Sesión</Link>
      )}
    </div>
  );
}


export default BarraNavegacion;
