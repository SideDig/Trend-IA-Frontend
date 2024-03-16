import axios from "./axios.js";

export const obtenerUsuarios = () => axios.get('/usuarios')

export const obtenerUsuario = (id) => axios.get(`/usuarios/${id}`)