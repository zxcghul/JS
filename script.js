let title = 'lesson02',
    screens = 'Простые, Сложные, Интерактивные',
    screenPrice = 4096,
    rollback = 20,
    fullPrice = 8192,
    adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(", "));
fullPrice = fullPrice * (rollback/100);
console.log(fullPrice);

title = prompt('Как будет называться ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?');
screenPrice = +prompt('Сколько будет стоить данная работа?');

adaptive = prompt('Нужен ли адаптив на сайте?');
    if (adaptive == 'Да' || adaptive == 'да') {
        adaptive = true;
    }
    else {
        adaptive = false;
    }

service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = +prompt('Сколько это будет стоить?');
service2 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;
servicePercentPrice = Math.ceil((fullPrice*(rollback/100)));
console.log('Откат посреднику: ' + servicePercentPrice + 'р');

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

