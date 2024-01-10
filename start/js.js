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

// --------------------------------------------------------------------------------

// const nowYear = 2024
// function calculateAge() {
//     this.age = nowYear - this.birthYear
//     return this.age
// }

// function calculateBmi() {
//     this.bmi = this.weight / this.heigth **2
//     return this.bmi
// }

// const andrey = {
//     name: 'Andrey',
//     weight: 97,
//     heigth: 1.83,
//     birthYear: 1992,
//     calculateBmi,
//     calculateAge
// }

// const vadim = {
//     name: 'Vadim',
//     weight: 93,
//     heigth: 1.82,
//     birthYear: 1994,
//     calculateBmi,
//     calculateAge

// }

// const sergey = {
//     name: 'Sergey',
//     weight: 105,
//     heigth: 1.89,
//     birthYear: 1985,
//     calculateBmi,
//     calculateAge

// }

// andrey.calculateBmi()
// vadim.calculateBmi()
// sergey.calculateBmi()
// andrey.calculateAge()
// vadim.calculateAge()

// console.log(andrey.bmi)
// console.log(vadim.bmi)
// console.log(sergey.bmi)

// if(andrey.bmi > vadim.bmi) {
//     console.log(`Иднекс массы ${andrey.name} ${andrey.bmi} больше, чем индекс ${vadim.name} ${vadim.bmi}`)
// } else if(andrey.bmi < vadim.bmi) {
//     console.log(`Иднекс массы ${vadim.name} ${vadim.bmi} больше, чем индекс ${andrey.name} ${andrey.bmi}`)
// } else {
//     console.log(`Ошибка`)
// }

const nowYear = 2024;

function calcAge() {
  this.age = nowYear - this.birthDay;
  return this.age;
}

function calcExpirience() {
  this.workExpirience = nowYear - this.workStart;
  return this.workExpirience;
}

const userOne = {
  name: "Valodya",
  birthDay: 1990,
  weight: 86,
  height: 1.89,
  country: "Belorus",
  city: "Minsk",
  workStart: 2010,
  calcAge,
  calcExpirience,
};

const userSecond = {
  name: "Dima",
  birthDay: 1983,
  weight: 89,
  heigth: 1.78,
  countyry: "USA",
  city: "New York",
  workStart: 2002,
  calcAge,
  calcExpirience
};

const userThree = {
  name: "Vika",
  birthDay: 1999,
  weight: 55,
  heigth: 1.75,
  country: "Russia",
  city: "Moskou",
  workStart: 1995,
  calcAge,
  calcExpirience
};

function useFun() {
  userOne.calcAge();
  console.log(userOne.calcAge());
  userOne.calcAge();
  console.log(userSecond.calcAge());
  userOne.calcAge();
  console.log(userThree.calcAge());
  userOne.calcExpirience();
  userSecond.calcExpirience();
  userThree.calcExpirience();
  console.log(userOne.workExpirience)
  console.log(userSecond.workExpirience)
  console.log(userThree.workExpirience)
}

useFun()
