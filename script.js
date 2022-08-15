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
    } while (!isNumber(screenPrice) || screenPrice == '');
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
    let sum2 = 0;
    for (let i = 0; i < 2; i++) {
        let sum1;
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        }
        if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }
        do {
            sum1 = +prompt('Сколько это будет стоить?');
        } while (!isNumber(sum1) || sum1 == '') //что введённые данные являются числом 
        sum2 = sum2 + sum1;

    }
    return sum2
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