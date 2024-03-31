import axios from "./axios.js";

export const obtenerUsuarios = () => axios.get('/usuarios')

export const obtenerUsuario = (idU) => axios.get(`/usuarios/${idU}`)

