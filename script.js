'use strict'



function RandomizeGame () {
    let number,
    quest = confirm('Угадай число от 1 до 100'),
    questAnswer;

    if (quest == false) {
        alert('Прощай((')
    }

    function isNumber() {
        questAnswer = prompt('Введи своё число:');
        if (questAnswer === null) {
            return alert('Досвидания!');
        }
        if ((isNaN(parseFloat(questAnswer) && isFinite(questAnswer)) || questAnswer == "") == true) {
            alert('Нужно ввести число!!')
            return isNumber()
        }
         
    }

    function isAnswer() {
        if (questAnswer == null) {
            return
        }
        if (questAnswer > number) {
            alert('Загаданное число меньше!')
            isNumber();
            return isAnswer()
        }
        if (questAnswer < number) {
            alert('Загаданное число больше')
            isNumber();
            return isAnswer()
        }
        alert('Поздравляю, вы угадали!!')
    }
    
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    number = getRandom(1, 100);
    alert(number);
    isNumber(questAnswer);
    isAnswer();
    
}

RandomizeGame();