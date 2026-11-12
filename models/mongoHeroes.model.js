const { Schema, model } = require('mongoose');

//const  {casas_productoras} = require("../models");

const HeroeSchema = new Schema({


    /*
    id: {
        type: Number,
        unique: true
    },
    */

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },


    bio: {
        type: String,
        required: [true, 'La biografia es obligatoria'],
    },


    img: {
        type: String,
        required: [true, 'La imagen es obligatoria'],
    },


    aparicion: {
        type: Date,
        required: [true, 'Debe tener una fecha de Aparicion']
    },


    casa: {
        type: String,
        required: [true, 'La casa es obligatoria'],
    },


    /*
    // ⚠️ opcional (no necesario si usas populate)
    productora_id: {
        type: Number
    },
    */


    // ✅ ESTE ES EL IMPORTANTE PARA POPULATE
    productora_mongo_id: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: [true, 'La casa productora es obligatoria']
    }


}, 
{
    collection: 'Heroes'
}
);



HeroeSchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.uid = _id;
    return data;
};


/*
HeroeSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}
*/    


module.exports = model('Heroe', HeroeSchema);
