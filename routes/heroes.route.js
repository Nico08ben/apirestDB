const { Router } = require('express');

const { heroesGet,
        heroeIdGet,
        heroesComoGet,

        heroesPost,

        heroePut,

        heroeDelete
} = require('../controllers/heroes.controller');

const { validarJWT} = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeHeroePorIdMySql } = require('../helpers/db-validatorsMySql');



const router = Router();
//ENDPOINTS

//1. SELECT * FROM heroes
router.get('/', 
   
    heroesGet);

//2. SELECT * FROM heroes
//WHERE id = ?
router.get('/:id', 
    
    check('id').custom( existeHeroePorIdMySql),

    validarCampos,
        
    heroeIdGet);

//3. COMO
router.get('/como/:termino', heroesComoGet);


//4. POST - INSERT
router.post('/', 
    //Aqui incorporamos el uso del TOKEN
    validarJWT,
    
    heroesPost);

//5. PUT - UPDATE
router.put('/:id', 

    //Aqui incorporamos el uso del TOKEN
    validarJWT,

    check('id').custom( existeHeroePorIdMySql),
    
    validarCampos,

    heroePut);

//6. DELETE - DELETE
router.delete('/:id', 
    //Aqui incorporamos el uso del TOKEN
    validarJWT,

    check('id').custom( existeHeroePorIdMySql),

    validarCampos,

    heroeDelete);

//router.patch('/', usuariosPatch);

module.exports = router;
