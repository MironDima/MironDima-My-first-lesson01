"use strict";

const culcul = document.getElementsByTagName('h1')

console.log(culcul[0]) 

 const scoreBtns = document.getElementsByClassName('handler_btn')

 console.log(scoreBtns)

 const plusBtn = document.querySelector('.screen-btn')

 console.log(plusBtn);

 const  percentItems = document.querySelectorAll('.other-items.percent')
 console.log(percentItems);

 const  numberItems  = document.querySelectorAll('.other-items.number')

 console.log(numberItems);

 const rollback = document.querySelector('.rollback > div > input')

 console.log(rollback);

 const span  = document.querySelector('.rollback > div > span')
 console.log(span);

 const  totalInput = document.getElementsByClassName('total-input')
 console.log(totalInput[0].localName);
 console.log(totalInput[1].localName);
 console.log(totalInput[2].localName);
 console.log(totalInput[3].localName);
 console.log(totalInput[4].localName);

let  screen = document.querySelectorAll('.screen')
console.log(screen);


const isNumber = function (num) {  //method obj
	return !isNaN(parseFloat(num)) && isFinite(num)
}
const isStr = function (str) {
	return isFinite(str)
}

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},


	start: function () {
		appData.ascing();
		appData.addPrices();
		appData.getFullPrice()
		appData.getTitle();
		appData.getServicePercentPrices()

		appData.loggger();
	},


	ascing: function () {

		do {
			appData.title = prompt('Как называется ваш проект?')
		} while (isStr(appData.title))

		for (let i = 0; i < 2; ++i) {
			let name
			do {
				name = prompt("Какие типы экранов нужно разработать?")
			} while (isStr(name))
			console.log(typeof name);

			let price = 0
			do {
				price = +prompt('Сколько будет стоить данная работа?');
			} while (!isNumber(price))
			console.log(typeof price);

			appData.screens.push({ id: i, name: name, price: price })
		}

		for (let i = 0; i < 2; ++i) {
			let name
			do {
				name = prompt("Какой дополнительный тип услуги нужен?")
			} while (isStr(name))
			console.log(typeof name);

			let price = 0
			do {
				price = +prompt("Сколько это будет стоить?")
			} while (!isNumber(price))
			console.log(typeof price);
			appData.services[name] = price    //пара ключ -знач

		}
		appData.adaptive = confirm('Нужен ли адаптив на сайте?');

	},
	addPrices: function () {				//выщитывает стоимоть наших услуг и экранов
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price

			
		};
		for (let key in appData.services) {
			appData.allServicePrices += appData.services[key]

		}

	},


	getFullPrice: function () { 			//method obj
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices
	},

	getTitle: function () {   			//method obj
		appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
		console.log(typeof appData.title)
	},

	getServicePercentPrices: function () {   	//method obj
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
	},

	getRollbackMessage: function (price) { 	//method obj
		if (price >= 30000) {
			return 'Даем скидку в 10%'
		}
		else if (price < 30000 && price >= 15000) {
			return 'Даем скидку в 5%'
		}
		else if (price < 15000 && price >= 0) {
			return 'Скидка не предусмотрена'
		}
		else if (price < 0) {
			return 'Что то пошло не так'
		}
	},

	loggger: function () {
		console.log(appData.fullPrice);
		console.log(appData.servicePercentPrice);
		console.log(appData.screens);
	}

}
appData.start()





