
const calcTitle = document.getElementsByTagName('h1')[0],
  [buttonStart, buttonReset] = [document.getElementsByClassName('handler_btn')[0], document.getElementsByClassName('handler_btn')[1]],
  buttonPlus = document.querySelector('.screen-btn'),
  allPercent = document.querySelectorAll('.percent'),
  allNumber = document.querySelectorAll('.number'),
  rollbackTypeRange = document.querySelector('.rollback input[type=range]'),
  rollbackSpan = document.querySelector('.rollback .range-value'),
  totalInput = document.getElementsByClassName('total-input'),
  [total, totalCount, totalCountOther, totalFullCount, totalCountRollback] = [document.getElementsByClassName('total-input')[0], document.getElementsByClassName('total-input')[1], document.getElementsByClassName('total-input')[2], document.getElementsByClassName('total-input')[3], document.getElementsByClassName('total-input')[4]];
let screenClass = document.querySelectorAll('.screen');

// const appData = {
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   service1: '',
//   service2: '',
//   title: '',
//   screens: '',
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,

// logger: function() {
//   for (let key in appData) {
//     console.log('Имя: ' + key + '\nСвойство: ' + appData[key] + '\n\n');
//   }
// },
  
// isNumber: function(num) {
//   return !isNaN(parseFloat(num) && isFinite(num))
// },
  
// isString: function(str) {
//   if (str !== null) {
//     let splits = str.replace(/ /g,'');
//     return (isFinite(splits) || str.length === 0 || typeof str === "undefined")
//   }
//   if (str === null)
//   return (true)
// },
  
  
// asking: function() {
//   do {
//     appData.title = prompt('Как будет называться ваш проект?');
//   } while (appData.isString(appData.title));
  
//   do {
//     appData.screens = prompt('Какие типы экранов нужно разработать?');
//   } while (appData.isString(appData.screens))
  
//   do {
//     appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
//   } while (!appData.isNumber(appData.screenPrice));

//   appData.adaptive = confirm('Нужен ли адаптив на сайте?');
// },
  
// getAllServicePrices: function() {
//   let sumStart = 0;
//   for (let i = 0; i < 2; i++) {
//     let sumFor;
//     if (i === 0) {
//       do {
//         appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
//       } while (appData.isString(appData.service1));
//     }
//     if (i === 1) {
//       do {
//         appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
//       } while (appData.isString(appData.service2));
//     }
//     do {
//       sumFor = +prompt('Сколько это будет стоить?');
//     } while (!appData.isNumber(sumFor)) //что введённые данные являются числом
//     sumStart = sumStart + sumFor;
//   }
//   return sumStart
// },
  
// getFullPrice: function() {
//   return appData.screenPrice + appData.allServicePrices
// },
  
// getServicePercentPrices: function() {
//   return appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice*(appData.rollback/100)));
// },
  
// getTitle: function() {
//   const noSpace = appData.title.trimStart().toLowerCase();
//   return noSpace.charAt(0).toUpperCase() + noSpace.slice(1);
// },
  
// showTypeOf: function(variabel) {
//   console.log(variabel, typeof variabel);
// },
  
// getRollbackMessage: function() {
//   switch (true) {
//     case appData.fullPrice > 30000:
//       console.log('Даем скидку в 10%');
//       break
//     case appData.fullPrice >= 15000:
//       console.log('Даем скидку в 5%');
//       break
//     case appData.fullPrice <= 15000:
//       console.log('Скидка не предусмотрена');
//       break
//     default:
//       console.log('Что то пошло не так');
//   }
//   },
  
// start: function() {
//   appData.asking();
//   appData.allServicePrices = appData.getAllServicePrices();
//   appData.fullPrice = appData.getFullPrice();
//   appData.servicePercentPrice = appData.getServicePercentPrices();
//   appData.title = appData.getTitle();
//   appData.logger();
// }   
// }
  
// appData.start();