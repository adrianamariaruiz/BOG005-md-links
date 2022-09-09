const http = require('http')
const fetch = require('node-fetch')
const { resolve } = require('path')
// import { fetch } from "node-fetch";

const objectPrint = [
    {
        file: 'D:/adriana/Laboratoria/proyecto 3/BOG005-md-links/carpetaPrueba/carpeta2/archivoCarpeta2.md',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown'
    },
    {
        file: 'D:/adriana/Laboratoria/proyecto 3/BOG005-md-links/carpetaPrueba/otro.md',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown'
    },
    {
        file: 'D:/adriana/Laboratoria/proyecto 3/BOG005-md-links/carpetaPrueba/otro.md',
        href: 'https://nodejs.org/',
        text: 'Node.js'
    },
    {
        file: 'D:/adriana/Laboratoria/proyecto 3/BOG005-md-links/carpetaPrueba/sinContenido.md',
        href: 'https://es.wikipedia/wiki/peritaVerde',
        text: 'Markdown'
    }
]

const httpFunction = (links) => {

    const promisesFetch = links.map(hrefLinks =>
        fetch(hrefLinks.href)
            .then(res => {
                // console.log(res)
                if (res.status >= 200 && res.status <= 299) {
                    // console.log(({ status: res.status, OK: res.statusText, href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text }))
                    return ({ status: res.status, OK: res.statusText, href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text })
                } else if (res.status >= 400 && res.status <= 499) {
                    // console.log(({ status: res.status, OK: 'Fail', href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text }))
                    return ({ status: res.status, OK: 'Fail', href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text })
                }
            })
            .catch(() => {
                // console.log({ status: 404, OK: 'Fail', href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text })
                return ({ status: 404, OK: 'Fail', href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text })

            })
    )
    // Promise.all(promisesFetch).then((onePromise) => { console.log('tratando de leer onePromise', onePromise) })


    return Promise.all(promisesFetch)
}


// httpFunction(objectPrint)

module.exports = {
    httpFunction
};

// const httpFunction = (links) => {
//     const options = {
//         path: myPath,
//         method: 'GET'
//     }

//     const req = http.request(options, res => {
//         console.log(res.statusCode)
//     })

//     console.log(req)
// }