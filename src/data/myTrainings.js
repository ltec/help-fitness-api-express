var fs = require('fs');

exports.getData = () => {
    let file = fs.readFileSync("./src/data/myTrainings.json", "utf8");
    return JSON.parse(file);
}

exports.saveData = (data) => {
    let json = JSON.stringify(data);
    let file = fs.writeFile("./src/data/myTrainings.json", json, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    return file;
}