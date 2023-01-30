"use strict";
// //misson
// let title = "Третий урок";
// console.log(typeof title); //Вывести в консоль тип данных значений переменной title

// let screens = "Простые, Сложные, Интерактивные"
// console.log(screens.length);   //Вывести в консоль длину строки из переменной screens
// //Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
// console.log(screens.toLowerCase().split())  

// let screenPrice = 24;
// //Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани”
// console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани")  //предложение

//let rollback  = 20;    

// let fullPrice = 50000;
// console.log(typeof fullPrice); //Вывести в консоль тип данных значений переменной fullPrice
// //Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
// console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани") //предложение

// let adaptive = true;     
// console.log(typeof adaptive);  //Вывести в консоль тип данных значений переменной adaptive

// //Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
 //const result = "Процент отката посреднику за работу " + fullPrice *(rollback / 100)
 //console.log(result);

//Спрашиваем у пользователя “Как называется ваш проект?”
let title = prompt('Как называется ваш проект?');
console.log(title);

//Спросить у пользователя “Какие типы экранов нужно разработать?”
 let screens =prompt("Какие типы экранов нужно разработать?",'Простые, Сложные, Интерактивные') 
 console.log(screens);

// Спросить у пользователя “Сколько будет стоить данная работа?”
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
console.log(screenPrice);

// Спросить у пользователя “Нужен ли адаптив на сайте?”
let adaptive = confirm('Нужен ли адаптив на сайте?'); 
console.log(adaptive);

//Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
const service1 = prompt("Какой дополнительный тип услуги нужен?",'Дизайн1')
console.log(service1);
const servicePrice1 = +prompt("Сколько это будет стоить?",200.10)
console.log(servicePrice1);
const service2 = prompt("Какой дополнительный тип услуги нужен?",'Дизайн2')
console.log(service2);
const servicePrice2 = +prompt("Сколько это будет стоить?",200.50)
console.log(servicePrice2);

// Вычислить итоговую стоимость работы
let fullPrice = screenPrice + servicePrice1 + servicePrice2 //1600

//Объявить переменную servicePercentPrice и занести в нее итоговую стоимость
let rollback  = 20; 
const result = fullPrice * (rollback / 100) //320
const servicePercentPrice = fullPrice - result;
console.log(Math.ceil(servicePercentPrice)); //1281
//Написать конструкцию условий (расчеты приведены в рублях)

if (fullPrice >= 30000) {
	console.log('Даем скидку в 10%')
}
else if (fullPrice < 30000 && fullPrice >= 15000){
	console.log('Даем скидку в 5%')
}
else if (fullPrice < 15000  && fullPrice >= 0){
	console.log('Скидка не предусмотрена')
}
else if( fullPrice < 0){
	console.log('Что то пошло не так')
}

