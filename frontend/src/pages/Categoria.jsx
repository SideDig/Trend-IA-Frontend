import { useDataContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BarraNavegacion from "../components/BarraNavegacion";
function Categoria() {
    const { idC } = useParams();
    const { obtenerCategoriaPorId, Categoria } = useDataContext();

    useEffect(() => {
        obtenerCategoriaPorId(idC);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <header>
                <BarraNavegacion />
            </header>
            <div>
                <h1>{Categoria[1]}</h1>
            </div>
        </div>
    )
}

export default Categoria
