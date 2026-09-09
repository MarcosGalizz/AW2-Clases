import express from 'express'

const PUERTO = 3000

const app = express()

app.listen(PUERTO,()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})

app.get('/', (req, res)=>{
    const usuarios = [
        {
            nombre: "Esteban",
            email: "esteban@gmail.com"
        },
        {
            nombre: "Joaquin", 
            email: "joaquin@gmail.com"
        }

    ]
    res.json(usuarios)
})

app.get('/saludo', (req, res)=>{
    res.json("Esto es un saludo en JSON")
})



// Rutas con parámetros
app.get('/:id', (req, res)=>{
    const id = Number(req.params.id)
    const usuarios = [
        {
            id: 1,
            nombre: "Esteban",
            email: "esteban@gmail.com"
        },
        {
            id: 2,
            nombre: "Joaquin", 
            email: "joaquin@gmail.com"
        }

    ]
    const usuarioFiltrado = usuarios.filter(((usuario)=>{
        return usuario.id === id
    }))
    if(usuarioFiltrado.length > 0){
        res.json(usuarioFiltrado)
    }
    else{
        //res.status(404)
        res.status(404).json({mensaje:"Usuario no encontrado."})
    }
})

app.post('/',(req, res)=>{
    const usuarios = [
        {
            nombre: "Esteban",
            email: "esteban@gmail.com"
        },
        {
            nombre: "Joaquin", 
            email: "joaquin@gmail.com"
        }

    ]
    res.json(usuarios)
})