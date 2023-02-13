"use strict";

const title = document.getElementsByTagName('h1')[0]

console.log(title) 

 const startBtn = document.getElementsByClassName('handler_btn')[0]  //рассчитать
 const resetBtn = document.getElementsByClassName('handler_btn')[1]	//сброс
 console.log(startBtn)
 console.log(resetBtn)

 const buttunPlus = document.querySelector('.screen-btn')  //плюс
 console.log(buttunPlus);


 const  otherItemPercent = document.querySelectorAll('.other-items.percent') //адаптация
 console.log(otherItemPercent);
 const  otherItemNumber  = document.querySelectorAll('.other-items.number') //адаптация
 console.log(otherItemNumber);

 const rollback = document.querySelector('.rollback')

 const inputRange = document.querySelector('.rollback  input')
 console.log(inputRange);

 const inputRangeValue  = document.querySelector('.rollback .range-value')
 console.log(inputRangeValue);

 const  total = document.getElementsByClassName('total-input')[0]
 const  totalCount = document.getElementsByClassName('total-input')[1]
 const  totalCountOther = document.getElementsByClassName('total-input')[2]
 const  fullTotalCount = document.getElementsByClassName('total-input')[3]
 const  totalCountRollBack = document.getElementsByClassName('total-input')[4]


let  screens = document.querySelectorAll('.screen')
	console.log(screens);

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	screenCount:0,
	adaptive: true,
	rollback: 0,
	ServicePricesPercent: 0,
	ServicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},

	init: function(){  
		appData.addTitle()
		startBtn.addEventListener('click',appData.start) 
		buttunPlus.addEventListener('click',appData.addScreenBlock)
		

		inputRange.addEventListener('input',appData.addRollbak)

	},

	addTitle : function() {
		document.title = title.textContent  
	},

	start: function () {
		appData.addScreens()
		appData.addServices()
		appData.addPrices();
	
		
		console.log(appData);
		appData.showResult()
	

	},

	addScreens : function() {
		screens = document.querySelectorAll('.screen')
 
		screens.forEach(function(screen,index){  //перебираем методом screens,получаем и select и инпут
			const select = screen.querySelector('select') //получаем  селекта и заносим в переменную
			const input = screen.querySelector('input')	//получаем  инпут и заносим в переменную
			const selectName = select.options[select.selectedIndex].textContent
			input.addEventListener('click',function(){
				if(screens.name != '' && screens.count != ''){
					startBtn.disabled = false
				}
			})
			console.log( (selectName == "Тип экранов" && +input.value >= 0) ||
			input.value === "Количество экранов") ;
				if( (selectName == "Тип экранов" && +input.value >= 0) ||
				input.value === "Количество экранов"){
					appData.init()
				}
				else{
					appData.screens.push({
						id: index,
						name: selectName,
						price: +select.value * +input.value,
						count: +input.value
					 })	
				}

		})		
		},

	
	
	showResult : function() {
			total.value = appData.screenPrice
			totalCountOther.value = appData.ServicePricesPercent +  appData.ServicePricesNumber
			fullTotalCount.value = appData.fullPrice
			totalCount.value = appData.screenCount
			totalCountRollBack.value = 	appData.servicePercentPrice 
		},

	addServices: function(){
			otherItemPercent.forEach(function(item){
				const check = item.querySelector('input[type="checkbox"]')
				const label = item.querySelector('label')
				const input = item.querySelector('input[type="text"]')
				
				
				if(check.checked){
					appData.servicesPercent[label.textContent] = +input.value
				}
				
			}),
			otherItemNumber.forEach(function(item){
				const check = item.querySelector('input[type="checkbox"]')
				const label = item.querySelector('label')
				const input = item.querySelector('input[type="text"]')
		       
				
				if(check.checked){
					appData.servicesNumber[label.textContent] = +input.value
				}
			})
				
		},

	addScreenBlock: function() {

			const cloneScreen = screens[0].cloneNode(true)
			screens[screens.length-1].after(cloneScreen)

			console.log(cloneScreen);
		},
 
	addPrices: function () {     //выщитывает стоимоть наших услуг и экранов
			appData.rollback = +inputRange.value
			console.log(inputRange.value);
		for (let screen of appData.screens) {
			appData.screenPrice += screen.price
			appData.screenCount += screen.count

		};
		for (let key in appData.servicesNumber) {
			appData.ServicePricesNumber += appData.servicesNumber[key]

		}

		for (let key in appData.servicesPercent) {
			appData.ServicePricesPercent += (appData.screenPrice * (appData.servicesPercent[key] / 100))

		}

		appData.fullPrice = +appData.screenPrice + appData.ServicePricesPercent + appData.ServicePricesNumber
		
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)) // доход с учетом отката посреднику.
	
	},

	addRollbak: function(event){
		inputRangeValue.textContent = event.target.value + '%' 
		//inputRangeValue.textContent = `${event.target.value}%`
		console.log(inputRange.value);
		
	},
		
	loggger: function () {
		console.log(appData.fullPrice);
		console.log(appData.servicePercentPrice);
		console.log(appData.screens);
	}

}
	appData.init()





