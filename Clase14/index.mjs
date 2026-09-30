import express from 'express'
const PUERTO = 3000
const app = express()
app.listen(PUERTO)
app.get('/', (req, res)=>{
    console.log("Hola")
    res.end("Chau")
})