const express=require("express"); //Esto permite usar express en este proyecto
const app =express(); //Esto solo le está poniendo el nombre app a la variable express de la línea anterior
const errorMiddleware= require("./middleware/errors")


//Para que mi app entienda y use formato json
app.use(express.json());

//Para que mi app importe rutas
const productos=require("./routes/products")


//Ruta del navegador
app.use('/api', productos)
const usuarios=require("./routes/auth")

//MiddleWares para manejar errores
app.use(errorMiddleware)
app.use('/api',usuarios)


module.exports=app //Así hago que pueda usar la variable app(que es como nombré a express) en cualquier parte
