// Lo importo así para que no colisionen los nombres de las funciones.
import * as modelo from './productos.modelo.mjs'

export function obtenerProductos(req, res){
    const productos = modelo.obtenerProductos()
    // Aca incorporariamos el modelo de la vista.
    res.json(productos)
}

export function obtenerProducto(req, res){
    const id = Number(req.params.id)
    const producto = modelo.obtenerProducto(id)
    // Aca incorporariamos el modelo de la vista.
    res.json(producto)
}