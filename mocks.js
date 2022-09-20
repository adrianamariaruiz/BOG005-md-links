
const mocks = {
    path: './carpetaPrueba',
    objValidateFalse: [
        {
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\carpeta2\\archivoCarpeta2.md',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown'
        },
        {
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\otro.md',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown'
        },
        {
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\otro.md',
            href: 'https://nodejs.org/',
            text: 'Node.js'
        },
        {
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\sinContenido.md',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown'
        }
    ],
    objValidateTrue: [
        {
            status: 200,
            OK: 'OK',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\carpeta2\\archivoCarpeta2.md',
            text: 'Markdown'
        },
        {
            status: 200,
            OK: 'OK',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\otro.md',
            text: 'Markdown'
        },
        {
            status: 200,
            OK: 'OK',
            href: 'https://nodejs.org/',
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\otro.md',
            text: 'Node.js'
        },
        {
            status: 200,
            OK: 'OK',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            file: 'D:\\adriana\\Laboratoria\\proyecto 3\\BOG005-md-links\\carpetaPrueba\\sinContenido.md',
            text: 'Markdown'
        }
    ],
    statsTrue: { Total: 4, Unique: 2 },
    statsAndValidate: { Total: 4, Unique: 2, Broken: 0 }

}

module.exports = {
    mocks
}

//   else if (route && argv.includes('--stats')) {
//     mdLinks(route, { validate: true }).then((res) => { console.log('stats true', stats(res)) })
// }