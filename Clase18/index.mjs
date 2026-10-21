import express from 'express'
import dotenv from 'dotenv'

import pool from './conexion.bd.mjs'

dotenv.config()

console.log(process.env)

const PUERTO = process.env.PUERTO  
const app = express()

// Todo lo que sea asíncrono debería ir con un try/catch para capturar errores.
// Obtener todos los productos
app.get('/api/v1/productos', async (req, res)=>{
    const resultado = await pool.query('SELECT * FROM productos') // Me devuelve una promesa por lo que tengo que esperar.
    console.log(resultado.rows)
    res.json(resultado.rows)
})

// Obtener un producto
app.get('/api/v1/productos/:id', async (req, res)=>{
    const id = req.params.id
    const resultado = await pool.query('SELECT * FROM productos WHERE id = $1', [id]) 
    console.log(resultado.rows)
    res.json(resultado.rows)
})


app.delete('/api/v1/productos/:id', async (req, res)=>{
    const id = req.params.id
    await pool.query('DELETE FROM productos WHERE id = $1', [id])
    const resultado = await pool.query('SELECT * FROM productos') // Para mostrar cómo queda después.
    console.log(resultado.rows)
    res.json(resultado.rows)
})

app.post('/api/v1/productos/:id', async (req, res)=>{
    const body = req.body
    await pool.query('INSERT INTO productos(producto, precio) VALUES ($1, $2) ', [body.producto, body.precio]) 
    const resultado = await pool.query('SELECT * FROM productos') // Para mostrar cómo queda después.
    console.log(resultado.rows)
    res.json(resultado.rows)
})

app.listen(PUERTO)