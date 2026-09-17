import express from "express"

const logs = [{pc:160, estado:"activo"}]
const PUERTO = 3000

const app = express()
app.use(express.json())

app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en el puerto ${PUERTO}`)
})

app.get('/', (req, res)=>{
    res.end("Estamos")
})

app.get('/estado', (req, res)=>{
    res.json(logs)
})

// Crear un arreglo con un log de estados.

app.post('/estado', (req, res)=>{
    logs.push(req.body)
    res.json(logs)
})

