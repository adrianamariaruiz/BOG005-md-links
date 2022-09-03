const fs = require('fs')
const path = require('path')
const marked = require('marked')
const { buscandoMd, readingFile } = require('./index')

const mdLinks = (path) => {
    let result = buscandoMd(path)
    console.log('por aca result: ', result)

    readingFile(result)
        .then(res => {
            Promise.all(res).then(x => {
                console.log("print", x.flat());
            })
        })

}

mdLinks('carpetaPrueba')