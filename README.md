# API REST UAO

API REST desarrollada con Node.js y Express. El proyecto contiene módulos para trabajar con MySQL y MongoDB, además de rutas y controladores para héroes y usuarios.

## Requisitos

- Node.js y npm
- La base de datos que se vaya a utilizar (MySQL o MongoDB)

## Instalación y configuración

1. Instala las dependencias:

   ```sh
   npm install
   ```

2. Crea un archivo `.env` a partir de `.env.example` y configura las variables necesarias. No publiques `.env` ni credenciales reales.

3. Inicia el servidor:

   ```sh
   npm start
   ```

   Para desarrollo con recarga automática:

   ```sh
   npm run dev
   ```

## Estructura

| Directorio/archivo | Propósito |
| --- | --- |
| `app.js` | Punto de entrada de la aplicación |
| `controllers/` | Lógica de los endpoints |
| `database/` | Conexiones a MySQL y MongoDB |
| `helpers/` | Validaciones y utilidades |
| `middlewares/` | Middleware de autenticación y validación |
| `models/` | Servidor y modelos de datos |
| `routes/` | Definición de rutas |

## Estado actual

Las rutas y las conexiones a bases de datos están definidas en el proyecto, pero su registro e inicialización están comentados en `models/server.js`. Por ello, la aplicación arranca, pero esos endpoints no están disponibles hasta habilitar allí las rutas y conexiones requeridas.

No hay pruebas automatizadas configuradas todavía.
