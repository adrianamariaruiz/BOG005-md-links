const marked = require('marked')
const fs = require('fs')


// const markedFunction = (file) => {
//     let links = []
//     const readFileHere = fs.readFileSync(file, 'UTF-8')
//     console.log(readFileHere)

//     let renderer = new marked.Renderer();

//     // si es false en las options me arroja esto
//     renderer.link = function (href, title, text) {
//         links.push({
//             'file': file,
//             'href': href,
//             'text': text
//         })
//     }
//     const result = marked.marked(readFileHere, { renderer: renderer });
//     // console.log(result)
//     console.log(links)
//     return links

// }

// markedFunction('probandoMd.md')


const markedFunctionTrue = (file) => {
    let links = []
    const readFileHere = fs.readFileSync(file, 'UTF-8')
    // console.log(readFileHere)

    let renderer = new marked.Renderer();

    // si es true en las options me arroja esto
    renderer.link = function (href, title, text, status, ok) {
        links.push({
            'file': file,
            'href': href,
            'text': text,
        })
    }
    const result = marked.marked(readFileHere, { renderer: renderer });
    // console.log(result)
    console.log(links)
    return links

}

markedFunctionTrue('probandoMd.md')