import { FaEye, FaShoppingCart } from "react-icons/fa";

function Cards_productos() {
  return (
    <>
      <div className="max-w-72 rounded overflow-hidden shadow-lg p-1">
        <div className="flex items-center justify-center">
          <img className="h-40" src="src/assets/img/productoEjemplo.jpg" alt="Producto ejemplo" />
        </div>
        <div className="px-1 py-3">
          <div className="font-bold text-base mb-2">Jordan 1 Retro High OG Chicago Reimagined Lost & Found 2022</div>
          <p>Walmart: $0000</p>
          <p>Amazon: $0000</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button className="border-solid border-2 border-black py-1 px-3 rounded flex items-center">
          <FaEye className="mr-1"/>Detalles
          </button>
          <button className="border-solid border-2 border-black bg-black text-white py-1 px-4 rounded flex items-center">
           <FaShoppingCart className="mr-1"/> Añadir
          </button>
        </div>
      </div>

    </>
  )
}

export default Cards_productos
