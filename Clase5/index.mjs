async function obetenerDatos() {
    try{
        const respuesta = await fetch("https://api.escuelajs.co/api/v1/users")
        const datos = await respuesta.json() // Esto es un arreglo de objetos.
        
    }
    catch(error){
        console.log(error)
    }

}
