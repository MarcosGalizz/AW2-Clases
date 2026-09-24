import {Router} from 'express'

const rutaApiV1 = new Router()
// Creamos 2 endpoints
app.get('/api/v1/camisetas', (req, res)=>{
    res.status(200).json([{
        "id": 1,
        "nombre": "Boca",
        "precio": 120000
    }])
})
app.get('/api/v1/camisetas/:id', (req, res)=>{
    const id = req.params.id
    res.status(200).json([{
        "id": 1,
        "nombre": "Boca",
        "precio": 120000
    }])
})

export default rutaApiV1 // Exportación no nombrada