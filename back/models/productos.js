/*
Todo lo que está dentro de las llaves {} de "nombre:" son los atributos de ese dato.
Number sirve para TODOS los tipos de números =)
En precio no usamos trim porque los espacios en blanco se eliminan automáticamente cuando el atributo es numérico
*/


const mongoose=require("mongoose");

const productosSchema=mongoose.Schema({ //Schema sirve para que mi entidad lea datos json
    nombre:{
        type: String,
        required: [true, "Por favor, registra el nombre del producto."],
        trim:true, //Para que elimine los espacios en blanco al inicio y al final
        maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number,
        required: [true, "Por favor, registra el precio del producto."],
        maxLength:[8, "El precio del producto no puede ser superior a 99'999.999."],
        default: 0.0
    },
    descripcion: {
        type: String,
        required: [true, "Por favor, registra la descripción del producto."]
    },
    calificacion: {
        type: Number,
        default: 0
    },
    imagen: [
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    categoria:{
        type: String,
        required: [true, "Por favor, seleccione la categoría del producto."],
        enum:{
            values:[
                "Bienestar",
                "Entrenamiento",
                "Terapia física"
            ]
        }
    },
    vendedor:{
        type: String,
        required:[true, "Por favor, registre el vendedor del producto."]
    },
    inventario:{
        type: Number,
        required: [true, "Por favor, registre la cantidad del producto que desea tener en inventario."],
        maxLength: [5, "La cantidad máxima del producto no puede superar 99999."],
        default:0
    },
    numCalificaciones:{
        type: Number,
        deault:0
    },
    opiniones:[
        {
            nombreCliente:{
                type: String,
                required:true
            },
            rating:{
                type: Number,
                required:true
            },
            comentario: {
                type: String,

            }
        }
    ],
    fechaCreacion:{
        type: Date,
        default: Date.now
    }

})

module.exports=mongoose.model("productos", productosSchema) //Exportamos un modelo de tipo mongoose que se llama productos y se alimenta de productosSchema