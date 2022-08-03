let num = 262619;
let arr = ('' + num).split('');
let arrNew = arr.map(Number);
let total = 1; 

arrNew.forEach((item, i) => {
    total *= arrNew[i];
})

console.log('Итог от перемножения цифр = ' + total);
let totalSecond = total ** 3;

console.log('После возведения в 3-юю степень = ' + totalSecond);
console.log('Две первые цифры: ' + String(totalSecond).slice(0,2));