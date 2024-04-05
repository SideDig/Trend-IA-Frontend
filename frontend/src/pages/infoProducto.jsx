import BarraNavegacion from "../components/BarraNavegacion";

const items = [
  { label: 'Ventas', value: '000' },
  { label: 'Marca', value: '000' },
  { label: 'Fecha Lanzamiento', value: '000' },
  { label: 'Fecha Estimada', value: '2 días' }
];

function infoProducto() {
  return (
    <>
      <header>
        <BarraNavegacion />
      </header>

      <div className="flex justify-evenly mx-11 my-4 p-1">
        <div className="border-2 border-gray-500 m-3 w-[50%] flex items-center justify-center">
          <img src="https://placehold.co/500x400" />
        </div>

        <div className="flex flex-col border-2 m-3 border-gray-500 p-7 w-[50%]">
          <h2 className="text-xl font-bold">Jordan 1 Retro High OG Chicago Reimagined Lost & Found 2022 </h2>
          <span className=" font-semibold py-2">Calificacion: </span>
          <select className="w-28 border-2 border-black rounded-md p-1 " name="ecommerce">
            <option value="Walmart">Walmart</option>
            <option value="Amazon">Amazon</option>
          </select>

          <div className="flex flex-col justify-center items-center">
            <h2 className=" text-2xl font-semibold m-1">$0.00</h2>
            <span>En Stock: 20</span>
            <button className="bg-black text-white w-36 rounded-md py-1 m-2">Agregar</button>
          </div>
          <p className="font-bold">Detalles</p>

          <div className="flex py-2 flex-row gap-20">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="font-bold">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div >
            <span>A long product description is intended to give potential customers enough engaging information to encourage them to make a purchase. It typically emphasizes the features, benefits, and unique selling points of the product. Heres an example for an imaginary high-end coffee maker:</span>
          </div>
        </div>
      </div>
      <div className=" mx-11 my-4 p-1">
        <h2 className=" font-semibold text-2xl border-b-2 border-black">Prediccion de costos</h2>
      </div>
      

    </>
  )
}

export default infoProducto;
