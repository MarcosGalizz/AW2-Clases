import express from 'express'
import dotenv from 'dotenv'
import path from 'node:path'
import cookieParser from 'cookie-parser'
import bcrypt from "bcryptjs";
import pool from './conexion.bd.mjs';
import {nanoid} from 'nanoid'
import jwt from 'jsonwebtoken'

dotenv.config()
const PUERTO = 3000
const app = express()

const CLAVE_PRIVADA = process.env.CLAVE_PRIVADA
app.listen(PUERTO)
app.use(cookieParser('palabra-clave'))
app.use(express.urlencoded({extended:true}))

app.post('/autenticacion', async (req,res)=>{
    console.log(req.body)
    // Asignación desestructurante
    const {usuario, pass} = req.body // Saco los datos del usuario y contraseña que vienen del body
    // Chequear los datos
    const resultado = await pool.query('SELECT * FROM usuarios WHERE username = $1', [usuario])
    // Comprobamos si hay registro o no
    let verificado = await bcrypt.compare(pass, resultado.rows[0].password_hash) // Devuelve V o F
    if(verificado){
        // Creamos la cookie
        // Guardar en la tabla el sesionId
        jwt.sign({ usuario: usuario, rol: 1 }, clavePrivada, {expiresIn: '1h'}, function(err, token) {// Le puedo poner el usuario, el rol y la duración del token para que caduque en 1 hora.
            
            if(error)return res.redirect('login?errorjwt')
            console.log(token);
            //const sesionId = nanoid(10)
            res.cookie('token',token,{
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                signed: true,
                maxAge: 1000 * 60 * 60 * 24
            })
            return res.redirect('/admin')
        });
            
    }
    // El redirect viene con un status de 302
    res.redirect('/login?usuarioincorrecto')

})
app.post('/registrar', async (req,res)=>{
    console.log(req.body)
    // Asignación desestructurante
    const {usuario, pass} = req.body // Saco los datos del usuario y contraseña que vienen del body
    try{
        // Insertamos en tabla/BD
        const salt = await bcrypt.genSalt(10);
        const claveHasheada = await bcrypt.hash(pass, salt);
        console.log(claveHasheada)
        await pool.query('INSERT INTO usuarios(username, password_hash) VALUES ($1, $2)', [usuario, claveHasheada])
        
        res.redirect('/login?usuarioregistrado')
    }catch(error){
        // El redirect viene con un status de 302
        res.redirect('/login?errorenlainsercion')
    }
})

// Estáticos
function verificarCookie(req, res, next){
    console.log(req.signedCookies)
    const token = req.signedCookies.token
    jwt.verify(token, CLAVE_PRIVADA, function(err, decoded) {
        if(err)return res.redirect('login?errorjwt')
        next()
    });
    // Cambio esto para que me deje ingresar a administración
    if(req.signedCookies.sesionId){
        return next()
    }
    res.redirect('/login?autorizado=false')
}


app.use('/admin', verificarCookie, express.static(path.resolve('./front')))
app.use('/login', express.static(path.resolve('./login')))