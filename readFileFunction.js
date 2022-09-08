const fs = require('fs')
const path = require('path')
const marked = require('marked')
const httpFunction = require('./httpFunction')
const fetch = require('node-fetch')
const { resolve } = require('path')

// console.log(typeof httpFunction)

const readingFile = (arrayFiles) => {
    // console.log('probando buscandoMd: ' + JSON.stringify(buscandoMd))
    let content = new Promise((resolve, reject) => {

        let x = arrayFiles.map(fileObject => {
            let links = [];
            return new Promise((resolve, reject) => {
                // console.log('probando fileObject.path: ', fileObject.path)
                fs.readFile(fileObject, 'utf-8', (error, data) => {
                    if (error) {
                        // console.log('error leyendo el archivo', error);
                        throw error
                    }
                    else {
                        // console.log('leyendo data ' + data);
                        let renderer = new marked.Renderer();

                        renderer.link = function (href, title, text) {
                            const toPushObject = {
                                'file': fileObject,
                                'href': href,
                                'text': text
                            }

                            links.push(toPushObject)
                        }
                        marked.marked(data, { renderer: renderer });
                        resolve(links)
                        // console.log('probando links pusheados', links)
                    }
                })
                // console.log('leyendo links ', links)
            })
        })
        // console.log(x)
        resolve(x)
    })
    return content;
}

module.exports = {
    readingFile
};