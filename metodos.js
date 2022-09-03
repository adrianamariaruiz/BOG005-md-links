const fs = require('fs')
const path = require('path')
const marked = require('marked')
const { buscandoMd } = require('./index.js')

// ME MUESTRA LA RUTA ABSOLUTA
// console.log(path.resolve('archivo2.txt'))

// MUESTRA LOS ARCHIVOS (nombre del archivo) QUE ESTAN EN ESE PATH (en este caso con el ./ le estoy pidiendo los archivos que estan en esa ruta)
// fs.readdir('./', (error, files) => {
//     if (!error) {
//         console.log(files)
//     } else {
//         console.log(`Error: ${error}`)
//     }
// })

// LEE EL PATH DE LA CARPETA Y MUESTRA EL ARCHIVO (nombre del archivo) QUE ESTA ADENTRO DE LA carpetaPrueba
// fs.readdir('carpetaPrueba', (error, files) => {
//   if (!error) {
//     console.log(files)
//   } else {
//     console.log(`Error: ${error}`)
//   }
// })

// JUNTO LOS PATHS CON path.join()
// const uniendoRutas = path.join()
// path.dirname(path) retorna el directorio del archivo
// console.log(path.dirname('archivo2.txt'))

// volver path relativo a path absoluto con __dirname AUN NO FUNCIONA
// console.log(__dirname)
// console.log(path.join(__dirname, 'carpetaPrueba'))

// fs.readdir(__dirname + '/carpetaPrueba', 'UTF-8', (error, files) => {
//   if (!error) {
//     console.log(files)
//   } else {
//     console.log(`Error: ${error}`)
//   }
// })

// LEE EL ARCHIVO (muestra el contenido del archivo)
// fs.readFile('carpetaPrueba/otro.md', 'UTF-8', (error, data) => {
//     if (!error) {
//         console.log(data)
//     } else {
//         console.log(`Error: ${error}`)
//     }
// })

// OBTENER LA EXTENSION DEL ARCHIVO
// const path = require('path')
// const extension = path.extname('probando.txt')
// console.log(extension)

// PARA SABER SI ES ARCHIVO O DIRECTORIO
// El método fs.stat() se usa para devolver información sobre el archivo o directorio dado. Devuelve un objeto fs.Stat que tiene varias propiedades y métodos para obtener detalles sobre el archivo o directorio.
// fs.stat (ruta, opciones, callback)

// fs.stat('carpetaPrueba/otro.md', 'UTF-8', (error, data) => {
//     if (!error) {
//         console.log(data)
//     } else {
//         console.log(`Error: ${error}`)
//     }
// })

// The process.env property returns an object containing the user environment.
// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.

// EL process.argv TIENE QUE EN LA POSICION 0 ME DA :  C:\\Program Files\\nodejs\\node.exe
// EN LA POSICION 1 ME DA : D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\index
// LE PUEDO PASAR ARGUMENTOS EN LAS OTRAS POSICIONES PARA QUE CUANDO PONGA node index.js probando.txt ME LEE ESE ARCHIVO
// console.log(process.argv)

// buscandoMd(process.argv[2])

// MARKED - PASA UN ARCHIVO MARKDOWN A HTML

// VALIDO SI ES ARCHIVO Y LA EXTENSION ES .MD Y LUEGO LEO EL ARCHIVO
// const validoYleo = (file) => {
//   // const thisIsFile = fs.statSync(file).isFile()
//   if (path.extname(file) === '.md') {

//     // let fileArray = []
//     fileArray.push({ 'path': file })
//     console.log(fileArray.push({ 'path': file }))

//     // LEYENDO EL CONTENIDO DEL ARCHIVO
//     const rutaCompleta = fs.readFileSync(file, 'UTF-8')
//     console.log(rutaCompleta)
//   } else {
//     console.log('No es .md')
//   }
// }

// LEYENDO EL ARCHIVO
// const readingFile = (fileArray) => {
//   const thisPromise = new Promise((resolve, reject) => {
//     let links = []
//     fileArray.map(file => {
//       // console.log(file.path)
//       return new Promise((resolve, reject) => {
//         fs.readFile(file.path, 'UTF-8', (error, data) => {
//           if (error) {
//             throw error
//           } else {
//             console.log(data)
//             let renderer = new marked.Renderer();
//             renderer.link = function (href, title, text) {
//               links.push({
//                 'file': fileObject.path,
//                 'href': href,
//                 'text': text
//               })
//             }
//             marked.marked(data, { renderer: renderer })
//           }
//         })
//       })


//     });
//     resolve(links)
//   })
//   return thisPromise
// }
// readingFile(buscandoMd).then(Promise.all(thisPromise)).then(value => console.log(value))


// readingFile(buscandoMd)
// .then(Promise.all(links)
//   .then(value => console.log(value)))

