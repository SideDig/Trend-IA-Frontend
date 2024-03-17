import axios from './axios.js'

export const ObtenerCategorias = () => axios.get('/categorias')

export const ObtenerCategoria = (idC) => axios.get(`/categorias/${idC}`)