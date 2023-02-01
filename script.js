"use strict";

//блок обьявления переменных

let title = getTitle(prompt('Как называется ваш проект?'));
let screens =prompt("Какие типы экранов нужно разработать?",'Простые, Сложные, Интерактивные') 
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let adaptive = confirm('Нужен ли адаптив на сайте?'); 

let rollback  = 20;
let allServicePrices
let fullPrice
let servicePercentPrice


const servicePrice1 = +prompt("Сколько это будет стоить?",200.10)

const servicePrice2 = +prompt("Сколько это будет стоить?",200.50)



//блок описания функций
const showTypeOf = function(variable) {
	console.log(variable,typeof variable);
}

const  getAllServicePrices = function(){
	return servicePrice1 + servicePrice2
}
allServicePrices = getAllServicePrices();

function getFullPrice() {
	return screenPrice + allServicePrices
	}
 fullPrice = getFullPrice()


function getTitle(str) {
	return  str[0].toUpperCase() + str.slice(1)
}
 getTitle(title);


function getServicePercentPrices(){
	return fullPrice - (fullPrice * (rollback / 100))  //9920.28
}
 servicePercentPrice = getServicePercentPrices()




//Функционал
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



//блок вывода в консоль

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)




console.log(screens);
console.log(servicePrice1);
console.log(servicePrice2);
console.log(getRollbackMessage(fullPrice))

