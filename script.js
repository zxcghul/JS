let book = document.querySelectorAll('.book'),
  back = document.querySelector('body'),
  add = document.querySelector('.adv'),
  chapterBookTwo = book[0].querySelectorAll('li'),
  chapterBookFive = book[5].querySelectorAll('li'),
  list = book[2].querySelectorAll('li'); 

book[0].insertAdjacentElement('beforebegin', book[1]);
book[2].insertAdjacentElement('beforebegin', book[4]);
book[5].insertAdjacentElement('afterend', book[2]);

chapterBookTwo[3].insertAdjacentElement('afterend', chapterBookTwo[6]);
chapterBookTwo[6].insertAdjacentElement('afterend', chapterBookTwo[8]);
chapterBookTwo[9].insertAdjacentElement('afterend', chapterBookTwo[2]);

chapterBookFive[1].insertAdjacentElement('afterend', chapterBookFive[9]);
chapterBookFive[9].insertAdjacentElement('afterend', chapterBookFive[3]);
chapterBookFive[3].insertAdjacentElement('afterend', chapterBookFive[4]);
chapterBookFive[6, 7].insertAdjacentElement('afterend', chapterBookFive[5]);

back.classList.add ('body__active');

book[4].querySelector('h2 a').innerHTML = 'Книга 3. this и Прототипы Объектов';

list[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');

add.remove();
