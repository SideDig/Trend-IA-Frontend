import axios from './axios.js'

export const obtenerProductosPresupuesto = (data) => axios.post(`/productos/pre`, data);

export const obtenerProductos = () => axios.get('/productos')

<<<<<<< HEAD
export const obtenerProductosPorCategoria = (idC) => axios.get(`/productos?nombre_categoria=${idC}`);
=======
export const obtenerProductosPorCategoria = (idC) => axios.get(`/productos?id_c=${idC}`);


export const obtenerProductosTendencia = () => axios.get('/ventas')
>>>>>>> 85eaa69c61956cbe9c748f6d706d7dc545aa3d46
