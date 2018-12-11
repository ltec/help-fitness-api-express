let { objetivos } = require('../data/trainings.json');

exports.get = (req, res, next) => {
    res.status(200).send(objetivos);
};
exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(objetivos.find(x => x.id == id));
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