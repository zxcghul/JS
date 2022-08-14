const rollback = 10;
let allServicePrices, fullPrice, servicePercentPrice, service1, service2, title, screens, screenPrice, adaptive;

const isNumber = function(num) {
    return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function() {
    title = prompt('Как будет называться ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?');
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?')
    } while (isNaN(screenPrice) || screenPrice == '');  //проверка на NaN и пустую строку
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
    let sum1, sum2;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
            do {
                sum1 = +prompt('Сколько это будет стоить?')
            } while (!isNumber(sum1)) //что введённые данные являются числом
        }
        if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
            do {
                sum2 = +prompt('Сколько это будет стоить?')
            } while (isNaN(sum2) || sum2 == '') //что введённые данные являются числом
        }
        
        

    }
    return sum1 + sum2
}
    


function getFullPrice() {
    return screenPrice + allServicePrices
};

function getServicePercentPrices() {
    return servicePercentPrice = fullPrice - Math.ceil((fullPrice*(rollback/100)));
}

function getTitle() {
    const noSpace = title.trimStart().toLowerCase();
return noSpace.charAt(0).toUpperCase() + noSpace.slice(1);
}

function showTypeOf(variabel) {
    console.log(variabel, typeof variabel);
}

function getRollbackMessage() {
    switch (true) {
        case fullPrice > 30000:
            console.log('Даем скидку в 10%');
            break
        case fullPrice >= 15000:
            console.log('Даем скидку в 5%');  
            break
        case fullPrice <= 15000:
            console.log('Скидка не предусмотрена');
            break
        default:
            console.log('Что то пошло не так');
    }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);

console.log('Итоговая стоимость после вычета посреднику: ' + servicePercentPrice + 'р');
getRollbackMessage();