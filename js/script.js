
'use strict'

const calcTitle = document.getElementsByTagName('h1')[0],
  [buttonStart, buttonReset] = [document.getElementsByClassName('handler_btn')[0], document.getElementsByClassName('handler_btn')[1]],
  buttonPlus = document.querySelector('.screen-btn'),
  allPercent = document.querySelectorAll('.percent'),
  allNumber = document.querySelectorAll('.number'),
  rollbackTypeRange = document.querySelector('.rollback input[type=range]'),
  rollbackSpan = document.querySelector('.rollback .range-value'),
  totalInput = document.getElementsByClassName('total-input'),
  [total, totalCount, totalCountOther, totalFullCount, totalCountRollback] = [document.getElementsByClassName('total-input')[0], document.getElementsByClassName('total-input')[1], document.getElementsByClassName('total-input')[2], document.getElementsByClassName('total-input')[3], document.getElementsByClassName('total-input')[4]];
let screenClass = document.querySelectorAll('.screen'), 
  selectInput = document.querySelectorAll('.screen .main-controls__select select[name="views-select"]'), 
  selectInputValue = document.querySelectorAll('.screen .main-controls__input input[type="text"]'),
  span = document.querySelector('.range-value'), 
  range = document.querySelector('input[type=range]');
  
const appData = {
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  count: 0,

init: function() {
  appData.addTitle();
  buttonStart.addEventListener('click', function() {
    let i=0;
    screenClass = document.querySelectorAll('.screen')
    selectInput = document.querySelectorAll('.screen .main-controls__select select[name="views-select"]');
    selectInputValue = document.querySelectorAll('.screen .main-controls__input input[type="text"]')
    screenClass.forEach(function(item, index) {
      if ((selectInput[index].value === '') || (selectInputValue[index].value === '')) {
        index++
        return alert('Введите все данные у ' + index + '-й строки') 
      }
      i++; 
    })
    if (i === selectInputValue.length) {
      appData.start()
    }
  });
  buttonPlus.addEventListener('click', appData.addScreenBlock)
  range.addEventListener('input', appData.step)
},

step: function (event) {
  span.textContent = event.target.value + '%';
  appData.rollback = +event.target.value;
},

showResult: function() {
  total.value = appData.screenPrice;
  totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
  totalFullCount.value = appData.fullPrice
  totalCountRollback.value = appData.servicePercentPrice
  totalCount.value = appData.count
},

addServices: function() {
  allPercent.forEach(function(item) {
    const check = item.querySelector('input[type=checkbox]');
    const label = item.querySelector('label');
    const input = item.querySelector('input[type=text]');
    if (check.checked) {
      appData.servicesPercent[label.textContent] = +input.value
    }
    
  })
  allNumber.forEach(function(item) {
    const check = item.querySelector('input[type=checkbox]');
    const label = item.querySelector('label');
    const input = item.querySelector('input[type=text]');
    if (check.checked) {
      appData.servicesNumber[label.textContent] = +input.value
    }
    
  })
  console.log(appData);
},

addScreenBlock: function() {
  
  screenClass = document.querySelectorAll('.screen');
  let cloneScreen = screenClass[0].cloneNode(true);
  cloneScreen.querySelector('.screen .main-controls__input input[type="text"]').value = ""
  screenClass[screenClass.length - 1].after(cloneScreen)
  
},

addTitle: function () {
  document.title = calcTitle.textContent
},

addScreens: function() {
  screenClass = document.querySelectorAll('.screen');

  screenClass.forEach(function(screen, index) {
    const select = screen.querySelector('select'),
      input = screen.querySelector('input'),
      selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      })
  })
},

logger: function() {
  for (let key in appData) {
    console.log('Имя: ' + key + '\nСвойство: ' + appData[key] + '\n\n');
  }
},
  
isString: function(str) {
  if (str !== null) {
    let splits = str.replace(/ /g,'');
    return (isFinite(splits) || str.length === 0 || typeof str === "undefined")
  }
  if (str === null)
  return (true)
},
  
  
addPrices: function() {
  selectInputValue.forEach(function(item) {
    appData.count += +item.value
  })
  for  (let screen of appData.screens) {
    appData.screenPrice += +screen.price
  }

  for (let key in appData.servicesNumber) {
    appData.servicePricesNumber += appData.servicesNumber[key];
  }

  for (let key in appData.servicesPercent) {
    appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
  }
  appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
  appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice*(appData.rollback/100)));
},
  
  
getServicePercentPrices: function() {
  return appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice*(appData.rollback/100)));
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
  appData.addScreens();
  appData.addServices();
  appData.addPrices()
  appData.showResult();
}   
}
  
appData.init();