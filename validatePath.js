const path = require('path')


const validatePath = (myPath) => {
    // SI LA RUTA ES RELATIVA VOLVERLA ABSOLUTA
    let ruta
    if (path.isAbsolute(myPath)) {
        console.log('la ruta es absoluta ' + myPath)
        return ruta = myPath
    } else {
        return ruta = path.resolve(myPath)
    }
}

// mdLinks('carpetaPrueba/otro.md')

module.exports = {
    validatePath
};

