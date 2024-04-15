import axios from "./axios.js";

export const obtenerUsuarios = () => axios.get('/usuarios')

export const obtenerUsuario = (idU) => axios.get(`/usuarios/${idU}`)

export const editarSuscripcionUsuario = (idU, nuevaSuscripcion) => {
    return axios.put(`/usuarios/${idU}`, {
      suscripcion: nuevaSuscripcion  
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }