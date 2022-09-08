
const fs = require('fs')
const path = require('path')
// const marked = require('marked')

const searchMdFiles = (myPath) => {
  let fileArray = []

  if (fs.statSync(myPath).isFile() && path.extname(myPath) === '.md') {
    fileArray.push(myPath)
    // console.log('probando fileArray: ', fileArray)

  } else if (fs.statSync(myPath).isFile() && path.extname(myPath) !== '.md') {
    // readdir muestro los archivos que estan en el path (arroja un array)
    console.log('error no es .md')
    return 'error no es .md'
  } else {
    fs.readdirSync(myPath).forEach(file => {
      let newPath = path.join(myPath, file)
      // console.log('prueba newPath: ', newPath)
      if ((fs.statSync(newPath).isDirectory())) {
        fileArray = fileArray.concat(searchMdFiles(newPath))

      } else {
        if (path.extname(newPath) === '.md') {
          fileArray.push(newPath)
        }
      }
    })
  }
  // console.log('probando ultimo fileArray', fileArray) /* este es el array de objetos con el {path: 'nombreCarpeta.md'} */
  return fileArray
}

// buscandoMd('probandoMd.md')

module.exports = {
  searchMdFiles
};




