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
        }
    },
    start: function() {
        function asking() {
            appData.title = prompt('Как будет называться ваш проект?');
            appData.screens = prompt('Какие типы экранов нужно разработать?');
            do {
                appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
            } while (!isNumber(appData.screenPrice));
            appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        }

        const isNumber = function(num) {
            return !isNaN(parseFloat(num) && isFinite(num) || num === '')
        }
        
        const getAllServicePrices = function() {
            let sumStart = 0;
            for (let i = 0; i < 2; i++) {
                let sumFor;
                if (i === 0) {
                    appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
                }
                if (i === 1) {
                    appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
                }
                do {
                    sum1 = +prompt('Сколько это будет стоить?');
                } while (!isNumber(sum1)) //что введённые данные являются числом 
                sumStart = sumStart + sumFor;
        
            }
            return sumStart
        }
            
        
        
        function getFullPrice() {
            return appData.screenPrice + appData.allServicePrices
        };
        
        function getServicePercentPrices() {
            return appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice*(appData.rollback/100)));
        }
        
        function getTitle() {
            const noSpace = appData.title.trimStart().toLowerCase();
        return noSpace.charAt(0).toUpperCase() + noSpace.slice(1);
        }
        
        function showTypeOf(variabel) {
            console.log(variabel, typeof variabel);
        }
        
        function getRollbackMessage() {
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
        }
        
        asking();
        appData.allServicePrices = getAllServicePrices();
        appData.fullPrice = getFullPrice();
        appData.servicePercentPrice = getServicePercentPrices();
        appData.title = getTitle();
        appData.logger();
    }
    
}

appData.start();

