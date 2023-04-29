import { PrismaClient, productos } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.clientes.create({
        data: {
            direccion: 'Calle 1',
            nombre_cliente: 'Juan',
            telefono: '123456789'
        },
    })

    console.log(user)

    const producto: productos = await prisma.productos.create({
        data: {
            nombre_producto: 'Coca Cola',
            precio: 10,
        },
    })

    console.log(producto)
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })