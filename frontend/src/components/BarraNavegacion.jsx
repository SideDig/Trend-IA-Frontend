import "../styles/BarraNavegacion.css"
import { Link } from "react-router-dom";
function BarraNavegacion() {
  const urlLogoTrendIA = 'https://i.imgur.com/zEewjjl.jpg';
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
      <img style={{marginRight:"20px"}} width="30px" height="auto" src="/src/assets/logo_carritoCompras.png" />
    </div>
  )
}

export default BarraNavegacion
