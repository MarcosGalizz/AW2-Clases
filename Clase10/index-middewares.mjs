import express from 'express'

const PUERTO = 3000

const app = express()

app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en el puerto ${PUERTO}`)
})

// Middlewares

const mid1 = (req, res, next)=>{
    console.log("Se ejecutó el middleware 1")
    // Cuando realizo una petición, se ejecuta esto primero.
    next()
}
const mid2 = (req, res, next)=>{
    console.log("Se ejecutó el middleware 2")
    // Cuando realizo una petición, se ejecuta esto después del '1'.
    // Actúa como un stack. FIFO.
    next()
}


// Este se ejecuta en todo el recorrido.
app.use('/saludo',mid1)

app.get('/', (req, res)=>{
    const id = req.params.id
    console.log("/")
    res.end()
})

app.get('/', (req, res)=>{
    console.log("/saludo")
    res.end()
})

app.post('/', (req, res)=>{
    
})