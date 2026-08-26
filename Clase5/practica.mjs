const numeros = [1, 2, 3, 4, 5, 6]
// map: para recorrer completo el arreglo y hacer otra cosa. Lo hace con callbacks.
const recorrer = ()=> {

}
//numeros.map(recorrer) // Esto es un callback. 'recorrer' se ejecuta 6 veces por la cantidad de elementos que tiene el array.
// 'map' me devuelve un nuevo arreglo.
// const nuevoArreglo = numeros.map((numero)=>{
//     console.log(numero)
//     return numero + 2
// })
// console.log(nuevoArreglo)
const productos = [
    {
        nombre: 'pantalon',
        precio:  100
    },
    {
        nombre: 'remera',
        precio:  50
    }
]
const productosConInteres = productos.map((producto)=>{
    const productoCambiado = {
        nombre: producto.nombre,
        precio: Math.round(producto.precio * 1.1,0) // Queda con una coma flotante pero lo redondeo con 'Math'.""
    }
    return productoCambiado
})
console.log(productosConInteres)

