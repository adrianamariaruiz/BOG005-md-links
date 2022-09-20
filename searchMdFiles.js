
const fs = require('fs')
const path = require('path')

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
      if ((fs.statSync(newPath).isDirectory())) {
        fileArray = fileArray.concat(searchMdFiles(newPath))

      } else {
        if (path.extname(newPath) === '.md') {
          fileArray.push(newPath)
        }
      }
    })
  }

  return fileArray
}

module.exports = {
  searchMdFiles
};




