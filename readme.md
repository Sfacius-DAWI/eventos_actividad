# Proyecto de Aseguradora

Este proyecto es una aplicación web para calcular seguros de vehículos. Incluye un formulario para ingresar datos personales y del vehículo, y calcula el precio del seguro basado en la información proporcionada.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio en tu máquina local:

```sh
git clone https://github.com/tu-usuario/proyecto-aseguradora.git
cd proyecto-aseguradora
````
2. Instala las dependencias del proyecto:

```
npm install
```

3. arrancar el servidor

```
noode server.js
```
4. ejecutar los test
los puedes ejecutar uno por 1 utilizando la extension de jest o puedes ejecutarlos todos utilizando
```
npm run test
```
5. la carpeta .vscode
sirve para ejecutar el debug y el apartado settings.json entre otras cosas se cordina con el lint para que al darle a guardar se actulice todo segun las normas establecidas en linst
6. buble
lo he utilizado para poder actulizar la forma en la que se hacen los export y los import dado que ES6 me gusta mas
7. git ignore
permite no subir las carpetas que yo haya selecionado
8. la plabra async en cada una de las funciones junto con la palabra resevada await hace que la ejecuión del codigo se pare hasta que se haya ejecutado esa función funciona como una promesa y no se va a devolver la respusta del formulacio hasta que se haya completado la función
9. estructura
    ```
    __tests__
    formatosISO.test.js
    validaciones.test.js
    validarfechas.test.js
    .babelrc
    .gitignore
    .prettierrc
    .vscode/
      launch.json
      settings.json
    babel.config.cjs
    calcularSeguro.js
    codigo.js
    eslint.config.mjs
    index.html
    jest.config.cjs
    package.json
    readme.md
    server.js
    styles.css
    utils/
      calcularSeguro.js
      validar_datos.js
      verificamosFormatos.js
  ```
```
10. el servidor esta hecho en fastify que es la herramienta que utilizo en el trabajo 
11. los test estan hechos en jest 
