'use strict'



function RandomizeGame () {
    alert('Угадай число от 1 до 100');

    let number,
    questAnswer,
    question,
    attempts = 2;


    function  reboot() {
        question = confirm('Хотели бы сыграть еще?');
        if (question === true) {
            return RandomizeGame ()
        }
    }

    function isNumber() {
        questAnswer = prompt('Введи своё число:');
        if (questAnswer == null) {
            return alert('Досвидания!');
        }
        if ((isNaN(parseFloat(questAnswer) && isFinite(questAnswer)) || questAnswer == "") == true) {
            alert('Нужно ввести число!!');
            return isNumber()
        }
         
    }

    function isAnswer() {
        if (attempts == 0) {
            reboot();
        }
        if (questAnswer == null) {
            return
        }
        if (questAnswer > number) {
            alert('Загаданное число меньше! \nКол-во попыток = ' + attempts);
            attempts--;
            isNumber();
            return isAnswer()
        }
        if (questAnswer < number) {
            alert('Загаданное число больше \nКол-во попыток = ' + attempts);
            attempts--;
            isNumber();
            return isAnswer()
        }
        alert('Поздравляю, вы угадали!!');
        reboot();
        
    }
    
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    number = getRandom(1, 100);
    
    isNumber();
    isAnswer();
    
    
}

RandomizeGame();