const express = require('express');
const router = express.Router();
const controller = require('../controllers/muscles');
let path = '/:idGoal/muscles';

router.get(path, controller.get);

router.get(path + '/:id', controller.getById);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;