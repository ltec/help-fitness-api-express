let { objetivos } = require('../data/trainings.json');
let { getGoal, getMuscle, getExercise } = require('../utils/trainings');

exports.get = (req, res, next) => {
    let idGoal = req.params.idGoal;
    let idMuscle = req.params.idMuscle;
    let goal = getGoal(idGoal, objetivos);
    let muscle = getMuscle(idMuscle, goal.musculos);
    let exercises = muscle.exercicios;
    res.status(200).send(exercises);
};
exports.getById = (req, res, next) => {
    let idGoal = req.params.idGoal;
    let idMuscle = req.params.idMuscle;
    let id = req.params.id;
    let goal = getGoal(idGoal, objetivos);
    let muscle = getMuscle(idMuscle, goal.musculos);
    let exercise = getExercise(id, muscle.exercicios);
    res.status(200).send(exercise);
};
exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};