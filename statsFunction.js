const arrayPrueba = [
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
]

const statsFunction = (arrayPrueba) => {
    // console.log('probando arrayPrueba', arrayPrueba)
    // let total = []
    const broken = arrayPrueba.filter((links) => links.OK === 'fail').length;
    total = {
        'Total': arrayPrueba.length,
        'Unique': new Set(arrayPrueba.map((element) => element.href)).size,
        'Broken': broken
    }
    // console.log(total)
    return total
}

// statsFunction(arrayPrueba)

module.exports = {
    statsFunction
};