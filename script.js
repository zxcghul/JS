const rollback = 10,
    title = prompt('Как будет называться ваш проект?'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?');
let allServicePrices, fullPrice, servicePercentPrice;
    
    

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
};

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
        case fullPrice >= 15000 && fullPrice <= 30000:
            console.log('Даем скидку в 5%');  
            break
        case fullPrice <= 15000 && fullPrice > 0:
            console.log('Скидка не предусмотрена');
            break
        case fullPrice <= 0:
            console.log('Что то пошло не так');
            break
    }
}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(screens);

console.log('Итоговая стоимость почсле вычета посреднику: ' + servicePercentPrice + 'р');
console.log(getRollbackMessage());

