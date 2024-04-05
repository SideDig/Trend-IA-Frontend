import { useDataContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BarraNavegacion from "../components/BarraNavegacion";
import Cards_productos from "../components/Cards_productos";

function Categoria() {
    const { idC } = useParams();
    const { obtenerCategoriaPorId, Categoria, obtenerProductosDeCategoria, Productos } = useDataContext();

    // Suponiendo que Productos es un array de productos con un campo 'ecommerce' que puede ser 'AMAZON' o 'WALMART'
    const productosCombinados = Productos.reduce((acc, producto) => {
        const key = producto.nombre.toLowerCase(); // Clave única basada en el nombre del producto en minúsculas
        if (!acc[key]) {
            acc[key] = {
                ...producto,
                precioAmazon: producto.ecommerce === 'AMAZON' ? producto.precio : 'No disponible',
                precioWalmart: producto.ecommerce === 'WALMART' ? producto.precio : 'No disponible'
            };
        } else {
            if (producto.ecommerce === 'AMAZON') {
                acc[key].precioAmazon = producto.precio;
            } else {
                acc[key].precioWalmart = producto.precio;
            }
        }
        return acc;
    }, {});

    useEffect(() => {
        obtenerCategoriaPorId(idC);
        obtenerProductosDeCategoria(idC);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return (
        <div>
            <header>
                <BarraNavegacion />
            </header>
            <div className="mx-11 my-5">
                <h1 className="text-3xl font-bold">{Categoria[1]}</h1> 
            </div>
            <div className="mx-11 my-0 py-4">
                <div className="grid grid-cols-5 gap-4">
                    {Object.values(productosCombinados).map(producto => (
                        <Cards_productos key={producto.id_p} tec={true} producto={producto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categoria;
