// const name = 'Olena'
// const age = 43
// const outPut = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'
// console.log(outPut)
// const outPut = `Hello, my name is ${name} and my age is ${age}`
// console.log(outPut)
// const output = `
// <div> this is div </div>
// <p>this is p</p>
// `
// console.log(output)
// const name = 'Olena'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(3))
// console.log(name.indexOf('na'))
// console.log(name.toLowerCase().startsWith('ol'))
// console.log(name.endsWith('na!'))
// console.log(name.repeat(2))
// const string = '   password  '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())
function logPerson (s, name, age){
    if (age <0){
        age = 'It is not born'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Olena'
const personName2 ='Petya'
const personAge = 43
const  personAge2 = -10
const output = logPerson`${personName} ${personAge}`
console.log(output)
const output2 = logPerson`Name: ${personName2} Age: ${personAge2}`
console.log(output2)