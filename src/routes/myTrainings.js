const express = require('express');
const router = express.Router();
const controller = require('../controllers/myTrainings');
const validators = require('./../validators/myTrainings')

router.get('/', controller.get);

router.get('/:id', controller.getById);

router.post('/', validators.post, controller.post);

router.post('/:id/exercises', validators.postExercise, controller.postExercise);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;