import axios from './axios.js'

export const obtenerProductos = () => axios.get('/productos')

export const obtenerProductosPorCategoria = (idC) => axios.get(`/productos?id_c=${idC}`);
