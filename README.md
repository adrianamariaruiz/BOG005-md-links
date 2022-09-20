# Markdown Links

Es una libreria ejecutable con node.js, donde al ingresar una ruta se leen los archivos tipo Markdown, se extraen los links encontrados en cada archivo y si lo requiere se validan, e incluso mustra estadisticas basicas sobre los links encontrados.

# Uso de la aplicación

Para usar el modulo, lo puedes instalar con el siguiente comando desde tu terminal:
  npm i aruiz-md-links

La biblioteca se importa y usa de acuerdo al siguiente ejemplo
  const {mdLinks} = require('aruiz-md-links')

los comandos validos de opciones desde la terminal son:
  --validate
  --stats

#### `mdLinks(path, options)`
### Argumentos

* `path`: Ruta absoluta o relativa al archivo o directorio.
.
* `options`: 
  - `--validate`: Valida los links encontrados.
  - `--stats`: Si se desea tener información estadística general.

### Valor de retorno:
Con `si ingresa solo la ruta (Path)` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `--validate` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

Con `--stats` :
* Total: 3
* Unique: 3

Con `--stats --validate`:
* Total: 3
* Unique: 3
* Broken: 1


`ejemplos de uso: md-links`

```sh
$ md-links ./some/example.md
href: ./some/example.md 
file: http://algo.com/2/3/  
text: Link a algo
```

Identifica el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprime los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link.

## Options

##### `--validate`

Si pasa la opción `--validate`, si el link funciona responde ok, entonces consideraremos el link como ok, si falla responde Fail.

```sh
$ md-links ./some/example.md --validate
href: ./some/example.md 
file: http://algo.com/2/3/  
text: Link a algo
status: 200
OK: ok 

href: ./some/example.md
file: https://otra-cosa.net/algun-doc.html 
text: algún doc
status: 404 
OK: fail 
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

##### `--stats`

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También puede combinar `--stats` y `--validate` para obtener estadísticas que necesite de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```




