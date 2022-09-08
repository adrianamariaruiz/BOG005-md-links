const fs = require('fs')
const path = require('path')
const marked = require('marked')
const { validatePath } = require('./validatePath')
const { searchMdFiles } = require('./searchMdFiles')
const { readingFile } = require('./readFileFunction')
const { httpFunction } = require('./httpFunction')
const { resolve } = require('path')


// mdLinks debe tener 2 argumentos, path y options

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
                console.log(res)
                Promise.all(res).then(x => {
                    // console.log("print true", x.flat());
                    return httpFunction(x.flat())
                })
            })

    } else {
        readingFile(result)
            .then(res => {
                Promise.all(res).then(x => {
                    console.log("print false", x.flat());
                    return x.flat()
                })
            })
    }

}

mdLinks('carpetaPrueba', { validate: false, stats: true })

