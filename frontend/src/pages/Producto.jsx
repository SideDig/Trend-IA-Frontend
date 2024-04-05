
import BarraNavegacion from "../components/BarraNavegacion";
import { useParams } from "react-router-dom";

function Producto() {
    const { idP } = useParams();
    console.log("aaaaaaaaaa: ", idP);

  return (
    <>
      <header>
        <BarraNavegacion />
      </header>
    </>
  )
}

export default Producto