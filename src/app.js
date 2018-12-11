const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//Rotas
const index = require('./routes/index');
const goalsRoute = require('./routes/goals');
const muscleRoute = require('./routes/muscles');
const exercisesRoute = require('./routes/exercises');
const myTrainingsRoute = require('./routes/myTrainings');

app.use('/', index);
app.use('/goals', goalsRoute);
app.use('/goals', muscleRoute);
app.use('/goals', exercisesRoute);
app.use('/myTrainings', myTrainingsRoute);

module.exports = app;