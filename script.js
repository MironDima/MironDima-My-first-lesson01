"use strict";

const isNumber = function(num){  //method obj
	return !isNaN(parseFloat(num)) && isFinite(num)
}
		
const appData = {
 title : '',
 screens : '',
 screenPrice : 0,
 adaptive : true,

 rollback : 10,
 allServicePrices: 0,
 fullPrice: 0,
 servicePercentPrice: 0,
 service1 : '',
 service2 : '',

 start : function() {
	appData.ascing();
	appData.loggger()
},	
	loggger: function() {
		for(let key in appData){
			console.log("key: " + key + "," +' value: ' + appData[key])
		}
},
	
 ascing : function() {  				
	appData.title = prompt('Как называется ваш проект?','калькулятор верстки');
	appData.screens = prompt("Какие типы экранов нужно разработать?",'Простые, Сложные, Интерактивные')

	 do {
		appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
	 } while(!isNumber(appData.screenPrice))

	 appData.adaptive = confirm('Нужен ли адаптив на сайте?'); 
},

getAllServicePrices : function(){ 			//method obj
	let sum = 0
	for( let i = 0; i < 2; ++i) {
		let price
		if(i === 0 ) 
		{
			appData.service1 = prompt("Какой дополнительный тип услуги нужен?")

		}else if(i === 1){
			appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
		}
	
		do {
			price = prompt("Сколько это будет стоить?")
		} while (!isNumber(price))

		sum += +price
	}
	return sum
},
	getFullPrice : function () { 			//method obj
	return +appData.screenPrice + appData.allServicePrices
	},

	 getTitle : function () {   			//method obj
		return  appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
	},

	getServicePercentPrices : function (){   	//method obj
		return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))  
	},

	 getRollbackMessage : function(price) { 	//method obj
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
	
}
	appData.start()
	

appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice()
appData.title = appData.getTitle();
appData.servicePercentPrice = appData.getServicePercentPrices()


