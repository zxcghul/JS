
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
  range = document.querySelector('input[type=range]'),
  checkbox = document.querySelectorAll('.custom-checkbox'),
  checkBind;
let i;

  
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
  this.addTitle();
  range.addEventListener('input', () => {
    this.step();
  });
  buttonStart.addEventListener('click', () => {
    this.adder();
  });
  buttonPlus.addEventListener('click', () => {
    this.addScreenBlock();
  });
  buttonReset.addEventListener('click', () => {
    this.reset()
  });
  
},

validation: function (item, index) {
  if ((selectInput[index].value === '') || (selectInputValue[index].value === '')) {
    return alert('Введите все данные у ' + (+index + 1) + '-й строки') 
  }
  i++; 
  if (i === selectInputValue.length) {
    buttonReset.style.display = 'block';
    buttonStart.style.display = 'none';
    this.disabOn();
    this.start();
  }
},

disabOn: function () {
  selectInput.forEach((item) => {
    item.disabled = true;
  });
  selectInputValue.forEach((item) => {
    item.disabled = true;
  });
  checkbox.forEach((item) => {
    item.disabled = true;
  });
  rollbackTypeRange.disabled = true;
  buttonPlus.disabled = true;
},

disabOff: function () {
  selectInput.forEach((item) => {
    item.disabled = false;
  });
  selectInputValue.forEach((item) => {
    item.disabled = false;
  });
  checkbox.forEach((item) => {
    item.disabled = false;
  });
  rollbackTypeRange.disabled = false;
  buttonPlus.disabled = false;
},

check: function () {
  i=0;
  screenClass.forEach((item, index) => {
    this.validation(item, index)
  });
},

adder: function () {
  selectInput = document.querySelectorAll('.screen .main-controls__select select[name="views-select"]');
  selectInputValue = document.querySelectorAll('.screen .main-controls__input input[type="text"]');
  this.check();

},

resetValue: function () {
  selectInputValue[0].value = "";
  selectInput[0].value = "";
  this.screens = [];
  this.servicePricesPercent = 0;
  this.servicePricesNumber = 0;
  this.fullPrice = 0;
  this.servicePercentPrice = 0;
  this.servicesPercent = {};
  this.servicesNumber = {};
  this.title = '';
  this.screens = [];
  this.screenPrice = 0;
  this.adaptive = true;
  this.rollback = 0;
  this.count = 0;
  total.value = 0;
  totalCountOther.value = 0;
  totalFullCount.value = 0;
  totalCountRollback.value = 0;
  rollbackTypeRange.value = 0;
  span.textContent = rollbackTypeRange.value + '%';
  totalCount.value = 0;
  checkbox.forEach((item) => {
    item.checked = false;
  });

},

step: function () {
  span.textContent = rollbackTypeRange.value + '%';
  this.rollback = +rollbackTypeRange.value;
},

showResult: function() {
  total.value = this.screenPrice;
  totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
  totalFullCount.value = this.fullPrice;
  totalCountRollback.value = this.servicePercentPrice;
  totalCount.value = this.count;
},

addServices: function() {
  allPercent.forEach((item) => {
    const check = item.querySelector('input[type=checkbox]');
    const label = item.querySelector('label');
    const input = item.querySelector('input[type=text]');
    if (check.checked) {
      this.servicesPercent[label.textContent] = +input.value;
    }
    
  })
  allNumber.forEach((item) => {
    const check = item.querySelector('input[type=checkbox]');
    const label = item.querySelector('label');
    const input = item.querySelector('input[type=text]');
    if (check.checked) {
      this.servicesNumber[label.textContent] = +input.value;
    }
    
  })
},

addScreenBlock: function() {
  let cloneScreen = screenClass[0].cloneNode(true);
  cloneScreen.querySelector('.screen .main-controls__input input[type="text"]').value = "";
  screenClass[screenClass.length - 1].after(cloneScreen);
  screenClass = document.querySelectorAll('.screen'); 
},

addTitle: function () {
  document.title = calcTitle.textContent;
},

addScreens: function() {
  screenClass.forEach((screen, index) => {
    const select = screen.querySelector('select'),
      input = screen.querySelector('input'),
      selectName = select.options[select.selectedIndex].textContent;
      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      })
  })
},

logger: function() {
  for (let key in this) {
    console.log('Имя: ' + key + '\nСвойство: ' + this[key] + '\n\n');
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
  selectInputValue.forEach((item) => {
    this.count += +item.value;
    
  })
  for  (let screen of this.screens) {
    this.screenPrice += +screen.price;
  }

  for (let key in this.servicesNumber) {
    this.servicePricesNumber += this.servicesNumber[key];
  }

  for (let key in this.servicesPercent) {
    this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
  }
  this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
  this.servicePercentPrice = this.fullPrice + Math.ceil((this.fullPrice*(this.rollback/100)));
},
  
  
getServicePercentPrices: function() {
  return this.servicePercentPrice = this.fullPrice + Math.ceil((this.fullPrice*(this.rollback/100)));
},
  
showTypeOf: function(variabel) {
  console.log(variabel, typeof variabel);
},

reset: function() {
    console.log(this.screens);
    for (let index = 1; index < screenClass.length; index++) {
      screenClass[index].remove();
      screenClass = document.querySelectorAll('.screen');
    }
    this.disabOff();
    this.resetValue();
    buttonReset.style.display = 'none';
    buttonStart.style.display = 'block';

},
  
start: function() {
  this.addScreens();
  this.addServices();
  this.addPrices();
  this.showResult();
}   
}
  
appData.init();