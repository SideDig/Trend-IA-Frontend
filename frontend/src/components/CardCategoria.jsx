
// eslint-disable-next-line react/prop-types
function CardCategoria({ nombre, img }) {
    return (
        <>
            <div className="inline-block border-2 border-green-400 group">
                <div className="relative m-[30px] border-2 border-blue-500 flex justify-center items-center">
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50 transition-opacity duration-300">
                        <span className="text-white text-xl font-bold hidden group-hover:block">{nombre}</span>
                    </div>
                    <img width={"300px"} height={"auto"} src={img} alt="Categoria" />
                </div>
            </div>
        </>
    );
}

export default CardCategoria;





