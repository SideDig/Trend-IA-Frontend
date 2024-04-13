import axios from './axios.js'

export const obtenerHistorialCompra = (id) => axios.get(`/historial_compras/${id}`);

export const insertarHistorialCompras = (data) => axios.post(`/historial_compras`, data);

export const eliminarHistorialCompra = (id) => axios.delete(`/historial_compras/${id}`);

export const obtenerHistorialCompras = (idU) => axios.get(`/historial_compras/${idU}`);
