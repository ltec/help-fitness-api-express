let { objetivos } = require('../data/trainings.json');

exports.get = (req, res, next) => {
    let idGoal = req.params.idGoal;
    let goal = objetivos.find(x => x.id == idGoal);
    let muscles = goal.musculos
    res.status(200).send(muscles);
};
exports.getById = (req, res, next) => {
    let idGoal = req.params.idGoal;
    let id = req.params.id;
    let goal = objetivos.find(x => x.id == idGoal);
    let muscle = goal.musculos.find(x => x.id == id);

    res.status(200).send(muscle);
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