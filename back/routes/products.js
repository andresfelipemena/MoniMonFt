/*
Aquí estamos poniendo los path o rutas en las que se visualizará la información que generen los métodos
creados en el controlador.

Los dos puntos del método getProductsById le hace entender que es parte de la ruta y que es un parámetro
de la entidad.

*/

const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

//Probemos autenticación
//router.route('/productos').get(isAuthenticatedUser, authorizeRoles("admin"), getProducts)  
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //establecemos la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct);//Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct); //Creacion de la ruta de eliminacion por id
 

module.exports=router;