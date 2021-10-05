
//const firstName = 'Olenka'

//let age = 43
//const isProgrammer = true
//name = 'Olena'
//const lastName = prompt('Input your last name')
//alert(firstName + ' ' + lastName)
//let currentYear = 2021
// console.log ('Name of person: ' + firstName + ' , the age of person is: ' + age)
// console.log(age)
//const a = 10
//const b = 5
//let c = 32
//c = c + a
//c += a
//c -= a
// c *= a
// c /= a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log (currentYear++)
// console.log (currentYear)
// console.log (--currentYear)
// console.log (c += a)
// console.log (c *=a)
// console.log (c /= b)
// const isProgrammer = true
// const name = 'Helen'
// const age = 43
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// const fullAge = 43
// const birthYear = 1978
// const currentYear = 2021
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)
// const courseStatus = 'fail'
// if (courseStatus === 'ready'){
//     console.log('Course has already done and it can be used')
// } else if (courseStatus === 'pending'){
//   console.log('Course has not done yet')
// } else {
//     console.log('Course is fail')
// }
// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)
// const isReady = false
// if(isReady){
//     console.log('Everything is ready')
// }else {
//     console.log('Everything is not ready')
// }
// isReady ? console.log('Everything is ready') : console.log('Everything is not ready')
// function calculatedAge (year) {
//     return 2021 - year
// }
// // const myAge = calculatedAge(1978)
// // console.log(myAge)
// // console.log(calculatedAge(1978))
//
// function logInfoAbout (name, year){
//     const age = calculatedAge(year)
//     if (age >0){
//         console.log('The name of man is '+ name + ' and he has '+age)
//     } else {
//         console.log('This is a future')
//     }
//
// }
// logInfoAbout('Olena', 1978)
// logInfoAbout('Anna', 1949)
// logInfoAbout('Bob', 2028)
// const cars = ['Mazda', 'Audi', 'Jeep']
// console.log(cars)
// console.log(cars[2])
// console.log(cars.length)
// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda'
// console.log(cars)
const cars = ['Mazda', 'Audi', 'Jeep', 'Porsche']
// for (let i = 0; i < cars.length; i++){
//     const car = cars[i]
//     console.log(car)
// }
for (let car of cars){
    console.log(car)
}
const person = {
    firstName: 'Olena',
    lastName: 'Lupiy',
    age: 43,
    language: ['Uk', 'En', 'Pol'],
    hasHusband: true,
    greet: function (){
        console.log('greet')
    }
}
const key = 'age'
console.log(person.language)
console.log(person['lastName'])
console.log(person[key])

person.isProgrammer = true
console.log(person)
console.log(person.hasHusband);
const a = 25;