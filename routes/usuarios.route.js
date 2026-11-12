const { Router } = require('express');

const {
    usuariosPost,
    login,
    usuariosGet
} = require('../controllers/usuarios.controller');

const { validarJWT} = require('../middlewares/validar-jwt');
const { validarAdminRole} = require('../middlewares/validarAdminRole');

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeUsuarioPorEmailMySql,noExisteUsuarioPorEmailMySql } = require('../helpers/db-validatorsMySql');


const router = Router();


//1. Insert - CREATE
router.post('/', 
    check('correo','El correo es obligatorio').isEmail(),
    check('correo').custom( noExisteUsuarioPorEmailMySql),
    validarCampos,
    
    usuariosPost);

//2. LOGIN
router.post('/login', 

    //Valido que el correo se un correo Valido
    check('correo','El correo es obligatorio y debe ser un email').isEmail(),
    check('correo').custom( existeUsuarioPorEmailMySql),
    
    check('password','La contraseña es obligatoria').not().isEmpty(),

    validarCampos,
   
    login);

//3. SELECT
router.get('/',

    //Ubico el middleware en medio del proceso para consultar los datos de los usuarios
 
    validarJWT,

    validarAdminRole,

    validarCampos,

    usuariosGet)

module.exports = router;
