// Lo importo así para que no colisionen los nombres de las funciones.
import * as modelo from './productos.modelo.mjs' // Tendríamos que cambiar esto a 'Servicio'
import * as vista from './productos.vista.mjs'

export function obtenerProductos(req, res){
    const productos = modelo.obtenerProductos()
    // Aca incorporariamos el modelo de la vista.
    //const vista = vista.obtenerProductos(productos)
    res.json(productos)
}

export function obtenerProducto(req, res){
    const id = Number(req.params.id_producto)
    const producto = modelo.obtenerProducto(id)
    // Aca incorporariamos el modelo de la vista.
    //const vista = vista.obtenerProductos(producto)
    res.json(producto)
    // Poner caso del 404
}