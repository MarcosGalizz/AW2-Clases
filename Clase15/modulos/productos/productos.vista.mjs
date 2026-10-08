

export function obtenerProductos(datos){
    datos.map((dato)=>{
        return { 
            "id": dato.id,  
            "titulo": dato.titulo, 
            "genero": dato.genero,   
            "plataforma": dato.plataforma, 
            }
    })
}

//export function obtenerProducto