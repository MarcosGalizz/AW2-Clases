/*
Uso de módulos built-in con  el sistema de módulos moderno (ESModules)
*/
/*
import os from 'node:os';

// KB/MB/GB
console.log(os.totalmem()/1024/1024/1024)

console.log(os.freemem())

console.log((os.totalmem()-os.freemem())/1024/1024/1024)

*/

//import { readFile } from 'node:fs/promises';
import fsp from 'node:fs/promises'; // Asíncrono
const contenido = await fsp.readFile("./texto.txt", "utf-8") // Porque me retorna una Promesa
console.log(contenido)