const jwt = require('jsonwebtoken');
const { request, response } = require("express");


//const Usuarios = require('../models/usuarios.model')
const { Usuarios } = require('../models/usuarios.model');


const validarAdminRole = async (req = request, res = response, next) => {

    try {

        if(req.usuario.rol != 'ADMIN_ROLE'){
            return res.status(401).json({
                msg: 'El usuario no es ADMIN_ROLE'
            })
        }


        //req.usuario = usuario;


        next();


    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: ' El token no es valido...'
        })

    }

    //console.log(token);
    //next();
}


module.exports = {
    validarAdminRole 
}