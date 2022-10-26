/*
En JS el get del CRUD se crea como sigue. Entre paréntesis hay tres opciones: (req,res,next)
-req= pedir
-res= respuesta
-next= un paso a seguir

Con async le estoy diciendo que la respuesta es asincrónica, por eso uso el await

Primero se crea el modelo de producto mongoose y luego se puede usar aquí en el controlador

En el método update la variable es let porque debo redefinirla más adelante. Las const no se pueden redefinir

*/

const productos = require("../models/productos");
const producto=require("../models/productos") //Importo el modelo de productos. Como es mongoose, JS puede importarlo

//Ver lista de productos
exports.getProducts=async(req,res,next) =>{
    const products = await producto.find ();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        products
    })
}

//Consultar producto por id
exports.getProductById=async(req,res,next) =>{
    const productById = await producto.findById (req.params.id);
    if (!productById){
        return res.status(404).json({
            succes: false,
            mensaje: "El producto no existe"
        })
    }
    res.status(200).json({
        success:true,
        mensaje: "Esta es la información de tu producto: ",
        productById
    })
}

//Update de un producto
exports.updateProduct=async (req, res, next)=>{
    let updateProduct = await producto.findById (req.params.id);
    if (!updateProduct){
        return res.status(404).json({
            success: false,
            mensaje: "El producto no existe"
        })
    }

    updateProduct = await producto.findByIdAndUpdate (req.params.id, req.body, {
        new: true,
        runValidators:true,
        updateProduct
    });

    res.status(200).json({
        success: true,
        mensaje: "Actualización exitosa",
        updateProduct
    })

}


//Crear un nuevo producto /api/productos
exports.newProduct=async(req, res, next) => {
    const product = await producto.create (req.body);
    res.status(201).json({
        success: true,
        product
    })
}


//Eliminar un producto
exports.deleteProduct=async (req, res, next)=>{
    const deleteProduct = await producto.findById (req.params.id);
    if (!deleteProduct){
       return res.status(404).json({
            success: false,
            mensaje: "No se puede eliminar, el producto no existe"
        })
    }

    await deleteProduct.remove ();
    res.status(200).json({
        success: true,
        mensaje: "Eliminación exitosa. Los datos del producto eliminado son: ",
        deleteProduct
    })

}