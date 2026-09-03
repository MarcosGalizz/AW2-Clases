import express from 'express'

const PUERTO = 3000
const app = express()

// Configuración de las rutas y los verbos.
app.get('/', (req, res)=>{ // Se ejecuta cuando se hace un get a la raíz.
    // res.end("Hola Express")
    // res.send("Hola con '.send'") 
    res.send({mensaje:"Hola"}) // Le mando un objeto y lo toma como si fuera un .json. Si el texto no tiene comillas, lo convierte en JSON.
    // Fijarse el tipo de contenido con 'Network -> recurso -> Headers -> Response Headers Raw'
})





app.listen(PUERTO, ()=>{
    console.log(`Servidor express corriendo en el puerto: ${PUERTO}`)
})