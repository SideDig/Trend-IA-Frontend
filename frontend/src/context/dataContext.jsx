import { createContext, useState, useContext } from "react";
import { obtenerUsuarios, obtenerUsuario } from "../routes/usuarios";


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

  const ObterUsuarios = async () => {
    try {
      const response = await obtenerUsuarios();
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener las personas:", error);
    }
  };

  const obtenerUsuarioPorId = async (id) => { 
    try {
      const response = await obtenerUsuario(id);
      setUsuario(response.data);
    } catch (error) {
      console.error("Error al obtener las personas:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        ObterUsuarios,
        Usuarios,
        Usuario,
        obtenerUsuarioPorId
       
      }}
    >
      {children}
    </DataContext.Provider>
  );
};