const { Router } = require('express');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');

const { existeHeroePorId,existeProductoraPorId } = require('../helpers/db-validators.mongo');


const { obtenerHeroes,
        obtenerHeroe,

        crearHeroe,
        actualizarHeroe,
        borrarHeroe

} = require('../controllers/heroes.mongo.controller');

const router = Router();


//END Points
//SELECT/GET * from heroes
router.get('/', obtenerHeroes);


router.get('/:id',
    //Este middleware verifica si el id es un ID de Mongo
    check('id', 'No es un id de Mongo válido').isMongoId(),  
    check('id').custom( existeHeroePorId ),

    validarCampos, 
   
    obtenerHeroe);

//CREAR
router.post('/',
    check('productora_mongo_id', 'No es un id de Mongo válido').isMongoId(),  
    check('productora_mongo_id').custom( existeProductoraPorId ),
    validarCampos,    
    
    crearHeroe);

//ACTUALIZAR
router.put('/:id',

    check('id', 'No es un id de Mongo válido').isMongoId(),  
    check('id').custom( existeHeroePorId ),
    validarCampos,    

    actualizarHeroe);

//ELIMINAR
router.delete('/:id',
    
    check('id', 'No es un id de Mongo válido').isMongoId(),  
    check('id').custom( existeHeroePorId ),

    validarCampos,    
    borrarHeroe);

module.exports = router;
