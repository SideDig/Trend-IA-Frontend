import axios from './axios.js'

export const obtenerProductosCarrito = (id) => axios.get(`/carrito_producto/${id}`);

export const insertarProductosCarrito = (data) => axios.post(`/carrito_producto`, data);

export const eliminarProductosCarrito = (idP) => axios.delete(`/carrito_producto/${idP}`);

export const insertarCarrito = (data) => axios.post(`/carritos`, data);

export const obtenerCarrito = (idU) => axios.get(`/carritos/${idU}`);
