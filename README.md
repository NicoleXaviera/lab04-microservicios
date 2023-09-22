# lab04-microservicios

# Mi Proyecto Express

Este proyecto es una aplicación web simple creada con Node.js y Express. Proporciona una interfaz de usuario para visualizar listas de clientes y productos, y una API para recuperar estos datos en formato JSON.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal:
npm install
npm install express
npm install axios

## Ejecución

Para ejecutar la aplicación, ejecuta el siguiente comando en tu terminal:

node index.js

Ahora puedes visitar `http://localhost:3000` en tu navegador para ver la aplicación en acción.

## Estructura del Proyecto

El archivo principal del servidor es `index.js`, que configura y lanza el servidor Express. Los datos de clientes y productos se definen en este archivo y se exponen a través de los endpoints `/api/clientes` y `/api/productos`.

Los archivos HTML para la interfaz de usuario se encuentran en el directorio `public`. Estos son `index.html`, `clientes.html` y `productos.html`. Los archivos `clientes.html` y `productos.html` contienen código JavaScript para recuperar los datos de los clientes y productos del servidor y construir las tablas.

[![verdadero.jpg](https://i.postimg.cc/V61KZNyY/verdadero.jpg)](https://postimg.cc/Ty7jpfYS)
