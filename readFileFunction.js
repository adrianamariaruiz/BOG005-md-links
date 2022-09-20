const fs = require('fs')
const marked = require('marked')

const readingFile = (arrayFiles) => {
    let content = new Promise((resolve, reject) => {
        let x = arrayFiles.map(fileObject => {
            let links = [];
            return new Promise((resolve, reject) => {
                fs.readFile(fileObject, 'utf-8', (error, data) => {
                    if (error) {
                        throw error
                    }
                    else {
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
                    }
                })
            })
        })
        resolve(x)
    })
    return content;
}

module.exports = {
    readingFile
};