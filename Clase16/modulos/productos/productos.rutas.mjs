import { Router } from "express";
import * as controlador from './productos.controlador.mjs'
import { URL_BASE } from "../direcciones/direcciones.mjs";

const rutasModuloProductos = new Router()

rutasModuloProductos.get(`${URL_BASE}/productos`, controlador.obtenerProductos)

rutasModuloProductos.get(`${URL_BASE}/productos/:id_producto`, controlador.obtenerProducto)

export default rutasModuloProductos
