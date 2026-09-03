import http from "node:http" // Importamos el módulo HTTP

console.log("Inicio")
const servidor = http.createServer((peticion, respuesta) => {
    // console.log(peticion)
    // console.log("Entra petición")
    console.log(peticion.url, peticion.method)
    if (peticion.url === "/" && peticion.method === "GET") {
        return respuesta.end("Estamos en la raiz")
    }
    if (peticion.url === "/saludo" && peticion.method === "GET") {
        return respuesta.end("Hola que tal")// Última línea    
    }
    if (peticion.url === "/saludo" && peticion.method === "POST") {
        return respuesta.end("Hola que tal")// Última línea    
    }// La misma ruta pero con distinto método.

    respuesta.statusCode = 404 // Propiedad
    return respuesta.end("Página no encontrada") // Método
})
// Abrimos un server y lo ponemos a escuchar. Se ejecuta solo una vez.
servidor.listen(3000, () => {
    console.log("Servidor arrancado")
})