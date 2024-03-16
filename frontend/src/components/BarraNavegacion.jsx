import "../styles/BarraNavegacion.css"
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useForm } from "react-hook-form";

function BarraNavegacion() {
  const { handleSubmit } = useForm();
  const { logout } = useAuth();
  const urlLogoTrendIA = 'https://i.imgur.com/zEewjjl.jpg';
  const CerrarSesion = handleSubmit(() => {
    logout();
  });

  return (
    <div className="contenedor_BarraNavegacion">
      <div className="Alinear_logo_titulo">
        <img width="80px" height="auto" src={urlLogoTrendIA} />
        <a href="/inicio"><h1 className=" text-2xl "><b>Trend IA</b></h1></a>
      </div>
      <input className="input_search" type="search" placeholder="Buscar" />
      <div className="Alinear_opciones">
        <Link style={{textDecoration:"none", color:"black"}} to=""><p style={{fontSize:"16px"}}>Estadisticas</p></Link>
        <Link style={{textDecoration:"none", color:"black"}} to="/categoria"><p style={{fontSize:"16px"}}>Categorias</p></Link>
        <Link style={{textDecoration:"none", color:"black"}} to=""><p style={{fontSize:"16px"}}>Historial</p></Link>
      </div>
      
      <img style={{}} width="30px" height="auto" src="/src/assets/logo_carritoCompras.png" />
      <button style={{marginRight:"20px"}} onClick={CerrarSesion}>Cerrar sesion</button>
      
    </div>
  )
}

export default BarraNavegacion
