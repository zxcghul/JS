const timer = () => {
    let start = new Date();
    let nextYear = new Date(start.getFullYear()+1, 0);
    const options = { weekday: 'long'};
    const dayWeekend = document.querySelector('.dayWeekend');
    const timeDay = document.querySelector('.timeDay');
    const [timeHrs, timeMin, timeSec, timeYears] = [document.querySelector('.timeHrs'), document.querySelector('.timeMin'), document.querySelector('.timeSec'), document.querySelector('.timeYears')]
    let day = new Intl.DateTimeFormat('ru-RU', options).format(start);
    switch (true) {
        case start.getHours() >= 6 && start.getHours() < 12:
            timeDay.textContent = 'Доброе утро!';
            break
        case start.getHours() >= 12 && start.getHours() < 18:
            timeDay.textContent = 'Добрый день!';  
            break
        case start.getHours() >= 18 && start.getHours() < 23:
            timeDay.textContent = 'Добрый вечер!';
            break
        case start.getHours() >= 23 && start.getHours() < 6:
            ctimeDay.textContent = 'Добрая ночь!';
            break
    }
    dayWeekend.textContent = day;
    timeHrs.textContent = start.getHours();
    timeMin.textContent = start.getMinutes();
    timeSec.textContent = start.getSeconds();
    timeYears.textContent = Math.floor((nextYear.getTime()-start.getTime())/(1000*60*60*24));
}
timer()
setInterval(() => {
    timer()
}, 1000);




