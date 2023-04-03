const fs = require('fs');
//получаем массив из файла
const crew = fs.readFileSync('src/crew.txt', 'utf8').split('\n').map(str => str.split(', '));
const equipment = fs.readFileSync('src/equipment.txt', 'utf8').split('\n').map(str => str.split(', '));

// позволяет выбрать самого опытного капитана
function getRightCaptain() {
    const filtred = crew.filter(person => person[2] === 'Капитан')
        .sort((a, b) => +b[3] - +a[3]).map(el => el.join(', '))
    return filtred[0]
}

// позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
    const filtred = crew.filter(person => person[2] === 'Врач' && person[1] === 'ж').sort((a, b) => +b[3] - +a[3]).map(el => el.join(', '))
    return filtred[0]
}

// позволяет выбрать всех бортмехаников
function getAllEngineer() {
    const filtred = crew.filter(person => person[2] === 'Бортмеханик').map(el => el.join(', '))
    return filtred
}

// Позволяет отобрать все марсоходы
function getAllRover() {
    const filtred = equipment.filter(rover => rover[1] === 'марсоход').map(el => el.join(', '))
    return filtred
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
