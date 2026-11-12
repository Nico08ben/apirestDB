const Heroe = require("../models/mongoHeroes.model");

const Productora = require("../models/mongoProductoras.model");


/**
* Heroe
*/
const existeHeroePorId = async (id) => {
 // Verificar si el correo existe
 const existeHeroe = await Heroe.findById(id);

 if (!existeHeroe) {
   throw new Error(`El id del Heroe no existe ${id}`);
 }
};


/**
* Productora
*/
const existeProductoraPorId = async (id) => {
 // Verificar si el correo existe
 const existeProductora = await Productora.findById(id);

 if (!existeProductora) {
   throw new Error(`El id de la Productora no existe ${id}`);
 }
};


module.exports = {
 existeHeroePorId,
 existeProductoraPorId
};

