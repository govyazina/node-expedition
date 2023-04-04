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

// позволяет выбрать самого опытного бортмеханика среди женщин
function getRightEngineer() {
    const filtred = crew.filter(person => person[2] === 'Бортмеханик' && person[1] === 'ж').sort((a, b) => +b[3] - +a[3]).map(el => el.join(', '))
    return filtred[0]
}

// позволяет выбрать всех врачей
function getAllDM() {
    return crew.filter(person => person[2] === 'Врач').map(el => el.join(', '))
}

// Позволяет отобрать все луноходы
function getAllRover() {
    return equipment.filter(rover => rover[1] === 'луноход').map(el => el.join(', '))
}

// позволяет выбрать только те луноходы, которые смогут прослужить больше 5 лет
function getRightRovers() {
    return equipment.filter(rover => rover[1] === 'луноход' && +rover[2] > 5).map(el => el.join(', '))
}

// позволяет выбрать ракету с минимальной дальностью полёта
function getRightRocket() {
    rockets.shift()
    return rockets.sort((a, b) => +a[2] - +b[2])[0].join(', ')

}

module.exports = {
    getRightCaptain,
    getAllDM,
    getRightEngineer,
    getAllRover,
    getRightRovers,
    getRightRocket,
};
