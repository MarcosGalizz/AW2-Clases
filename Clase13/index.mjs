import express from 'express'
import rutaApiV1 from './rutas.mjs'
const PUERTO = 3000

const app = express()

app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PUERTO}`)
})
app.use(rutaApiV1)



