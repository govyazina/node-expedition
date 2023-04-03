const fs = require('fs');
//получаем массив из файла
const getArrFromFile = (url) => fs.readFileSync(url, 'utf8').split('\n').map(str => str.split(',').map(str => str.trim()))

const crew = getArrFromFile('src/crew.txt')
const equipment = getArrFromFile('src/equipment.txt')
const rockets = getArrFromFile('src/rockets.txt')


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
    return crew.filter(person => person[2] === 'Бортмеханик').map(el => el.join(', '))
}

// Позволяет отобрать все марсоходы
function getAllRover() {
    return equipment.filter(rover => rover[1] === 'марсоход').map(el => el.join(', '))
}

// позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {
    return equipment.filter(rover => rover[1] === 'марсоход' && +rover[2] > 3).map(el => el.join(', '))
}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
    rockets.shift()
    return rockets.sort((a, b) => +b[2] - +a[2])[0].join(', ')

}

module.exports = {
    getRightCaptain,
    getAllEngineer,
    getRightDoc,
    getAllRover,
    getRightRovers,
    getRightRocket,
};
