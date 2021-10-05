// const num = 43
// const float = 42.42
// const pow = 10e3
// console.log(float)
// console.log(pow)
// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math pow 53', Math.pow(2, 53)-1)
// console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('Number.MAX_VALUE', Number.MAX_VALUE)
// console.log('Number.MIN_VALUE', Number.MIN_VALUE)
// console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //позитивна безкінечність
// console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // негативна безкінечність
// console.log(2/0)
// console.log(Number.NaN) // Not A Number
// const weird = 2/undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(isFinite(5))
// console.log(isFinite(Infinity))
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2)
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)
// console.log(0.2 + 0.4)
// console.log((0.2+0.4).toFixed(1))//це строка
// console.log(+(0.2+0.4).toFixed(1)) //це число
// console.log(parseFloat((0.2+0.4).toFixed(1))) // це число
// BigInt
// console.log(900719925474099199999n)
// console.log(900719925474099199999n - 90071992547409919999n)
//console.log(900719925474099199999.235n)// error
//console.log(900719925474099199999n - 2) error
//console.log(10n - 4) error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)
// Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.pow(6,4))
// console.log(Math.sqrt(198))
// console.log(Math.abs(-56))
// console.log(Math.max(12, 56, 123, 148, 1))
// console.log(Math.min(12, 56, 123, 148, 1))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.1))
// console.log(Math.round(4.6))
// console.log(Math.round(4.4))
// console.log(Math.trunc(4.4))
// console.log(Math.trunc(4.5))
// console.log(Math.trunc(4.9))
// console.log(Math.random())
function getRandomBetweem (min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

console.log(getRandomBetweem(10, 42));