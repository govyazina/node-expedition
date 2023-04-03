const fs = require('fs');
//получаем массив из файла
const crew = fs.readFileSync('src/crew.txt', 'utf8').split('\n').map(str => str.split(', '));

// позволяет выбрать самого опытного капитана
function getRightCaptain() {
    const filtred = crew.filter(person => person[2] === 'Капитан').sort((a, b) => +b[3] - +a[3])
    return filtred[0].join(', ')
}

// позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {

}

// позволяет выбрать всех бортмехаников
function getAllEngineer() {

}

// Позволяет отобрать все марсоходы
function getAllRover() {

}

// позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {

}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {

}

module.exports = {
    getRightCaptain,
    getAllEngineer,
    getRightDoc,
    getAllRover,
    getRightRovers,
    getRightRocket,
};
