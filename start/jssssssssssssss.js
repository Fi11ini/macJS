/* 

ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела(BMI), с помощью объектов. 
2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. - Для каждого из сравниваемых людей, создайте объект со свойствами которые будут содержать их имя, массу тела и рост.
4. - Создайте метод в объекте который будет считать индекс массы тела и возвращать результат
5. Сравните индексы массы тел двух людей (данные ниже), и выведите в консоль результат. 
Например: Индекс массы тела Петра (28.1), больше индекса массы тела Дениса (24.3)!.

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

ПОДСКАЗКА:

1. - В качестве метода можете использовать как Function Declaration, так и Fancrion Expression.
2. - Не забывайте про сокращенную запись свойств.
3. - Не забывайте про метод this.

*/

// function calcBmi() {
//     this.bmiRes = this.mass / this.height **2
//     return this.bmiRes
// }

// const piter = {
//     name: 'Piter',
//     mass: 72,
//     height: 1.88,
//     calcBmi
// }

// const denis = {
//     name: 'Denis',
//     mass: 82,
//     height: 1.73,
//     calcBmi
// }

// piter.calcBmi()
// denis.calcBmi()

// console.log(piter.bmiRes)
// console.log(denis.bmiRes) 

// if(piter.bmiRes > denis.bmiRes) {
//     console.log(`Индекс массы тела ${piter.name} ${piter.bmiRes}, больше чем у ${denis.name} ${denis.bmiRes}`)
// } else if(piter.bmiRes < denis.bmiRes) {
//     console.log(`Индекс массы тела ${denis.name} ${denis.bmiRes}, больше чем у ${piter.name} ${piter.bmiRes}`)
// } else {
//     console.log('Произошла ошибка. Попробуйте еще раз')
// }

function calculateBmi() {
    this.bmi = this.weight / this.heith **2
    return this.bmi
}



const andrey = {
    name: 'Andrey',
    weight: 97,
    heith: 1.83,
    calculateBmi
}

const vadim = {
    name: 'Vadim',
    weight: 93,
    heith: 1.82,
    calculateBmi
}

andrey.calculateBmi()
vadim.calculateBmi()

console.log(andrey.bmi)
console.log(vadim.bmi)

if(andrey.bmi > vadim.bmi) {
    console.log(`Иднекс массы ${andrey.name} ${andrey.bmi} больше, чем индекс ${vadim.name} ${vadim.bmi}`)
} else if(andrey < vadim.bmi) {
    h
}