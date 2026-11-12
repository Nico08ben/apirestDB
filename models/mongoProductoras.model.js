//const mongoose = require('mongoose');

//const productoraSchema = new mongoose.Schema({

const { Schema, model } = require('mongoose');

//const  {casas_productoras} = require("../models");

const productoraSchema = new Schema({

  /*  
  id: {
    type: Number,
    required: true,
    unique: true
  },
  */
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  pais: {
    type: String,
    required: true,
    trim: true
  },
  fecha_creacion: {
    type: Date,
    required: true
  }
}, {
    collection: 'Productoras',
  //timestamps: false,
  //versionKey: false
});

productoraSchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.uid = _id;
    return data;
};


module.exports = model('Productora', productoraSchema);

/*
module.exports = mongoose.model(
  'Productora',
  productoraSchema,
  'Productora'
);
*/
