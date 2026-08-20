
import fsp from 'node:fs/promises';
import path from 'node:path';

const ruta = path.join("./usuario.json")
let usuario = '' // Así respeta el 'scope' o contexto de ejecución.
try{
    usuario = await fsp.readFile(ruta, "utf-8") // Esto es una cadena de texto.
}
catch(error){
    console.log(error)
}
const objetoUsuario = JSON.parse(usuario)
console.log(objetoUsuario.nombre)

// Escribir archivo

try{
    const ruta = path.join("./saludo.txt")
    await fsp.writeFile(ruta, "\nEscribiendo con fsp, ahora con append.", {
        encoding: 'utf-8', 
        flag: 'a'
    }) // Estas son las opciones de objeto para escribir de diferentes maneras.
}
catch(error){
    console.log(error)
}