var { getData, saveData } = require('../data/myTrainings.js');
const { validationResult } = require('express-validator/check');
var fs = require('fs');

exports.get = (req, res, next) => {
    try {
        res.status(200).send(myTrainings);
    } catch (error) {
        res.status(500).send({ ...error });
    }
};
exports.getById = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });

        let id = req.params.id;
        let trainings = myTrainings.find(x => x.id == id);
        res.status(200).send(trainings);
    } catch (error) {
        res.status(500).send({ ...error });
    }

};
exports.post = (req, res, next) => {
    try {
        let training = req.body;
        let data = getData();
        let myTrainings = data.myTrainings;
        let id = myTrainings.length + 1;
        myTrainings.push({ id: id, ...training, exercises: [] });
        saveData(data);
        res.status(200).send({ id: id, ...training, exercises: [] });
    } catch (error) {
        res.status(500).send({ ...error });
    }

};
exports.postExercise = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });

        let exercise = req.body;
        let idTraining = req.params.id;
        let data = getData();
        let exercises = data.myTrainings.find(x => x.id == idTraining).exercises;
        let id = exercises.length + 1;
        exercises.push({ id: id, ...exercise });
        saveData(data);
        res.status(200).send({ id: id, ...exercise });
    } catch (error) {
        res.status(500).send({ ...error });
    }
};
exports.put = (req, res, next) => {
    try {
        let training = req.body;
        let index = myTrainings.findIndex(x => x.id == training.id);
        myTrainings.splice(index, 1, training);
        res.status(201).send(training);
    } catch (error) {
        res.status(500).send({ ...error });
    }
};
exports.delete = (req, res, next) => {
    try {
        let training = req.body;
        let index = myTrainings.findIndex(x => x.id == training.id);
        myTrainings.splice(index, 1);
        res.status(200).send(`Registro removido com sucesso!`);
    } catch (error) {
        res.status(500).send({ ...error });
    }

};