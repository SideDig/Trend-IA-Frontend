import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/dataContext";
import { useAuth } from "../context/authContext";

function Modal() {
  const { obtenerTodasCategorias, Categorias } = useDataContext();
  const { user } = useAuth();

  const [categoria, setCategoria] = useState(""); // Estado para mantener la opción seleccionada en categoría
  const [tienda, setTienda] = useState(""); // Estado para mantener la opción seleccionada en tienda
  const [presupuesto, setPresupuesto] = useState(""); // Estado para mantener la opción seleccionada en tienda


  useEffect(() => {
    obtenerTodasCategorias();
  }, []);


  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg p-4">
        <h2 className="text-center text-3xl mb-4">Presupuesto</h2>
        {
        user && user.suscripcion === 'FREE' && (
          <span style={{ fontSize: '13px', textAlign: 'center' }}>Tienes 5 presupuestos, necesitas Premium para tener presupuestos ilimitados</span>

        )
        }
        <form className="border-2 border-black p-4 flex flex-col rounded-lg">
          <select
            name="categoria"
            value={categoria} // Usa el estado categoria como valor
            onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado cuando cambie la selección
            className="mb-2 border border-black rounded px-3 py-2 appearance-none bg-no-repeat bg-white bg-right"
          >
            <option value="">Selecciona tu categoría</option>
            {Categorias && Categorias.map((categoria) => (
              <option key={categoria[0]} value={categoria[0]}>{categoria[1]}</option>
            ))}
          </select>

          <input
            type="number" min={1000}
            placeholder="Ingresa tu presupuesto"
            value={presupuesto} // Usa el estado presupuesto como valor
            onChange={(e) => setPresupuesto(e.target.value)} // Actualiza el estado cuando cambie el valor
            className="mb-2 border border-black rounded px-3 py-2"
          />
          <select
            name="tienda"
            value={tienda} // Usa el estado tienda como valor
            onChange={(e) => setTienda(e.target.value)} // Actualiza el estado cuando cambie la selección
            className="mb-2 border border-black rounded px-3 py-2 appearance-none bg-no-repeat bg-white bg-right"
          >
            <option value="">Selecciona tu tienda</option>
            <option value="WALMART">WALMART</option>
            <option value="AMAZON">AMAZON</option>
          </select>
          <div className="flex justify-center">
            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <Link className="m-[30px]" to={`/presupuestos/${categoria}/${tienda}/${presupuesto}`}>
                Enviar
              </Link>
            </button>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
