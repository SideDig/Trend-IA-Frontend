import { createContext, useState, useContext } from "react";
import { obtenerUsuarios, obtenerUsuario } from "../routes/usuarios";
import { ObtenerCategorias, ObtenerCategoria } from "../routes/categorias";
import { obtenerProductos, obtenerProductosPorCategoria, obtenerProductosTendencia, obtenerProductosPresupuesto, obtenerPredicionProduct } from "../routes/productos";

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
  const [Productos, setProductos] = useState([]);
  const [ProductosTendencia, setProductosTendencia] = useState([]);
  const [ProductosPresupuesto, setProductosPresupuesto] = useState([]);
  const [PorductoPrediccion, setPorductoPrediccion ] = useState([]);


  const ObtenerUsuarios = async () => {
    try {
      const response = await obtenerUsuarios();
      setUsuarios(response.data.usuarios);
    } catch (error) {
      console.error("Error al obtener las personas:", error);
    }
  };

  const obtenerUsuarioPorId = async (idU) => {
    try {
      const response = await obtenerUsuario(idU);
      setUsuario(response.data.usuario);
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

  const obtenerlosProductos = async () => {
    try {
      const response = await obtenerProductos();
      setProductos(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
    }
  }

  const obtenerProductosDeCategoria = async (idC) => {
    try {
      const response = await obtenerProductosPorCategoria(idC);
      setProductos(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los productos de la categoría:", error);
    }
  };

  const obtenerlosProductosPorTendencia = async () => {
    try {
      const response = await obtenerProductosTendencia();
      setProductosTendencia(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
    }
  }

  const obtenerlosProductosPorPresupuesto = async (data) => {
    try {
      const response = await obtenerProductosPresupuesto(data);
      setProductosPresupuesto(response.data.productos);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
    }
  }

  const obtenerProdPredicciones = async (idPP) => {
    try {
      const response = await obtenerPredicionProduct();
      setPorductoPrediccion(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
      
    }
  }

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
        Categoria,
        obtenerlosProductos,
        Productos,
        obtenerProductosDeCategoria,
        obtenerlosProductosPorTendencia,
        ProductosTendencia,
        obtenerlosProductosPorPresupuesto,
        ProductosPresupuesto,
        PorductoPrediccion
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
