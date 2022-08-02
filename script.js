let num = 262619;
let arr = ('' + num).split('');
let arrNew = arr.map(Number);
let total = 1; 
arrNew.forEach((item, i) => {
    total *= arrNew[i];
})
console.log('Итог от перемножения цифр = ' + total);
let total2 = total ** 3;
console.log('После возведения в 3-юю степень = ' + total2);
let arrTotal2 = ('' + total2).split('');
let arrNewTotal = arrTotal2.map(Number);
let Total3 = arrNewTotal[0] + arrNewTotal[1];
console.log('Итоговое число:' + Total3);