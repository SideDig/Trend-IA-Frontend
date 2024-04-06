import axios from './axios.js'

export const obtenerProductosPresupuesto = (data) => axios.post(`/productos/pre`, data);

export const obtenerProductos = () => axios.get('/productos')

export const obtenerProductosPorCategoria = (idC) => axios.get(`/productos?nombre_categoria=${idC}`);

export const obtenerProductosTendencia = () => axios.get('/ventas')

export const obtenerPredicionProduct = (idPP) => axios.get(`/productos/${idPP}/predict`)
