
const { validatePath } = require('./validatePath')
const { searchMdFiles } = require('./searchMdFiles')
const { readingFile } = require('./readFileFunction')
const { httpFunction } = require('./httpFunction')


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
    let result = searchMdFiles(absolutePath)

    return new Promise((resolve, reject) => {
        if (options.validate === true) {
            readingFile(result)
                .then(res => {
                    // console.log(res)
                    Promise.all(res).then(x => {
                        // httpFunction(x.flat()).then((httpResponse) => console.log('validate true mostando httpResponse', httpResponse))
                        resolve(httpFunction(x.flat()).then((httpResponse) => httpResponse))
                    })
                })
        } else {
            readingFile(result)
                .then(res => {
                    Promise.all(res).then(x => {
                        resolve(x.flat())
                    })
                })
        }
    })
}

module.exports = {
    mdLinks
};

