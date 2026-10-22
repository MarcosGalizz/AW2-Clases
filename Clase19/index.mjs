import express from 'express'
import dotenv from 'dotenv'

import path from 'path'
import multer from 'multer'

import pool from './conexion.bd.mjs'

dotenv.config()

const PUERTO = process.env.PUERTO || 3000
const subirArchivos = multer({
    dest: path.resolve('archivos')
}).single('archivo')
// subirArchivos.single('archivo') // Es el nombre que le doy al input en el html
const app = express()

app.post('/subir', (req, res)=>{
    subirArchivos(req, res, async (error)=>{
        if(error){
            // Si la imagen no se sube
            return res.status(500).json({mensaje: 'No se pudo subir la imagen'})
        }
        try{// La imagen 
            const resultado = await pool.query('INSERT INTO productos(producto, precio, imagen) VALUES ($1, $2, $3)', [req.body.producto, req.body.precio, req.file.filename])
        }
        catch(error){
            // Hay que borrar la imagen si hubo un problema en la BD y responde con res.status...
            console.log(error)
        }
        res.json({mensaje: 'Datos cargados'})
    })
})


app.use(express.static(path.resolve('publica')))
app.use('archivos',express.static(path.resolve('archivos')))

app.listen(PUERTO)