import productos from "../../datos/productos.mjs";

// Vamos a hacer un CRUD/ABM

export function obtenerProductos(){
    return productos
}

export function obtenerProducto(id){
    // Filtramos
    const producto = productos.filter((producto)=>{
        return producto.id === id
    } )
    return producto
}
