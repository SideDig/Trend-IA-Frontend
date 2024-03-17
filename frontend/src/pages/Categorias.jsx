import { useEffect } from "react";
import BarraNavegacion from "../components/BarraNavegacion";
import Cards_productos from "../components/Cards_productos";
import { useDataContext } from "../context/dataContext";

function Categorias() {
  const { obtenerTodasCategorias, Categorias } = useDataContext();

  useEffect(() => {
    obtenerTodasCategorias();
  }, [obtenerTodasCategorias]);

  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      {Categorias.map((categoria, index) => (
        <div key={index}>
          <div className="border-b-2 border-black mx-8 my-0 py-4">
            <h1 className="text-2xl">{categoria[1]}</h1>
          </div>

          <div className="mx-11 my-0 py-4 ">
            <div className="grid grid-cols-5 gap-4 ">
              {Categorias.map((producto, index) => (
                <Cards_productos key={index} producto={producto} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Categorias;
