let title = 'lesson02',
    screens = 'Простые, Сложные, Интерактивные',
    screenPrice = 4096,
    rollback = 55,
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
