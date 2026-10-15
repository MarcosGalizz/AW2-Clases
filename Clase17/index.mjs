import express from 'express'
import dotenv from 'dotenv'

import pool from './conexion.bd.mjs'

dotenv.config()

console.log(process.env)

const PUERTO = process.env.PUERTO  
const app = express()

// Obtener todos los productos
app.get('/api/v1/productos', async (req, res)=>{
    const resultado = await pool.query('SELECT * FROM productos') // Me devuelve una promesa
    console.log(resultado.rows)
    res.json(resultado.rows)
})
app.listen(PUERTO)