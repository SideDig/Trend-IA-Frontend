import { createContext, useState, useContext } from "react";
import { obtenerUsuarios, obtenerUsuario } from "../routes/usuarios";
import { ObtenerCategorias, ObtenerCategoria } from "../routes/categorias";

const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [Usuarios, setUsuarios] = useState([]);
  const [Usuario, setUsuario] = useState([]);
  const [Categorias, setCategorias] = useState([]);
  const [Categoria, setCategoria] = useState([]);

  const ObtenerUsuarios = async () => {
    try {
      const response = await obtenerUsuarios();
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener las personas:", error);
    }
  };

  const obtenerUsuarioPorId = async () => { 
    try {
      const response = await obtenerUsuario();
      setUsuario(response.data);
    } catch (error) {
      console.error("Error al obtener las personas:", error);
    }
  };

  const obtenerTodasCategorias = async () => {
    try {
      const response = await ObtenerCategorias();
      setCategorias(response.data.categorias);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const obtenerCategoriaPorId = async (idC) => {
    try {
      const response = await ObtenerCategoria(idC);
      setCategoria(response.data.categoria);
    } catch (error) {
      console.error("Error al obtener la categoría:", error);
      return null;
    }
  };

  return (
    <DataContext.Provider
      value={{
        ObtenerUsuarios,
        Usuarios,
        Usuario,
        obtenerUsuarioPorId,
        obtenerTodasCategorias,
        obtenerCategoriaPorId,
        Categorias,
        Categoria
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
