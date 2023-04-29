// create a simple express app
// import { PrismaClient, productos } from '@prisma/client'
const PrismaClient = require('@prisma/client').PrismaClient;
const express = require('express');

const app = express();

const prisma = new PrismaClient()

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/todo', async   (req, res) => {
    const user = await prisma.clientes.create({
        data: {
            direccion: 'Calle 1',
            nombre_cliente: 'Juan',
            telefono: '123456789'
        },
    })

    console.log(user)

    const producto = await prisma.productos.create({
        data: {
            nombre_producto: 'Coca Cola',
            precio: 10,
        },
    })

    console.log(producto)

    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});