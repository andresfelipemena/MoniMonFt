/*
En JS el get del CRUD se crea como sigue. Entre paréntesis hay tres opciones: (req,res,next)
-req= pedir
-res= respuesta
-next= un paso a seguir

Con async le estoy diciendo que la respuesta es asincrónica, por eso uso el await

Primero se crea el modelo de producto mongoose y luego se puede usar aquí en el controlador

En el método update la variable es let porque debo redefinirla más adelante. Las const no se pueden redefinir

*/


const producto=require("../models/productos") //Importo el modelo de productos. Como es mongoose, JS puede importarlo
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));


//Ver lista de productos
exports.getProducts=async(req,res,next) =>{
    const productos = await producto.find ();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }
    res.status(200).json({
        success:true,
        cantidad: producto.length,
        productos
    })
}

//Consultar producto por id
exports.getProductById=async(req,res,next) =>{
    const productById = await producto.findById (req.params.id);
    if (!productById){
        return res.status(404).json({
            success: false,
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


/*
//FETCH

//Ver todos los productos usando FETCH
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))} 
//verProductos(); 


//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))}
//verProductoPorID('6357d2ca62fb9f6e4d013518'); //Probamos el metodo con un id

*/