"use strict";

//блок обьявления переменных

let title 
let screens
let screenPrice 
let adaptive 

let rollback  = 20;
let allServicePrices
let fullPrice
let servicePercentPrice
 let service1 
let service2 




const inNumber = function (num) {
	return !isNaN(parseFloat(num) && isFinite(num) )
}

const ascing = function() {
	title = prompt('Как называется ваш проект?','калькулятор верстки');
	screens = prompt("Какие типы экранов нужно разработать?",'Простые, Сложные, Интерактивные')
	screenPrice = prompt('Сколько будет стоить данная работа?', );

	while (!inNumber(screenPrice)) {
		screenPrice = prompt('Сколько будет стоить данная работа?');
	}

	adaptive = confirm('Нужен ли адаптив на сайте?'); 

}



//блок описания функций
const showTypeOf = function(variable) {
	console.log(variable,typeof variable);
}

const  getAllServicePrices = function(){
	
	let sum = 0

	for( let i = 0; i < 2; i++) {
		if(i === 0 ){
			service1 = prompt("Какой дополнительный тип услуги нужен?")
		}else if(i ===1){
			service2 = prompt("Какой дополнительный тип услуги нужен?")
		}

		sum += +prompt("Сколько это будет стоить?")
	}
	return sum
}

 const getFullPrice = function () {
	return screenPrice + allServicePrices
	}
 
 const getTitle = function () {
	return  title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
}
 
 const getServicePercentPrices = function (){
	return fullPrice - (fullPrice * (rollback / 100))  
}




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
ascing()

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice()
title = getTitle();
servicePercentPrice = getServicePercentPrices()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice))

console.log('allServicePrices',allServicePrices);


console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);


console.log('Стоимость верстки экранов ' + screenPrice + " рублей" + " Стоимость разработки сайтов " + fullPrice + " рублей" );




