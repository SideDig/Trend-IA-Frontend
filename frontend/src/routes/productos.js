import axios from './axios.js'

export const obtenerProductos = (idP) => axios.get(`/productos/${idP}`)