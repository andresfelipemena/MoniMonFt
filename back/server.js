/*
COSAS IMPORTANTES:
-Estamos haciendo esto del SERVER para conectarnos a un SERVIDOR, QUE LA APP FUNCIONE EN LÍNEA
-En el console.log se usa las backtics: ``
*/


const app = require("./app"); //Llamar a app (que es el nombre que le pusimos a express)


const dotenv=require("dotenv"); //Llamar a dotenv que es una de las cosas que importamos
dotenv.config({path: 'back/config/config.env'})
const connectDatabase = require("./config/database");



//Configurar base de datos
connectDatabase();


//Declarar el server
const server=app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})