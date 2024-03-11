import { useState } from "react";

function Modal() {
  const [categoria, setCategoria] = useState(""); // Estado para mantener la opción seleccionada en categoría
  const [tienda, setTienda] = useState(""); // Estado para mantener la opción seleccionada en tienda

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg p-4">
        <h2 className="text-center text-3xl mb-4">Presupuesto</h2>
        <form className="border-2 border-black p-4 flex flex-col rounded-lg">
          <select
            name="categoria"
            value={categoria} // Usa el estado categoria como valor
            onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado cuando cambie la selección
            className="mb-2 border border-black rounded px-3 py-2 appearance-none bg-no-repeat bg-white bg-right"
          >
            <option value="">Selecciona tu categoría</option>
            <option value="Computadoras">Computadoras</option>
            <option value="Teléfono">Teléfono</option>
          </select>
          <input
            type="text"
            placeholder="Ingresa tu presupuesto"
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
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
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
