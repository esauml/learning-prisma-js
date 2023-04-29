# Learning of prisma js ORM

This is a project to learn how to use prisma js ORM. This project is based on a relational database.

## Setup

This will build a up mysql service, and a node service. After, it will run the migrations and run servers of node and prisma studio.

```bash
docker-compose up 
```

## About relational database

```mermaid
erDiagram
    CLIENTE {
        int id_cliente
        varchar(50) nombre_cliente
        varchar(100) direccion
        varchar(20) telefono
    }

    PEDIDO {
        int id_pedido
        int id_cliente
        date fecha_pedido
    }

    PRODUCTO {
        int id_producto
        varchar(50) nombre_producto
        float(10-2) precio
    }

    DETALLE_PEDIDO {
        int id_detalle
        int id_pedido
        int id_producto
        int cantidad
    }

    CLIENTE ||--o{ PEDIDO : places
    PEDIDO ||--|{ DETALLE_PEDIDO : contains
    PRODUCTO ||--o{ DETALLE_PEDIDO : includes
```
