
const fs = require('fs')
const path = require('path')
const marked = require('marked')

const buscandoMd = (myPath) => {

  let ruta
  let fileArray = []

  // SI LA RUTA ES RELATIVA VOLVERLA ABSOLUTA
  if (path.isAbsolute(myPath)) {
    console.log('la ruta es absoluta ' + myPath)
    ruta = myPath
  } else {
    ruta = path.resolve(myPath)
    console.log('vuelvo absoluta la ruta ' + ruta)
  }

  if (fs.statSync(ruta).isFile() && path.extname(ruta) === '.md') {
    fileArray.push(ruta)
    console.log('probando fileArray: ', fileArray)

    // console.log('probando fileArray', fileArray)
    // LEYENDO EL CONTENIDO DEL ARCHIVO

    // readingFile(fileArray)
    //   .then(res => {
    //     Promise.all(res).then(x => {
    //       console.log("print", x.flat());
    //     })
    //   })


  } else if (fs.statSync(ruta).isFile() && path.extname(ruta) !== '.md') {
    // readdir muestro los archivos que estan en el path (arroja un array)
    console.log('error no es .md')
  } else {
    fs.readdirSync(ruta).forEach(file => {
      let newPath = path.join(ruta, file)
      console.log('prueba newPath: ', newPath)
      if ((fs.statSync(newPath).isDirectory())) {
        fileArray = fileArray.concat(buscandoMd(newPath))

      } else {
        if (path.extname(newPath) === '.md') {
          fileArray.push(newPath)
        }
      }
    })

  }

  console.log('probando ultimo fileArray', fileArray) /* este es el array de objetos con el {path: 'nombreCarpeta.md'} */

  return fileArray
}

// buscandoMd('probandoMd.md')


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
              links.push({
                'file': fileObject,
                'href': href,
                'text': text
              })
            }
            marked.marked(data, { renderer: renderer });
            resolve(links)
            console.log('probando links pusheados', links)
          }
        })
        // console.log('leyendo links ', links)
      })
    })
    // console.log(x)
    resolve(x)
    // Promise.all(x).then(y => {
    //   console.log("print", y);
    //   resolve(y)
    // })
  })

  return content;
}

// readingFile([
//   'D:/adriana/Laboratoria/proyecto 3/BOG005-md-links/probandoMd.md'
// ])
//   .then(res => {
//     Promise.all(res).then(x => {
//       console.log("print", x.flat());
//     })
//   })


module.exports = {
  buscandoMd,
  readingFile
};

// console.log('probando')
// console.log('por aca nodemon')


