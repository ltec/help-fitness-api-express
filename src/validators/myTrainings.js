const { check } = require('express-validator/check');

exports.post = [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
]
exports.postExercise = [
    check('musculo')
    .isEmpty()
    .withMessage('Favor informar um musculo para o exercício!')
];