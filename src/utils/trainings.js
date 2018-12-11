exports.getGoal = (idGoal, collection) => collection.find(x => x.id == idGoal);
exports.getMuscle = (idMuscle, collection) => collection.find(x => x.id == idMuscle);
exports.getExercise = (idExercise, collection) => collection.find(x => x.id == idExercise);