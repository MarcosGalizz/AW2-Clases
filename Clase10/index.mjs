import express from 'express'

const PUERTO = 3000

const app = express()

app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en el puerto ${PUERTO}`)
})

// Middlewares
app.use(express.json())
// Sirve una web estática
app.use(express.static('./web'))

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    const id = req.params.id
    console.log("/")
    res.end()
})

app.get('/', (req, res)=>{
    console.log("/saludo")
    res.end()
})

app.post('/datos', (req, res)=>{
    // Asignación desestructurante
    const {nombre, apellido} = req.body
    console.log(nombre, apellido)
    res.end()
})