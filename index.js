const fs = require('fs')
const path = require('path')
const marked = require('marked')
const { validatePath } = require('./validatePath')
const { searchMdFiles } = require('./searchMdFiles')
const { readingFile } = require('./readFileFunction')
const { httpFunction } = require('./httpFunction')
const { resolve } = require('path')
const { statsFunction } = require('./statsFunction')


// mdLinks debe tener 2 argumentos, path y options
// La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto representa un link y contiene las siguientes propiedades

// option es un objeto con 2 propiedades
// validate: Booleano que determina si se desea validar los links encontrados.
//     si es true: href, text, file, status, ok
//     si es False: href, text, file
// stats: Booleano que determina si se desea obtener un output con información estadística general

// const options = {validate: Boolean, stats: Boolean}

const mdLinks = (myPath, options) => {
    let absolutePath = validatePath(myPath)
    console.log('aca es absolutePath', absolutePath)

    let result = searchMdFiles(absolutePath)
    console.log('por aca result: ', result)

    if (options.validate === true) {
        readingFile(result)
            .then(res => {
                // console.log(res)
                Promise.all(res).then(x => {
                    // console.log("print validate: true", x.flat());
                    // console.log("print validate: true", httpFunction(x.flat()));
                    // console.log(httpFunction(x.flat()).then((httpResponse) => console.log('mostando httpResponse', httpResponse)))
                    return httpFunction(x.flat()).then((httpResponse) => httpResponse)
                })
            })

    } else {
        readingFile(result)
            .then(res => {
                Promise.all(res).then(x => {
                    console.log("si validate es false o nada", x.flat());
                    return x.flat()
                })
            })
    }

    if (options.stats === true) {
        // tengo que mostrar las estadisticas que estan en statsFunction

        // console.log('probando el stats true')
        // const resultStats = statsFunction(result)
        readingFile(result)
            .then(res => {
                // console.log(res)
                Promise.all(res).then(x => {

                    httpFunction(x.flat()).then((httpResponse) => console.log('probando statsFunction', statsFunction(httpResponse)))
                    return httpFunction(x.flat()).then((httpResponse) => statsFunction(httpResponse))
                    // return  httpFunction(x.flat()).then((httpResponse) => statsFunction(httpResponse))

                })
            })
    }

}

mdLinks('carpetaPrueba', { validate: true, stats: true })

