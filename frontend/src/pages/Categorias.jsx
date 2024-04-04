import { useEffect } from "react";
import BarraNavegacion from "../components/BarraNavegacion";
import CardCategoria from "../components/CardCategoria";
import { useDataContext } from "../context/dataContext";
import { Link } from "react-router-dom";

function Categorias() {
  const { obtenerTodasCategorias, Categorias } = useDataContext();

  useEffect(() => {
    obtenerTodasCategorias();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <BarraNavegacion />
      </header>
      <div className="flex flex-wrap justify-center">
        {Categorias.map(categoria  => (
          <Link className="m-[30px]" to={`/categorias/${categoria[0]}`} key={categoria[0]}>
           <CardCategoria nombre={categoria[1]} img={categoria[3]}  />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categorias;
