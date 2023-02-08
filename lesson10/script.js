
const book = document.querySelectorAll('.book')

const tegA =document.getElementsByTagName('a')

const list = document.getElementsByTagName('li')

//Восстановить порядок книг.
book[0].before(book[1])
book[2].before(book[4])
book[2].before(book[3])
book[2].before(book[5])
console.log(book);

//Заменить картинку 
const url = document.querySelector('body')
url.style.backgroundImage =  "url(./image/you-dont-know-js.jpg)"

//Исправить заголовок в книге 3
tegA[2].innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов'
console.log(tegA[2]);

//Удалить рекламу со страницы
const advertising = document.querySelector('.adv')
advertising.remove()
console.log(advertising);

//Восстановить порядок глав во второй и пятой книге
list[10].before(list[12])
list[10].after(list[14])
list[15].after(list[8])

list[37].after(list[45])
list[41].after(list[39])
list[41].after(list[43])
list[42].after(list[44])

list[55].insertAdjacentHTML('afterend','<li>Глава 8: За пределами ES6</li>')
console.log(list);

