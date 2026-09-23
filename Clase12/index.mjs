import express from 'express'
import { comprobarClave } from './middleware.mjs'
const logs = [{pc:187, estado:"activo"}]
const PUERTO = 3000

const app = express()
app.use(express.json())
app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PUERTO}`)
})

app.get('/estado', (req,res)=>{
    res.json(logs)
})

app.post('/estado', comprobarClave, (req, res)=>{
    logs.push(req.body)
    res.status(201).json(logs)
})