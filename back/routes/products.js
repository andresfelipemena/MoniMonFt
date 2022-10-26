/*
Aquí estamos poniendo los path o rutas en las que se visualizará la información que generen los métodos
creados en el controlador.

Los dos puntos del método getProductsById le hace entender que es parte de la ruta y que es un parámetro
de la entidad.

*/

//Creo que estas dos líneas deben ir siempre
const express=require("express")
const router=express.Router(); //Con esto enrutamos

//Traer los métodos creados en el controller - también una línea que va siempre
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController")

//Ruta para ver la lista de productos
router.route('/productos').get(getProducts); //Definimos la ruta desde la cual queremos ver el getProducts

//Ruta para ver un producto por ID
router.route('/producto/:id').get(getProductById);

//Ruta para actualizar un produxto
router.route('/producto/update/:id').put(updateProduct);

//Ruta para crear nuevo producto
router.route('/producto/nuevo').post(newProduct);

//Ruta para borrar nuevo producto
router.route('/producto/delete/:id').delete(deleteProduct);

module.exports=router; 