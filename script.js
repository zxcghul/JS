// const rollback = 10;
// let allServicePrices, fullPrice, servicePercentPrice, service1, service2, title, screens, screenPrice, adaptive;

const appData = {
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,

logger: function() {

for (let key in appData) {
  console.log('Имя: ' + key + '\nСвойство: ' + appData[key] + '\n\n');
}},
  
isNumber: function(num) {
  return !isNaN(parseFloat(num) && isFinite(num))
},
  
isString: function(str) {
  return str.search(/[A-Za-z]/g) === -1
},
  
isSpaceString: function(str) {
  return !str || str.length === 0
},
  
asking: function() {
do {
  appData.title = prompt('Как будет называться ваш проект?');
} while (appData.isString(appData.title));
  
do {
  appData.screens = prompt('Какие типы экранов нужно разработать?');
} while (appData.isString(appData.screens))
  
do {
  appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
} while (!appData.isNumber(appData.screenPrice) || appData.isSpaceString(appData.screenPrice));

appData.adaptive = confirm('Нужен ли адаптив на сайте?');
},
  
getAllServicePrices: function() {
  let sumStart = 0;
  for (let i = 0; i < 2; i++) {
    let sumFor;
    if (i === 0) {
      do {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
      } while (appData.isString(appData.service1));
    }
    if (i === 1) {
      do {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
      } while (appData.isString(appData.service2));
    }
    do {
      sumFor = +prompt('Сколько это будет стоить?');
    } while (!appData.isNumber(sumFor) || appData.isSpaceString(sumFor)) //что введённые данные являются числом
    sumStart = sumStart + sumFor;
  }
  return sumStart
},
  
getFullPrice: function() {
  return appData.screenPrice + appData.allServicePrices
},
  
getServicePercentPrices: function() {
  return appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice*(appData.rollback/100)));
},
  
getTitle: function() {
  const noSpace = appData.title.trimStart().toLowerCase();
  return noSpace.charAt(0).toUpperCase() + noSpace.slice(1);
},
  
showTypeOf: function(variabel) {
  console.log(variabel, typeof variabel);
},
  
getRollbackMessage: function() {
  switch (true) {
    case appData.fullPrice > 30000:
      console.log('Даем скидку в 10%');
      break
    case appData.fullPrice >= 15000:
      console.log('Даем скидку в 5%');
      break
    case appData.fullPrice <= 15000:
      console.log('Скидка не предусмотрена');
      break
    default:
      console.log('Что то пошло не так');
  }
  },
  
start: function() {
  appData.asking();
  appData.allServicePrices = appData.getAllServicePrices();
  appData.fullPrice = appData.getFullPrice();
  appData.servicePercentPrice = appData.getServicePercentPrices();
  appData.title = appData.getTitle();
  appData.logger();
}   
}
  
appData.start();