export {comprobarClave}
const clave = "135"
const comprobarClave = (req, res, next)=>{
    if(req.body.clave === clave){
        next()
        // No hace falta poner 'return'
    }
        console.log("Clave incorrecta")
        res.status(403).json({"Error":"Clave incorrecta"})
    
}