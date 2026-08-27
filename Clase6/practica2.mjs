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
// Uso de .filter()
const precioProductoMenorCien = productos.filter((producto)=> Number(producto.precio) < 100) // En esta caso no hace poner return porque es una función flecha de una sola línea. Sino, si tendría que poner 'return'
// Uso 'Number' para asegurarme de que la comparación sea con un número.

console.log(precioProductoMenorCien)