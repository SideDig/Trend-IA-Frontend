import { createContext, useState, useContext } from "react";
import { obtenerUsuarios, obtenerUsuario, editarSuscripcionUsuario } from "../routes/usuarios";
import { ObtenerCategorias, ObtenerCategoria } from "../routes/categorias";
import { obtenerProductos, obtenerProductosPorCategoria, obtenerProductosTendencia, obtenerProductosPresupuesto, obtenerPredicionProduct } from "../routes/productos";
import { obtenerProductosCarrito, insertarProductosCarrito, eliminarProductosCarrito, insertarCarrito, obtenerCarrito} from "../routes/carrito";
import { insertarHistorialCompras, eliminarHistorialCompra, obtenerHistorialCompra, obtenerHistorialCompras } from "../routes/historial_compras";

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
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [iProductosCarrito, setInsertarProductosCarrito] = useState([]);
  const [eProductosCarrito, setEliminarProductosCarrito] = useState([]);
  const [HistorialCompras, setHistorialCompras] = useState([]);
  const [iHistorialCompras, setInsertarHistorialCompras] = useState([]);
  const [Carrito, setCarrito] = useState([]);
  const [iCarrito, setInsertarCarrito] = useState([]);
  const [EditUsuario, setEditUsuario] = useState([]);


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

  const editUsuarioSuscripcion = async (idU, nuevaSuscripcion) => {
    try {
      const response = await editarSuscripcionUsuario(idU, nuevaSuscripcion);
      setEditUsuario(response.data.usuario);
    } catch (error) {
      console.error("Error al Editar la suscripción:", error);
    }
  }
  

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

  const obtenerProdPredicciones = async (idP) => {
    try {
      const response = await obtenerPredicionProduct(idP);
      setPorductoPrediccion(response.data.productos);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
    }
  }

  const obtenerProductosPorCarrito = async (idCP) => {
    try {
      const response = await obtenerProductosCarrito(idCP);
      if (response) {
        setProductosCarrito(response.data.productos);
      } else {
        console.error("No se recibió ninguna respuesta de la API");
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
    }
  }

  const insertarProductosPorCarrito = async (data) => {
    try {
      const response = await insertarProductosCarrito(data);
      setInsertarProductosCarrito(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error al insertar los productos:", error);
      return null;
    }
  }

  const eliminarProductosPorCarrito = async (idCP) => {
    try {
      const response = await eliminarProductosCarrito(idCP);
      if (response) {
        setEliminarProductosCarrito(response.data.productos);
      } else {
        console.error("No se recibió ninguna respuesta de la API");
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return null;
    }
  }

  const insertarHistorialDeCompras = async (data) => {
    try {
      const response = await insertarHistorialCompras(data);
      setInsertarHistorialCompras(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error al insertar el Historial de Compras:", error);
      return null;
    }
  }

  const obtenerHistorialDeCompras = async (idU) => {
    try {
      const response = await obtenerHistorialCompras(idU);
      if (response) {
        setHistorialCompras(response.data);
      } else {
        console.error("No se recibió ninguna respuesta de la API");
      }
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
      return null;
    }
  }

  const crearCarritos = async (data) => {
    try {
      const response = await insertarCarrito(data);
      setInsertarCarrito(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error al insertar los productos:", error);
      return null;
    }
  }

  const obtenerPorCarrito = async (idU) => {
    try {
      const response = await obtenerCarrito(idU);
      if (response) {
        setCarrito(response.data);
      } else {
        console.error("No se recibió ninguna respuesta de la API");
      }
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
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
        editUsuarioSuscripcion,
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
        PorductoPrediccion,
        obtenerProdPredicciones,
        obtenerProductosPorCarrito,
        productosCarrito,
        insertarProductosPorCarrito,
        iProductosCarrito,
        eliminarProductosPorCarrito,
        eProductosCarrito,
        insertarHistorialDeCompras,
        iHistorialCompras,
        obtenerHistorialDeCompras,
        HistorialCompras,
        eliminarHistorialCompra,
        obtenerHistorialCompra,
        crearCarritos,
        iCarrito,
        obtenerPorCarrito,
        EditUsuario,
        Carrito
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
