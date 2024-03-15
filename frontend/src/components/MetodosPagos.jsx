

function MetodosPagos() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg p-4">
        <h2 className="text-center text-3xl mb-4">Adquirir suscripcion</h2>
        
        <h1>Nombre del propietario de la tarjeta</h1>
          <input
            className="formButton"
            type="text"
            placeholder="Ingresa tu nombre"
          />
          <input
            className="formButton"
            type="number"
            placeholder="Numero de la tarjeta"
          />
            <input
            className="formButton"
            type="number"
            placeholder="M M / Y Y Y Y"
          />
            <input
            className="formButton"
            type="text"
            placeholder="_ _ _"
          />
          <h1>Todos los productos incluyen IVA si corresponde</h1>
          <div className="buttonsRegister">
            <button type="submit" className="botonRegister">
              Cancelar
            </button>
            <div className="buttonsRegister">
            <button type="submit" className="botonRegister">
              Comprar
            </button>
         </div>
    </div>
        
      </div>
    </div>
  )
}

export default MetodosPagos