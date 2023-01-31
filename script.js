"use strict";

//блок обьявления переменных
const title = getTitle(prompt('Как называется ваш проект?'));
let screens =prompt("Какие типы экранов нужно разработать?",'Простые, Сложные, Интерактивные') 
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let adaptive = confirm('Нужен ли адаптив на сайте?'); 
const servicePrice1 = +prompt("Сколько это будет стоить?",200.10)
const servicePrice2 = +prompt("Сколько это будет стоить?",200.50)
let rollback  = 20;


//блок описания функций




//Функционал

const showTypeOf = function(variable) {
		console.log(variable,typeof variable);
}

const getRollbackMessage = function(price) {
if (price >= 30000) {
	 return 'Даем скидку в 10%'
}
else if (price < 30000 && price >= 15000){
	return 'Даем скидку в 5%'
}
else if (price < 15000  && price >= 0){
	return 'Скидка не предусмотрена'
}
else if( price < 0){
	return 'Что то пошло не так'
}
}

const  getAllServicePrices = function(price1,price2){
	return price1 + price2
}
const allServicePrices = getAllServicePrices(servicePrice1,servicePrice2);

function getFullPrice(sum,allSum) {
	return sum + allSum
	}

const fullPrice = getFullPrice(screenPrice, allServicePrices)


function getTitle(str) {
	return str[0].toUpperCase() + str.slice(1)
}
getTitle(title)


function getServicePercentPrices(){
	return fullPrice - (fullPrice * (rollback / 100))  //9920.28
}
const servicePercentPrice = getServicePercentPrices()


//блок вывода в консоль

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(screens);
console.log(servicePrice1);
console.log(servicePrice2);
console.log(getRollbackMessage(fullPrice))




