const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', {
    root: __dirname
  });
});

app.get('/clientes', (req, res) => {
  res.sendFile('clientes.html', {
    root: path.join(__dirname, 'public')
  });
});

app.get('/productos', (req, res) => {
  res.sendFile('productos.html', {
    root: path.join(__dirname, 'public')
  });
});


app.get('/api/clientes', (req, res) => {
  const clientes = [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "email": "juan.perez@gmail.com",
      "direccion": "123 Calle Principal, Ciudad A"
    },
    {
      "id": 2,
      "nombre": "Ana García",
      "email": "ana.garcia@gmail.com",
      "direccion": "456 Avenida Central, Ciudad B"
    },
    {
      "id": 3,
      "nombre": "Carlos Rodríguez",
      "email": "carlos.rodriguez@gmail.com",
      "direccion": "789 Calle Secundaria, Ciudad C"
    },
    {
      "id": 4,
      "nombre": "Laura Martínez",
      "email": "laura.martinez@gmail.com",
      "direccion": "101 Calle del Parque, Ciudad D"
    },
    {
      "id": 5,
      "nombre": "David López",
      "email": "david.lopez@gmail.com",
      "direccion": "234 Avenida Norte, Ciudad E"
    },
    {
      "id": 6,
      "nombre": "Nicole Arguedas",
      "email": "juan.perez@gmail.com",
      "direccion": "123 Calle lateral, La Molina"
    },
    {
      "id": 7,
      "nombre": "Jaime Farfan",
      "email": "jfarfan@gmail.com",
      "direccion": "San isidro, Ciudad A"
    }
    
  ];
  res.json(clientes);
});

app.get('/api/productos', (req, res) => {
  const productos = [
    {
      "id": 1,
      "nombre": "Laptop HP",
      "precio": 799.99
    },
    {
      "id": 2,
      "nombre": "Tablet Samsung Galaxy",
      "precio": 299.99
    },
    {
      "id": 3,
      "nombre": "Smartphone iPhone 12",
      "precio": 999.99
    },
    {
      "id": 4,
      "nombre": "Auriculares Sony",
      "precio": 149.99
    },
    {
      "id": 5,
      "nombre": "Monitor LG 27 pulgadas",
      "precio": 249.99
    }
  ];
  res.json(productos);
});

app.listen(3000, () => {
  console.log('Servidor web en ejecución en el puerto 3000');
});
